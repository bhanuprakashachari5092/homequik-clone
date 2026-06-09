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
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`,
            {
              headers: {
                "Accept-Language": "en-US,en;q=0.9",
              }
            }
          );
          const data = await res.json();
          const addr = data.address || {};
          const area = addr.suburb || addr.neighbourhood || addr.residential || addr.village;
          const city = addr.city || addr.town || addr.county || addr.state_district;
          
          let displayLoc = "Location Found";
          if (area && city) {
            displayLoc = `${area}, ${city}`;
          } else if (city) {
            displayLoc = city;
          } else if (area) {
            displayLoc = area;
          }

          setLocation(displayLoc);
          if (!silent) toast.success(`Location set to ${displayLoc}`);
        } catch (error) {
          console.error("Error fetching location details:", error);
          if (!silent) toast.error("Failed to get city name from coordinates.");
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
