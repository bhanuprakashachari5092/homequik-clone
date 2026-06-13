import React, { useState, useEffect } from "react";

export function useLocalSafeImage(url: string | undefined) {
  const [safeUrl, setSafeUrl] = useState<string | undefined>(url);

  useEffect(() => {
    if (!url) {
      setSafeUrl(undefined);
      return;
    }

    // Check if the URL is an absolute URL pointing to a local network resource
    // (localhost, 127.0.0.1, private IPs like 192.168.x.x, 10.x.x.x, 172.16-31.x.x, or .local domains)
    const isLocalNetwork = /^(https?:\/\/)?(localhost|127\.0\.0\.1|192\.168\.\d+\.\d+|10\.\d+\.\d+\.\d+|172\.(1[6-9]|2\d|3[0-1])\.\d+\.\d+|.*\.local)(:\d+)?(\/|$)/i.test(url);

    if (isLocalNetwork) {
      const controller = new AbortController();
      
      // Fetch the image with targetAddressSpace option
      fetch(url, {
        targetAddressSpace: "private", // Chrome specific option to allow local network requests
        signal: controller.signal
      } as any)
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          return res.blob();
        })
        .then((blob) => {
          const objectUrl = URL.createObjectURL(blob);
          setSafeUrl(objectUrl);
        })
        .catch((err) => {
          console.warn("Failed to fetch local network image with targetAddressSpace. Falling back to original URL.", err);
          setSafeUrl(url);
        });

      return () => {
        controller.abort();
      };
    } else {
      setSafeUrl(url);
    }
  }, [url]);

  return safeUrl;
}

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
}

export function SafeImage({ src, ...props }: SafeImageProps) {
  const safeSrc = useLocalSafeImage(src);
  return React.createElement("img", { src: safeSrc, ...props });
}
