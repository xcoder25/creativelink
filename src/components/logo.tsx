import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <Image 
        src="/crea_logo.jpeg" 
        alt="Creativelink logo" 
        width={24} 
        height={24} 
        className="rounded-sm"
      />
      <span className="font-headline text-2xl font-bold">Creativelink</span>
    </Link>
  );
}
