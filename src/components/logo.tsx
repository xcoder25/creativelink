import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <span className="font-headline text-2xl font-bold">Design Noir</span>
    </Link>
  );
}
