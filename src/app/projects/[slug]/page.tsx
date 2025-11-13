
'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Quote } from 'lucide-react';
import { generateProjectSummary } from '@/ai/flows/ai-project-summarization';
import { useEffect, useState, use } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  const [aiSummary, setAiSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (project) {
      generateProjectSummary(project.aiPrompt)
        .then((output) => {
          setAiSummary(output.summary);
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [project]);

  if (!project) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-16">
      <header className="mb-12 animate-fade-in-up">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">{project.category}</Badge>
          <h1 className="font-headline text-5xl font-bold tracking-tight md:text-6xl">
            {project.title}
          </h1>
        </div>
      </header>

      <div className="mb-12">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <Image
                src={project.coverImage.src}
                alt={`Cover image for ${project.title}`}
                data-ai-hint={project.coverImage.hint}
                width={1200}
                height={800}
                className="w-full rounded-lg object-cover"
                priority
              />
            </CarouselItem>
            {project.images.map((img, index) => (
              <CarouselItem key={index}>
                <Image
                  src={img.src}
                  alt={`${project.title} - view ${index + 1}`}
                  data-ai-hint={img.hint}
                  width={1200}
                  height={800}
                  className="w-full rounded-lg object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <section>
              <h3 className="font-headline text-2xl font-bold">AI-Generated Summary</h3>
               <div className="mt-4 rounded-lg border bg-secondary p-4 min-h-[100px]">
                  {loading ? (
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  ) : (
                    <p className="text-secondary-foreground">{aiSummary}</p>
                  )}
              </div>
            </section>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Project Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold">Client</h4>
                  <p className="text-muted-foreground">{project.projectInfo.client}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold">Year</h4>
                  <p className="text-muted-foreground">{project.projectInfo.year}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold">Services</h4>
                  <p className="text-muted-foreground">{project.projectInfo.services}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {project.testimonial && (
          <section className="mt-16">
             <div className="mx-auto max-w-2xl text-center">
                <Quote className="mx-auto h-12 w-12 text-primary" />
                <blockquote className="mt-4 text-xl italic text-foreground">
                    "{project.testimonial.text}"
                </blockquote>
                <footer className="mt-6">
                    <p className="font-semibold">{project.testimonial.author}</p>
                    <p className="text-muted-foreground">{project.testimonial.company}</p>
                </footer>
             </div>
          </section>
        )}
      </div>
    </article>
  );
}
