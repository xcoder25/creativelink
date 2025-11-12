import Image from 'next/image';
import { skills } from '@/lib/data';
import imageData from '@/lib/placeholder-images.json';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const { placeholderImages } = imageData;

export const metadata = {
  title: 'About | Creativelink',
  description: 'Learn about my design philosophy, experience, and skills.',
};

export default function AboutPage() {
  const aboutImage = placeholderImages.find(p => p.id === 'designer-portrait');
  const studioImage = placeholderImages.find(p => p.id === 'p1');

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
          <h2 className="font-headline text-3xl font-bold text-foreground">About Me</h2>
          <p>
            I’m a passionate and detail-oriented Graphic Designer dedicated to transforming ideas into powerful visual stories. With a creative eye and a strong sense of design strategy, I specialize in creating distinctive brand identities, eye-catching visuals, and high-quality print materials that make businesses stand out. My work blends creativity with purpose—ensuring every design communicates clearly, connects emotionally, and leaves a lasting impression.
          </p>
        </div>
      </div>
      
      <Separator className="my-16" />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-3 animate-fade-in-up space-y-6 text-lg text-muted-foreground md:order-last">
            <h2 className="font-headline text-3xl font-bold text-foreground">About CreativeLink</h2>
            <p>
              CreativeLink is a full-service branding and printing studio committed to helping businesses and individuals build strong, memorable brands. We provide professional design, branding, and printing solutions that elevate your visual presence and communicate your unique identity with style and precision.
            </p>
            <p>
              From logos, business cards, and corporate branding to flyers, banners, and other print materials, CreativeLink delivers top-quality designs that speak your brand’s language. We combine creativity, innovation, and technical expertise to ensure every project reflects excellence and professionalism.
            </p>
            <p>
                At CreativeLink, we don’t just design — we create connections.
            </p>
        </div>
        <div className="md:col-span-2 animate-fade-in md:order-first">
          {studioImage && (
            <Image
              src={studioImage.imageUrl}
              alt="CreativeLink studio branding"
              data-ai-hint={studioImage.imageHint}
              width={400}
              height={500}
              className="rounded-lg object-cover shadow-lg w-full"
            />
          )}
        </div>
      </div>
      
      <section className="mt-20">
        <h2 className="font-headline text-4xl font-bold text-center mb-12 animate-fade-in-up">
          My Skills & Services
        </h2>
        <div className="max-w-4xl mx-auto animate-fade-in text-center">
            <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill) => (
                    <Badge key={skill.name} variant="outline" className="text-lg px-6 py-2 rounded-full">
                        {skill.name}
                    </Badge>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
