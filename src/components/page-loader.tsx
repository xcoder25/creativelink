'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (isInitialLoad) {
      setIsInitialLoad(false);
      return;
    }

    setLoading(true);
    // Show loader for a minimum of 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); 

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-[9999] flex items-center justify-center bg-background/80 backdrop-blur-sm transition-opacity duration-500',
          loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col items-center gap-4">
            <Image 
                src="/crea_logo.jpeg" 
                alt="Creativelink loading..." 
                width={80} 
                height={80} 
                className="rounded-md animate-spin"
            />
            <span className="font-headline text-2xl font-bold">Creativelink</span>
        </div>
      </div>
      {children}
    </>
  );
}
