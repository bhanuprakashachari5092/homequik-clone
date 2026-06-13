import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

interface LocationContextType {
  location: string;
  isLocating: boolean;
  fetchDynamicLocation: (silent?: boolean) => void;
  updateLocation: (newLocation: string) => void;
}

const LocationContext = createContext<LocationContextType | null>(null);

export const LocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [location, setLocation] = useState("Bangalore");
  const [isLocating, setIsLocating] = useState(false);

  const fetchDynamicLocation = (silent = false) => {
    if (typeof window === "undefined" || !navigator.geolocation) return;
    
    setIsLocating(true);
    if (!silent) {
      toast.info("Please allow location access in your browser popup...", { id: "loc-toast" });
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
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
                } else {
                  console.warn("Google Maps geocoding status not OK:", data.status, data.error_message);
                }
              }
            } catch (e) {
              console.warn("Google Maps geocoding failed, trying fallbacks...", e);
            }
          } else {
            console.warn("[LocationContext] Google Maps API key (VITE_GOOGLE_MAPS_API_KEY) is not set in .env. Falling back to free geocoding APIs.");
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
            // Settle silently to default location without throwing hard error stack
            console.warn("All geocoding APIs failed to resolve coordinates. Keeping default location.");
            if (!silent) toast.error("Could not resolve location. Please enter it manually.");
          }
        } catch (error) {
          console.error("Unexpected error in geolocation flow:", error);
        } finally {
          setIsLocating(false);
        }
      },
      (error) => {
        if (!silent) toast.dismiss("loc-toast");
        if (error.code === error.PERMISSION_DENIED) {
          if (!silent) toast.error("Location permission denied. Please allow it in site settings.");
        } else if (error.code === error.TIMEOUT) {
          if (!silent) toast.error("Location request timed out.");
        } else {
          if (!silent) toast.error("Failed to detect location. Please check your device settings.");
        }
        setIsLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  useEffect(() => {
    // Check permission state before automatically fetching so we don't spam the user
    if (navigator.permissions) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted") {
          fetchDynamicLocation(true); // Fetch silently if already granted
        } else if (result.state === "prompt") {
          // If it's prompt, we explicitly call it to trigger the browser prompt
          fetchDynamicLocation(false);
        }
      });
    } else {
      fetchDynamicLocation(false);
    }
  }, []);

  const updateLocation = (newLocation: string) => {
    setLocation(newLocation);
    toast.success(`Location manually set to ${newLocation}`);
  };

  return (
    <LocationContext.Provider value={{ location, isLocating, fetchDynamicLocation, updateLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) throw new Error("useLocation must be used within a LocationProvider");
  return context;
};
