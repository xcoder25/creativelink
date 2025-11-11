import Image from 'next/image';
import SkillsChart from '@/components/skills-chart';
import { skills } from '@/lib/data';
import imageData from '@/lib/placeholder-images.json';

const { placeholderImages: PlaceHolderImages } = imageData;

export const metadata = {
  title: 'About Me | Design Noir',
  description: 'Learn about my design philosophy, experience, and skills.',
};

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'designer-portrait');

  return (
    <div className="container mx-auto px-4 py-16">
      <header className="text-center mb-12 animate-fade-in-up">
        <h1 className="font-headline text-5xl font-bold tracking-tight md:text-6xl">
          Driven by Design, Focused on Impact
        </h1>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-2 animate-fade-in">
          {aboutImage && (
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              data-ai-hint={aboutImage.imageHint}
              width={400}
              height={500}
              className="rounded-lg object-cover shadow-lg w-full"
            />
          )}
        </div>
        
        <div className="md:col-span-3 animate-fade-in-up space-y-6 text-lg text-muted-foreground">
          <h2 className="font-headline text-3xl font-bold text-foreground">My Philosophy</h2>
          <p>
            I believe that great design is more than just aesthetics; it's about creating connections. It's the silent ambassador of your brand, the intuitive guide for your users, and the visual story that captures hearts and minds. My approach is rooted in a deep understanding of your goals, your audience, and the unique story you have to tell.
          </p>
          <p>
            With over a decade of experience, I've had the privilege of working with a diverse range of clients, from innovative startups to established industry leaders. My work is a blend of artistic intuition and strategic thinking, ensuring that every design decision serves a purpose.
          </p>
          <p>
            Whether I'm crafting a new brand identity, designing a pixel-perfect user interface, or creating a captivating illustration, my commitment is always to excellence, collaboration, and delivering results that matter.
          </p>
        </div>
      </div>
      
      <section className="mt-20">
        <h2 className="font-headline text-4xl font-bold text-center mb-12 animate-fade-in-up">
          My Skills
        </h2>
        <div className="max-w-4xl mx-auto animate-fade-in">
          <SkillsChart skills={skills} />
        </div>
      </section>
    </div>
  );
}
