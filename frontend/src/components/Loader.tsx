import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import spinnerJson from '../assets/spinner.json';

interface LoaderProps {
  fullScreen?: boolean;
  text?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export function Loader({ fullScreen = false, text = "Loading...", size = 'md' }: LoaderProps) {
  // Using the local minimal Lottie spinner to guarantee it works.
  const sizeClasses = {
    xs: "w-8 h-8",
    sm: "w-16 h-16",
    md: "w-32 h-32",
    lg: "w-48 h-48",
  };

  const content = (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className={`${sizeClasses[size]}`}>
        <DotLottieReact
          data={JSON.stringify(spinnerJson)}
          loop
          autoplay
        />
      </div>
      {text && (
        <p className="text-brand font-semibold text-sm animate-pulse tracking-wide">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-md">
        <div className="bg-white/80 dark:bg-slate-900/80 p-8 rounded-3xl shadow-premium border border-white/20">
          {content}
        </div>
      </div>
    );
  }

  return content;
}
