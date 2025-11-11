import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <Image 
        src="/crea_logo.jpeg" 
        alt="Creativelink logo" 
        width={36} 
        height={36} 
        className="rounded-sm"
      />
      <span className="font-headline text-4xl font-bold">
        <span className="relative inline-block text-foreground before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary before:via-orange-400 before:to-primary before:bg-[length:400%_100%] before:animate-gradient-wave before:content-[''] before:[-webkit-mask-image:linear-gradient(white,transparent)] before:[mask-image:linear-gradient(white,transparent)]">
          Creativelink
        </span>
      </span>
    </Link>
  );
}
