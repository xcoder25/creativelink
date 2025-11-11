import { projects } from '@/lib/data';
import ProjectCard from '@/components/project-card';
import CategoryFilters from '@/components/category-filters';
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
  const currentCategory = searchParams?.category;
  const filteredProjects = currentCategory
    ? projects.filter((p) => p.category === currentCategory)
    : projects;

  const categories: ProjectCategory[] = ['Branding', 'Web Design', 'Illustration'];

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
      
      <div className="mb-12 flex justify-center">
        <CategoryFilters categories={categories} />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
            No projects found in this category.
          </p>
        )}
      </div>
    </div>
  );
}
