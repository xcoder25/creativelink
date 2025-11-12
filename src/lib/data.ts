
import type { Project, Skill, Testimonial } from './types';
import imageData from './placeholder-images.json';

const { placeholderImages } = imageData;

const getImage = (id: string) => {
  const image = placeholderImages.find(img => img.id === id);
  if (!image) {
    // In a real app, you might want a default fallback image
    return { src: 'https://placehold.co/600x400', hint: 'placeholder' };
  }
  return { src: image.imageUrl, hint: image.imageHint };
}

// In a real application, you would generate these summaries using the AI flow.
// For this example, we'll hardcode them.
// import { generateProjectSummary } from '@/ai/flows/ai-project-summarization';
// const zenithSummary = await generateProjectSummary(zenithAIInput);

export const projects: Project[] = [
  {
    slug: 'zenith-financials',
    title: 'Zenith Financials',
    category: 'Branding',
    coverImage: getImage('project-cover-zenith'),
    summary: "A complete brand overhaul for Zenith Financials, projecting an image of trust and modernity. The new identity, featuring a bold 'Z' monogram and a cool-toned palette, increased brand recognition by 40% and contributed to a 15% rise in client acquisition.",
    description: "Zenith Financials approached us for a complete brand overhaul. Their existing identity felt dated and didn't reflect their position as a forward-thinking financial advisory firm. Our goal was to create a modern, trustworthy, and sophisticated brand that would resonate with high-net-worth individuals and corporate clients.",
    projectInfo: {
      client: 'Zenith Financials',
      year: 2023,
      services: 'Brand Identity, Logo Design, Marketing Collateral',
    },
    images: [getImage('zenith-1'), getImage('zenith-2')],
    testimonial: {
      text: "The new branding has been transformative. It perfectly captures our ethos and has been incredibly well-received by our clients. The team's creativity and strategic approach were exceptional.",
      author: 'Jane Doe',
      company: 'CEO, Zenith Financials',
    },
    aiPrompt: {
      projectName: 'Zenith Financials Rebranding',
      designChoices: "We developed a clean, minimalist logo featuring a stylized 'Z' that suggests growth and stability. The color palette combines deep blues and grays with a vibrant aqua accent to convey professionalism and innovation. Typography uses a modern sans-serif for clarity and impact.",
      outcomes: "The rebranding led to a 40% increase in brand recognition in post-launch surveys. The company reported a 15% increase in new client acquisition in the first quarter following the launch, with many citing the new, professional branding as a key factor in their decision.",
      clientTestimonial: "The new branding has been transformative. It perfectly captures our ethos and has been incredibly well-received by our clients. The team's creativity and strategic approach were exceptional.",
    }
  },
  {
    slug: 'nomad-travel-app',
    title: 'Nomad Travel App',
    category: 'Branding',
    coverImage: getImage('project-cover-nomad'),
    summary: "Designed a user-centric travel planning app, Nomad, focusing on intuitive navigation and a visually stunning interface. The design boosted user engagement by 60% and secured a 'Best New App' feature on the App Store, thanks to its seamless booking process and personalized recommendations.",
    description: "Nomad is a travel planning application designed for the modern adventurer. The challenge was to create an interface that was both feature-rich and incredibly easy to use. We focused on a user-centric design process, from wireframing and prototyping to final UI design, ensuring every interaction was intuitive and enjoyable.",
    projectInfo: {
      client: 'Nomad Inc.',
      year: 2024,
      services: 'UI/UX Design, Prototyping, Mobile App Design',
    },
    images: [getImage('nomad-1'), getImage('nomad-2')],
    aiPrompt: {
      projectName: 'Nomad Travel App UI/UX',
      designChoices: 'The UI features a clean, card-based layout with vibrant, high-quality imagery to inspire wanderlust. A simple, icon-driven navigation and a streamlined booking flow were prioritized. The color scheme is warm and inviting, using earthy tones complemented by a bright coral for calls to action.',
      outcomes: "Post-launch analytics showed a 60% increase in user engagement and a 30% faster time-to-booking. The app was featured as 'Best New App' on the App Store, with reviewers praising its beautiful and intuitive design."
    }
  },
  {
    slug: 'cyberglow-chronicles',
    title: 'CyberGlow Chronicles',
    category: 'Illustration',
    coverImage: getImage('project-cover-cyberglow'),
    summary: "A series of futuristic character illustrations for the 'CyberGlow Chronicles' gaming franchise. The neon-drenched, cyberpunk aesthetic was praised for its originality, driving a significant pre-order campaign and establishing a distinct visual world for the game.",
    description: "We were commissioned to create a series of key character illustrations for the upcoming sci-fi game, 'CyberGlow Chronicles'. The goal was to establish a unique and memorable visual style that would define the game's world and characters, blending cyberpunk aesthetics with a touch of ethereal fantasy.",
    projectInfo: {
      client: 'Meteor Games',
      year: 2023,
      services: 'Character Design, Digital Illustration, Concept Art',
    },
    images: [getImage('cyberglow-1'), getImage('cyberglow-2')],
    aiPrompt: {
      projectName: 'CyberGlow Chronicles Illustrations',
      designChoices: 'The style is characterized by high-contrast lighting, a neon color palette (pinks, purples, and blues), and intricate cybernetic details. Each character design aimed to tell a story through their posture, clothing, and technological augmentations.',
      outcomes: 'The artwork was instrumental in the game\'s marketing campaign, helping to drive a 200% increase in pre-orders compared to the studio\'s previous title. The style was widely praised by gaming journalists for its originality and visual impact.'
    }
  },
    {
    slug: 'eco-foods-packaging',
    title: 'Eco Foods Packaging',
    category: 'Branding',
    coverImage: getImage('project-cover-eco-foods'),
    summary: "Developed a new packaging design for Eco Foods, a line of organic snacks. The design uses earthy tones and hand-drawn illustrations to communicate natural ingredients and sustainability, resulting in a 25% sales increase and securing placement in major retail chains.",
    description: "Eco Foods needed a packaging refresh that would help them stand out in the crowded organic food market. The key was to visually communicate their commitment to natural, sustainable ingredients in a way that felt authentic and appealing. We created a design system that was flexible enough to work across their entire product line.",
    projectInfo: {
      client: 'Eco Foods Collective',
      year: 2024,
      services: 'Packaging Design, Brand Strategy, Illustration',
    },
    images: [getImage('eco-foods-1'), getImage('eco-foods-2')],
    aiPrompt: {
      projectName: 'Eco Foods Packaging Design',
      designChoices: "The design features a palette of earthy colors, recycled-texture paper stock, and unique, hand-drawn illustrations for each flavor. A clean, friendly serif font was chosen for the brand name to evoke a sense of tradition and trust, while a modern sans-serif provides clear nutritional information.",
      outcomes: "Within three months of the new packaging launch, Eco Foods saw a 25% increase in sales. The brand also secured new distribution deals with two major national retailers, who cited the new packaging's shelf appeal as a key factor.",
    }
  },
  {
    slug: 'corporate-identity-suite',
    title: 'Corporate Identity Suite',
    category: 'Branding',
    coverImage: getImage('p1'),
    summary: "Crafted a cohesive corporate identity suite for a new tech startup, including logos, business cards, and brand guidelines, to establish a strong market presence.",
    description: "A comprehensive branding package to launch a new brand.",
    projectInfo: { client: 'Innovatech', year: 2024, services: 'Logo, Business Cards, Brand Guidelines' },
    images: [getImage('p2'), getImage('p10'), getImage('p13'), getImage('p20')],
    aiPrompt: { projectName: 'Innovatech Branding', designChoices: 'Minimalist and modern.', outcomes: 'Successful brand launch.' }
  },
  {
    slug: 'e-commerce-branding',
    title: 'E-commerce Branding',
    category: 'Branding',
    coverImage: getImage('p3'),
    summary: "Complete branding for an e-commerce platform's UI/UX to improve user flow and increase conversions.",
    description: "A user-focused branding to enhance the shopping experience.",
    projectInfo: { client: 'Shopify Plus', year: 2024, services: 'UI/UX, Branding' },
    images: [getImage('p9'), getImage('p18'), getImage('p28')],
    aiPrompt: { projectName: 'Shopify Plus Branding', designChoices: 'Clean, intuitive, and mobile-first.', outcomes: 'Increased user engagement and sales.' }
  },
  {
    slug: 'fantasy-art-series',
    title: 'Fantasy Art Series',
    category: 'Illustration',
    coverImage: getImage('p4'),
    summary: "A series of detailed illustrations for a fantasy novel, bringing the author's world to life.",
    description: "Creating magical worlds through digital art.",
    projectInfo: { client: 'Penguin Books', year: 2023, services: 'Illustration, Book Cover' },
    images: [getImage('p11'), getImage('p19'), getImage('p25'), getImage('p29')],
    aiPrompt: { projectName: 'Novel Illustrations', designChoices: 'Rich textures and atmospheric lighting.', outcomes: 'Visually stunning book series.' }
  },
  {
    slug: 'event-promotion-pack',
    title: 'Event Promotion Pack',
    category: 'Print Design',
    coverImage: getImage('p5'),
    summary: "Design of promotional materials for a major music festival, including flyers, posters, and social media assets.",
    description: "Creating a vibrant and energetic visual identity for a music festival.",
    projectInfo: { client: 'Music Fest', year: 2024, services: 'Flyers, Posters, Social Media Graphics' },
    images: [getImage('p7'), getImage('p14'), getImage('p17')],
    aiPrompt: { projectName: 'Music Fest Promo', designChoices: 'Bold typography and dynamic imagery.', outcomes: 'Sold-out event.' }
  },
  {
    slug: 'automotive-branding',
    title: 'Automotive Branding',
    category: 'Print Design',
    coverImage: getImage('p6'),
    summary: "Eye-catching vehicle wraps and car branding for a local business to increase brand visibility on the go.",
    description: "Mobile advertising through creative car branding.",
    projectInfo: { client: 'Local Motors', year: 2023, services: 'Car Branding, Vehicle Graphics' },
    images: [getImage('p22')],
    aiPrompt: { projectName: 'Local Motors Branding', designChoices: 'Sleek lines and a memorable logo.', outcomes: 'Increased local brand recognition.' }
  },
  {
    slug: 'restaurant-branding-package',
    title: 'Restaurant Branding Package',
    category: 'Branding',
    coverImage: getImage('p31'),
    summary: "Complete branding for a new restaurant, including menu design, packaging, and signage.",
    description: "Creating a delicious brand identity from scratch.",
    projectInfo: { client: 'The Corner Bistro', year: 2024, services: 'Menu Design, Packaging, Signage' },
    images: [getImage('p8'), getImage('p23'), getImage('p26')],
    aiPrompt: { projectName: 'Bistro Branding', designChoices: 'Warm, rustic, and inviting.', outcomes: 'Successful restaurant launch.' }
  },
  {
    slug: 'app-ui-branding',
    title: 'App UI Branding',
    category: 'Branding',
    coverImage: getImage('p21'),
    summary: "Developed a comprehensive UI kit with icons, components, and design patterns for a new mobile application.",
    description: "A complete design system for a consistent and scalable app.",
    projectInfo: { client: 'ConnectApp', year: 2023, services: 'UI Design, Iconography' },
    images: [getImage('p32'), getImage('p27')],
    aiPrompt: { projectName: 'ConnectApp UI Kit', designChoices: 'Modern, clean, and highly usable.', outcomes: 'Streamlined development process.' }
  },
  {
    slug: 'apparel-graphics',
    title: 'Apparel Graphics',
    category: 'Illustration',
    coverImage: getImage('p15'),
    summary: "Created a collection of graphic designs for a streetwear apparel brand.",
    description: "Unique and trendy designs for t-shirts and other apparel.",
    projectInfo: { client: 'Urban Wear', year: 2024, services: 'T-shirt Design, Illustration' },
    images: [getImage('p30'), getImage('p33')],
    aiPrompt: { projectName: 'Urban Wear Graphics', designChoices: 'Edgy, graphic, and inspired by street culture.', outcomes: 'Popular new clothing line.' }
  },
  {
    slug: 'corporate-brochure',
    title: 'Corporate Brochure',
    category: 'Print Design',
    coverImage: getImage('p16'),
    summary: "Designed a professional and informative brochure for a corporate client to use for marketing and sales.",
    description: "A high-quality print piece to showcase company services.",
    projectInfo: { client: 'Global Corp', year: 2023, services: 'Brochure Design, Print Layout' },
    images: [getImage('p12'), getImage('p24')],
    aiPrompt: { projectName: 'Global Corp Brochure', designChoices: 'Clean layout, professional typography, and impactful imagery.', outcomes: 'Effective sales tool.' }
  }
];

export const featuredProjects = projects.slice(0, 3);

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Working with them was a dream. They took our vague ideas and turned them into a brand identity that was more powerful than we could have ever imagined. The results speak for themselves.",
    author: 'Jane Doe',
    company: 'CEO, Zenith Financials',
    avatar: getImage('avatar-jane-doe'),
  },
  {
    id: 2,
    text: "An absolute master of their craft. The UI/UX design for our app was not only beautiful but also incredibly intuitive. Our user engagement has skyrocketed since the launch.",
    author: 'John Smith',
    company: 'Founder, Nomad Inc.',
    avatar: getImage('avatar-john-smith'),
  },
  {
    id: 3,
    text: "The illustrations they created are the heart and soul of our game. The attention to detail and creative vision are simply unparalleled. I can't recommend them highly enough.",
    author: 'Emily White',
    company: 'Art Director, Meteor Games',
    avatar: getImage('avatar-emily-white'),
  },
];

export const skills: Skill[] = [
  { name: 'Logo Design' },
  { name: 'Flyers' },
  { name: 'Car Branding' },
  { name: 'Printing' },
  { name: 'Billboards' },
  { name: 'Branding' },
  { name: 'UI/UX Design' },
  { name: 'Figma' },
  { name: 'Adobe Illustrator' },
  { name: 'Adobe Photoshop' },
];
