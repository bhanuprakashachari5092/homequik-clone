import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

interface LocationContextType {
  location: string;
  coords: { latitude: number; longitude: number } | null;
  isLocating: boolean;
  fetchDynamicLocation: (silent?: boolean) => void;
  updateLocation: (newLocation: string) => void;
}

const LocationContext = createContext<LocationContextType | null>(null);

export const LocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [location, setLocation] = useState("Bangalore");
  const [coords, setCoords] = useState<{ latitude: number; longitude: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);

  const fetchIpLocation = async (silent = false) => {
    try {
      const res = await fetch("https://ipapi.co/json/");
      if (res.ok) {
        const data = await res.json();
        const city = data.city || "";
        const region = data.region || "";
        if (city) {
          const displayLoc = city + (region ? `, ${region}` : "");
          setLocation(displayLoc);
          setCoords({
            latitude: data.latitude || 0,
            longitude: data.longitude || 0
          });
          if (!silent) {
            toast.success(`Location auto-detected to ${displayLoc}`);
          }
          console.log("[LocationContext] Automatically resolved IP location:", displayLoc);
          return true;
        }
      }
    } catch (err) {
      console.warn("[LocationContext] IP location fetch failed:", err);
    }
    return false;
  };

  const fetchDynamicLocation = (silent = false) => {
    if (typeof window === "undefined") return;
    
    setIsLocating(true);
    if (!silent) {
      toast.info("Detecting your location automatically...", { id: "loc-toast" });
    }

    if (!navigator.geolocation) {
      fetchIpLocation(silent).finally(() => setIsLocating(false));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
        if (!silent) toast.dismiss("loc-toast");
        try {
          let displayLoc = "";
          const googleApiKey = (import.meta as any).env.VITE_GOOGLE_MAPS_API_KEY;

          // 1. Try Google Maps Geocoding API if key is present
          if (googleApiKey) {
            try {
              const res = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${googleApiKey}`
              );
              if (res.ok) {
                const data = await res.json();
                if (data.status === "OK" && data.results && data.results.length > 0) {
                  const firstResult = data.results[0];
                  const comps = firstResult.address_components || [];
                  
                  let area = "";
                  let city = "";
                  
                  for (const c of comps) {
                    if (c.types.includes("sublocality_level_1") || c.types.includes("neighborhood")) {
                      area = c.long_name;
                    }
                    if (c.types.includes("locality")) {
                      city = c.long_name;
                    }
                  }
                  
                  if (area && city) {
                    displayLoc = `${area}, ${city}`;
                  } else if (city) {
                    displayLoc = city;
                  } else if (area) {
                    displayLoc = area;
                  } else {
                    displayLoc = firstResult.formatted_address;
                  }
                }
              }
            } catch (e) {
              console.warn("Google Maps geocoding failed, trying fallbacks...", e);
            }
          }

          // 2. Try BigDataCloud reverse geocoding as a fallback
          if (!displayLoc) {
            try {
              const res = await fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
              );
              if (res.ok) {
                const data = await res.json();
                const area = data.locality || "";
                const city = data.city || data.principalSubdivision || "";
                if (area && city) {
                  displayLoc = `${area}, ${city}`;
                } else if (city) {
                  displayLoc = city;
                } else if (area) {
                  displayLoc = area;
                }
              }
            } catch (e) {
              console.warn("BigDataCloud geocoding failed, trying Nominatim fallback...", e);
            }
          }

          // 3. Fallback to Nominatim if others did not succeed
          if (!displayLoc) {
            try {
              const res = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}&email=kh2kgaming@gmail.com`,
                {
                  headers: {
                    "Accept-Language": "en-US,en;q=0.9",
                  }
                }
              );
              if (res.ok) {
                const data = await res.json();
                const addr = data.address || {};
                const area = addr.suburb || addr.neighbourhood || addr.residential || addr.village;
                const city = addr.city || addr.town || addr.county || addr.state_district;
                
                if (area && city) {
                  displayLoc = `${area}, ${city}`;
                } else if (city) {
                  displayLoc = city;
                } else if (area) {
                  displayLoc = area;
                }
              }
            } catch (e) {
              console.warn("Nominatim geocoding failed...", e);
            }
          }

          if (displayLoc) {
            setLocation(displayLoc);
            if (!silent) toast.success(`Location set to ${displayLoc}`);
          } else {
            // Settle by falling back to IP location
            const success = await fetchIpLocation(silent);
            if (!success) {
              console.warn("All geocoding APIs failed to resolve coordinates. Keeping default location.");
              if (!silent) toast.error("Could not resolve location automatically.");
            }
          }
        } catch (error) {
          console.error("Unexpected error in geolocation flow:", error);
          await fetchIpLocation(silent);
        } finally {
          setIsLocating(false);
        }
      },
      async (error) => {
        if (!silent) toast.dismiss("loc-toast");
        console.warn("GPS Geolocation failed or denied, trying IP fallback...", error);
        // Try IP fallback automatically
        const success = await fetchIpLocation(silent);
        if (!success && !silent) {
          toast.error("Could not detect location. Using default: Bangalore");
        }
        setIsLocating(false);
      },
      { enableHighAccuracy: true, timeout: 6000, maximumAge: 0 }
    );
  };

  useEffect(() => {
    // Automatically fetch on mount: try silent geolocator (which uses GPS if allowed, or falls back to IP)
    if (navigator.permissions) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted") {
          fetchDynamicLocation(true); // Fetch silently
        } else {
          // If not granted, do IP lookup silently to get a fast correct location
          fetchIpLocation(true);
        }
      });
    } else {
      fetchIpLocation(true);
    }
  }, []);

  const updateLocation = (newLocation: string) => {
    setLocation(newLocation);
    toast.success(`Location set to ${newLocation}`);
  };

  return (
    <LocationContext.Provider value={{ location, coords, isLocating, fetchDynamicLocation, updateLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) throw new Error("useLocation must be used within a LocationProvider");
  return context;
};
