import Link from 'next/link';
import { Button } from '@/components/ui/button';
import LoadingLink from '@/components/loading-link';

export default function NotFound() {
  return (
    <div className="container mx-auto flex h-[calc(100vh-8rem)] items-center justify-center px-4 text-center">
      <div>
        <h1 className="font-headline text-9xl font-bold text-primary">404</h1>
        <h2 className="mt-4 font-headline text-4xl font-bold">Page Not Found</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Sorry, the page you are looking for does not exist.
        </p>
        <Button asChild className="mt-8">
          <LoadingLink href="/">Go back to Home</LoadingLink>
        </Button>
      </div>
    </div>
  );
}
