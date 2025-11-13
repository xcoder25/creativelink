
import { Suspense } from 'react';
import { projects } from '@/lib/data';
import type { ProjectCategory } from '@/lib/types';
import ProjectCard from '@/components/project-card';
import CategoryFilters from '@/components/category-filters';

export const metadata = {
  title: 'Projects | Creativelink',
  description: 'Explore a collection of branding, web design, and illustration projects.',
};

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: ProjectCategory }>;
}) {
  const categories = [...new Set(projects.map(p => p.category))] as ProjectCategory[];
  const resolvedSearchParams = await searchParams;
  const selectedCategory = resolvedSearchParams?.category;

  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category === selectedCategory)
    : projects;

  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mb-12 text-center animate-fade-in-up">
        <h1 className="font-headline text-5xl font-bold tracking-tight md:text-6xl">
          My Work
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          A showcase of my passion for creating beautiful and functional designs.
        </p>
      </header>

      <div className="flex justify-center mb-12 animate-fade-in-up">
        <Suspense fallback={<div className="flex flex-wrap gap-2 rounded-lg bg-secondary p-2 h-10 w-64" />}>
          <CategoryFilters categories={categories} />
        </Suspense>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.slug}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
        {filteredProjects.length === 0 && (
          <p className="col-span-full text-center text-muted-foreground">
            No projects found for this category.
          </p>
        )}
      </div>
    </div>
  );
}
