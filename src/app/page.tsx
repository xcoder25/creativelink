import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { featuredProjects, testimonials } from '@/lib/data';
import ProjectCard from '@/components/project-card';
import TestimonialCarousel from '@/components/testimonial-carousel';
import imageData from '@/lib/placeholder-images.json';

const { placeholderImages } = imageData;

export default function Home() {
  const aboutImage = placeholderImages.find(p => p.id === 'designer-portrait');

  return (
    <div className="flex flex-col">
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="animate-fade-in-up">
          <h1 className="font-headline text-5xl font-bold tracking-tight md:text-7xl">
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Innovate.</span>
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Connect.</span>
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>Inspire.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            As a creative graphic designer, I'm passionate about creating stunning visuals and compelling brand identities. Explore my work and let's create something beautiful together.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/projects">
                View My Work <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="featured-projects" className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-headline text-4xl font-bold">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
              <Link href="/projects">View All Projects</Link>
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
              <Link href="/about">
                Learn More About Me <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
