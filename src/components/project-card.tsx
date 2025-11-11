import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/types';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.coverImage.src}
            alt={project.title}
            data-ai-hint={project.coverImage.hint}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
            <Badge variant="secondary">{project.category}</Badge>
          </div>
          <CardDescription className="pt-2">{project.summary}</CardDescription>
        </CardHeader>
        <CardContent>
          <span className="flex items-center text-sm font-semibold text-primary transition-transform duration-300 group-hover:translate-x-1">
            View Project <ArrowRight className="ml-2 h-4 w-4" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
