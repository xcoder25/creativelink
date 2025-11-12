'use client';

import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // This effect runs only on the client.
    // By setting isInitialLoad to false here, we ensure that any
    // logic dependent on it only runs client-side, avoiding hydration errors.
    if (isInitialLoad) {
      setIsInitialLoad(false);
      return;
    }

    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Reduced loader time for better user experience

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);
  
  // On the server and during initial client render, don't show the loader overlay.
  // The loader logic will only kick in on subsequent client-side navigations.
  if (isInitialLoad) {
    return <>{children}</>;
  }

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-[9999] flex items-center justify-center bg-background/80 backdrop-blur-sm transition-opacity duration-300',
          loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        style={{ transitionDelay: loading ? '0ms' : '300ms' }}
      >
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/my_logo.png"
            alt="Creativelink loading..."
            width={120}
            height={50}
            className="rounded-md animate-pulse"
          />
        </div>
      </div>
      {children}
    </>
  );
}
