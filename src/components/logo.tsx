import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <Image 
        src="/crea_logo.jpeg" 
        alt="Creativelink logo" 
        width={32} 
        height={32} 
        className="rounded-sm"
      />
      <span className="font-headline text-3xl font-bold">Creativelink</span>
    </Link>
  );
}
