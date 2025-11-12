import LoadingLink from './loading-link';
import Image from 'next/image';

export default function Logo() {
  return (
    <LoadingLink href="/" className="flex items-center gap-2" prefetch={false}>
      <Image 
        src="/my_logo.png" 
        alt="Creativelink logo" 
        width={140} 
        height={40} 
        className="rounded-sm"
      />
    </LoadingLink>
  );
}
