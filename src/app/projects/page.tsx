import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import type { ProjectCategory } from '@/lib/types';

export const metadata = {
  title: 'Projects | Creativelink',
  description: 'Explore a collection of branding, web design, and illustration projects.',
};

export default function ProjectsPage({
  searchParams,
}: {
  searchParams?: { category?: ProjectCategory };
}) {

  const allImages = projects.flatMap(project => [
    { ...project.coverImage, slug: project.slug },
    ...project.images.map(img => ({ ...img, slug: project.slug }))
  ]);


  return (
    <div className="container mx-auto px-4 py-16">
      <header className="text-center mb-12 animate-fade-in-up">
        <h1 className="font-headline text-5xl font-bold tracking-tight md:text-6xl">
          My Work
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          A showcase of my passion for creating beautiful and functional designs.
        </p>
      </header>
      
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {allImages.map((image, index) => (
          <div
            key={`${image.slug}-${index}`}
            className="animate-fade-in-up group"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <Link href={`/projects/${image.slug}`}>
              <div className="relative aspect-square w-full overflow-hidden rounded-lg border transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                <Image
                  src={image.src}
                  alt={image.hint || 'Project image'}
                  data-ai-hint={image.hint}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
          </div>
        ))}
        {allImages.length === 0 && (
          <p className="col-span-full text-center text-muted-foreground">
            No projects found.
          </p>
        )}
      </div>
    </div>
  );
}
