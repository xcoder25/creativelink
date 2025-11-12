'use client';

import Link, { type LinkProps } from 'next/link';
import { useLoading } from '@/context/loading-context';

type LoadingLinkProps = LinkProps & React.ComponentPropsWithoutRef<'a'>;

export default function LoadingLink({ href, onClick, ...props }: LoadingLinkProps) {
  const { setLoading } = useLoading();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setLoading(true);
    if (onClick) {
      onClick(e);
    }
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
