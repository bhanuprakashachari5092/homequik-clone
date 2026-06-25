import { useState, useEffect, useRef } from "react";

export interface PreciseCoords {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: number;
}

export function usePreciseLocation() {
  const [coords, setCoords] = useState<PreciseCoords | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [waitingForPrecise, setWaitingForPrecise] = useState(false);
  const [permissionStatus, setPermissionStatus] = useState<PermissionState | "unknown">("unknown");

  const watchIdRef = useRef<number | null>(null);
  const retryTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startTracking = () => {
    if (typeof window === "undefined" || !navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setIsLocating(true);
    setError(null);

    // Clear existing watch if active
    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
    }

    // Get current position first (quick initial check)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        handlePosition(position);
      },
      (err) => {
        handleError(err);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );

    // Watch position continuously
    watchIdRef.current = navigator.geolocation.watchPosition(
      (position) => {
        handlePosition(position);
      },
      (err) => {
        handleError(err);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  const handlePosition = (position: GeolocationPosition) => {
    const { latitude, longitude, accuracy } = position.coords;
    const timestamp = position.timestamp;

    if (accuracy > 20) {
      setWaitingForPrecise(true);
      setError("Waiting for precise GPS location (accuracy must be within 20 meters)...");
      // Trigger a retry after 2 seconds to get a fresher precise lock
      if (retryTimeoutRef.current === null) {
        retryTimeoutRef.current = setTimeout(() => {
          retryTimeoutRef.current = null;
          startTracking();
        }, 2000);
      }
    } else {
      setWaitingForPrecise(false);
      setError(null);
      setCoords({ latitude, longitude, accuracy, timestamp });
      setIsLocating(false);
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
        retryTimeoutRef.current = null;
      }
    }
  };

  const handleError = (err: GeolocationPositionError) => {
    setIsLocating(false);
    if (err.code === err.PERMISSION_DENIED) {
      setPermissionStatus("denied");
      setError(
        "Location permission was denied. Please enable location access in your browser settings (click the lock icon in the address bar) and click Retry."
      );
    } else if (err.code === err.TIMEOUT) {
      setError("Location request timed out. Retrying automatically...");
      startTracking();
    } else {
      setError("Failed to resolve GPS coordinates: " + err.message);
    }
  };

  const stopTracking = () => {
    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }
    if (retryTimeoutRef.current !== null) {
      clearTimeout(retryTimeoutRef.current);
      retryTimeoutRef.current = null;
    }
    setIsLocating(false);
  };

  useEffect(() => {
    // Check permission status initially if supported
    if (typeof window !== "undefined" && navigator.permissions) {
      navigator.permissions
        .query({ name: "geolocation" as PermissionName })
        .then((status) => {
          setPermissionStatus(status.state);
          status.onchange = () => {
            setPermissionStatus(status.state);
            if (status.state === "granted") {
              startTracking();
            } else if (status.state === "denied") {
              stopTracking();
            }
          };
        })
        .catch((e) => console.warn("Permissions query not fully supported:", e));
    }

    startTracking();

    // Battery optimization: Stop watching when app goes background, resume when foreground
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopTracking();
      } else {
        startTracking();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopTracking();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const retry = () => {
    startTracking();
  };

  return {
    coords,
    isLocating,
    error,
    waitingForPrecise,
    permissionStatus,
    retry,
    stopTracking,
    startTracking
  };
}
