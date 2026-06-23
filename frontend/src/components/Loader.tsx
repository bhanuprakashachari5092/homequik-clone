import React, { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface LoaderProps {
  fullScreen?: boolean;
  text?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export function Loader({ fullScreen = false, text, size = 'md' }: LoaderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sizeClasses = {
    xs: "w-16 h-16",
    sm: "w-24 h-24",
    md: "w-48 h-48",
    lg: "w-64 h-64",
  };

  const containerClass = fullScreen ? "w-full h-full" : sizeClasses[size];

  const content = (
    <div className={`flex flex-col items-center justify-center gap-4 ${fullScreen ? 'w-screen h-screen' : ''}`}>
      <div className={`relative flex items-center justify-center ${containerClass}`}>
        {mounted && (
          <DotLottieReact
            src="https://lottie.host/62633530-fdb2-42cf-8665-dda8e16a5abe/uRqILV8jjo.lottie"
            loop
            autoplay
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </div>
      {text && !fullScreen && (
        <p className="text-brand font-semibold text-sm animate-pulse tracking-wide mt-2">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm">
        {content}
      </div>
    );
  }

  return content;
}

