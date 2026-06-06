import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

interface LocationContextType {
  location: string;
  isLocating: boolean;
  fetchDynamicLocation: (silent?: boolean) => void;
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
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
          );
          const data = await res.json();
          const city =
            data.address.city ||
            data.address.town ||
            data.address.state_district ||
            "Location Found";
          setLocation(city);
          if (!silent) toast.success(`Location set to ${city}`);
        } catch (error) {
          console.error("Error fetching location details:", error);
          if (!silent) toast.error("Failed to get city name.");
        } finally {
          setIsLocating(false);
        }
      },
      (error) => {
        if (!silent) toast.dismiss("loc-toast");
        if (error.code === error.PERMISSION_DENIED) {
          if (!silent) toast.error("Location permission denied. Please allow it in site settings.");
        } else {
          if (!silent) toast.error("Failed to detect location.");
        }
        setIsLocating(false);
      }
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

  return (
    <LocationContext.Provider value={{ location, isLocating, fetchDynamicLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) throw new Error("useLocation must be used within a LocationProvider");
  return context;
};
