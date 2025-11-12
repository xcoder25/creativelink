
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { featuredProjects, testimonials } from '@/lib/data';
import ProjectCard from '@/components/project-card';
import TestimonialCarousel from '@/components/testimonial-carousel';
import imageData from '@/lib/placeholder-images.json';
import Typewriter from '@/components/typewriter';
import LoadingLink from '@/components/loading-link';
import { cn } from '@/lib/utils';

const { placeholderImages } = imageData;

const WavyText = ({ text, delayStep = 0.07, totalDuration = 12 }: { text: string; delayStep?: number, totalDuration?: number }) => {
  const [animationKey, setAnimationKey] = useState(0);
  const totalDelay = (text.length - 1) * delayStep;
  const cycleDuration = (totalDuration + totalDelay) * 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, cycleDuration);

    return () => clearInterval(interval);
  }, [cycleDuration]);

  return (
    <>
      {text.split('').map((char, index) => (
        <span
          key={`${char}-${index}-${animationKey}`}
          className={cn(
            'inline-block fluid-gradient',
             'animate-fluid-gradient'
          )}
          style={{ animationDelay: `${index * delayStep}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  );
};

export default function Home() {
  const aboutImage = placeholderImages.find(p => p.id === 'designer-portrait');
  const typewriterText = "As a creative graphic designer, I'm passionate about creating stunning visuals and compelling brand identities. Explore my work and let's create something beautiful together.";

  return (
    <div className="flex flex-col">
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="animate-fade-in-up">
          <h1 className="font-headline text-5xl font-bold tracking-tight md:text-7xl">
            <span className="inline-block whitespace-nowrap"><WavyText text="Innovate." /></span>
            <span className="inline-block whitespace-nowrap"><WavyText text="Connect." delayStep={0.05} /></span>
            <span className="inline-block whitespace-nowrap"><WavyText text="Inspire." /></span>
          </h1>
          <div className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl" style={{ animationDelay: '0.4s' }}>
             <Typewriter text={typewriterText} />
          </div>
          <div className="mt-8 flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Button asChild size="lg">
              <LoadingLink href="/projects">
                View My Work <ArrowRight />
              </LoadingLink>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <LoadingLink href="/contact">Get in Touch</LoadingLink>
            </Button>
          </div>
        </div>
      </section>

      <section id="featured-projects" className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-headline text-4xl font-bold">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <div
                key={project.slug}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <LoadingLink href="/projects">View All Projects</LoadingLink>
            </Button>
          </div>
        </div>
      </section>

      <section id="testimonials" className="container mx-auto px-4 py-20">
        <h2 className="mb-12 text-center font-headline text-4xl font-bold">
          What My Clients Say
        </h2>
        <TestimonialCarousel testimonials={testimonials} />
      </section>

      <section id="about-summary" className="bg-secondary py-20">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
          {aboutImage && (
            <div className="animate-fade-in">
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                width={500}
                height={500}
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          )}
          <div className="animate-fade-in-up">
            <h2 className="font-headline text-4xl font-bold">About Me</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              With over a decade of experience in graphic design, I specialize in branding and web design. My philosophy is to combine aesthetic appeal with strategic thinking to create designs that are not only beautiful but also effective.
            </p>
            <Button asChild className="mt-6" variant="link">
              <LoadingLink href="/about">
                Learn More About Me <ArrowRight />
              </LoadingLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
