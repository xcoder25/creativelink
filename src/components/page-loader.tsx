'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useLoading } from '@/context/loading-context';

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const { loading, setLoading, isInitialLoad, setIsInitialLoad } = useLoading();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (isInitialLoad) {
      setIsInitialLoad(false);
    }
    setLoading(false);
  }, [pathname, searchParams, setLoading, isInitialLoad, setIsInitialLoad]);

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
