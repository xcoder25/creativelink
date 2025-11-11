'use client';

import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Show loader on path change, but not for the initial load
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Shorter delay for better UX, but can be 5000ms as requested.

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);
  
  // To prevent flash on initial load
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  useEffect(() => {
    setIsInitialLoad(false);
  }, []);

  const shouldShowLoader = (loading && !isInitialLoad) || (isInitialLoad && loading);

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-[9999] flex items-center justify-center bg-background/80 backdrop-blur-sm transition-opacity duration-500',
          shouldShowLoader ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col items-center gap-4">
            <Image 
                src="/crea_logo.jpeg" 
                alt="Creativelink loading..." 
                width={64} 
                height={64} 
                className="rounded-md animate-spin"
            />
            <span className="font-headline text-2xl font-bold">Creativelink</span>
        </div>
      </div>
      {children}
    </>
  );
}
