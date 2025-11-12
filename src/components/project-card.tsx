import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/types';
import { Card } from './ui/card';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={project.coverImage.src}
            alt={project.title}
            data-ai-hint={project.coverImage.hint}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Card>
    </Link>
  );
}
