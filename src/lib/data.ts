
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

export const projects: Project[] = [
  {
    slug: 'zenith-financials',
    title: 'Zenith Financials',
    category: 'Corporate Branding',
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
    category: 'Corporate Branding',
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
    category: 'Flyers',
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
    category: 'Corporate Branding',
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
    category: 'Corporate Branding',
    coverImage: getImage('p1'),
    summary: "Crafted a cohesive corporate identity suite for a new tech startup, including logos, business cards, and brand guidelines, to establish a strong market presence.",
    description: "A comprehensive branding package to launch a new brand.",
    projectInfo: { client: 'Innovatech', year: 2024, services: 'Logo, Business Cards, Brand Guidelines' },
    images: [],
    aiPrompt: { projectName: 'Innovatech Branding', designChoices: 'Minimalist and modern.', outcomes: 'Successful brand launch.' }
  },
  {
    slug: 'logo-concept-2',
    title: 'Abstract Logo Concept',
    category: 'Flyers',
    coverImage: getImage('p2'),
    summary: 'A modern logo concept.',
    description: 'A modern logo concept.',
    projectInfo: { client: 'Client', year: 2024, services: 'Logo Design' },
    images: [],
    aiPrompt: { projectName: 'Logo Concept', designChoices: 'Modern', outcomes: 'Concept' }
  },
  {
    slug: 'e-commerce-branding',
    title: 'E-commerce Branding',
    category: 'Corporate Branding',
    coverImage: getImage('p3'),
    summary: "Complete branding for an e-commerce platform to improve user flow and increase conversions.",
    description: "A user-focused branding to enhance the shopping experience.",
    projectInfo: { client: 'Shopify Plus', year: 2024, services: 'UI/UX, Branding' },
    images: [],
    aiPrompt: { projectName: 'Shopify Plus Branding', designChoices: 'Clean, intuitive, and mobile-first.', outcomes: 'Increased user engagement and sales.' }
  },
  {
    slug: 'fantasy-art-series',
    title: 'Fantasy Art Series',
    category: 'Flyers',
    coverImage: getImage('p4'),
    summary: "A series of detailed illustrations for a fantasy novel, bringing the author's world to life.",
    description: "Creating magical worlds through digital art.",
    projectInfo: { client: 'Penguin Books', year: 2023, services: 'Illustration, Book Cover' },
    images: [],
    aiPrompt: { projectName: 'Novel Illustrations', designChoices: 'Rich textures and atmospheric lighting.', outcomes: 'Visually stunning book series.' }
  },
  {
    slug: 'event-promotion-pack',
    title: 'Event Promotion Pack',
    category: 'Flyers',
    coverImage: getImage('p5'),
    summary: "Design of promotional materials for a major music festival, including flyers, posters, and social media assets.",
    description: "Creating a vibrant and energetic visual identity for a music festival.",
    projectInfo: { client: 'Music Fest', year: 2024, services: 'Flyers, Posters, Social Media Graphics' },
    images: [],
    aiPrompt: { projectName: 'Music Fest Promo', designChoices: 'Bold typography and dynamic imagery.', outcomes: 'Sold-out event.' }
  },
  {
    slug: 'automotive-branding',
    title: 'Automotive Branding',
    category: 'Banners',
    coverImage: getImage('p6'),
    summary: "Eye-catching vehicle wraps and car branding for a local business to increase brand visibility on the go.",
    description: "Mobile advertising through creative car branding.",
    projectInfo: { client: 'Local Motors', year: 2023, services: 'Car Branding, Vehicle Graphics' },
    images: [],
    aiPrompt: { projectName: 'Local Motors Branding', designChoices: 'Sleek lines and a memorable logo.', outcomes: 'Increased local brand recognition.' }
  },
  {
    slug: 'billboard-ad',
    title: 'Billboard Ad',
    category: 'Banners',
    coverImage: getImage('p7'),
    summary: 'A billboard design for a major ad campaign.',
    description: 'A billboard design for a major ad campaign.',
    projectInfo: { client: 'Client', year: 2024, services: 'Print Design' },
    images: [],
    aiPrompt: { projectName: 'Billboard Ad', designChoices: 'Bold and clear.', outcomes: 'High visibility.' }
  },
   {
    slug: 'packaging-design',
    title: 'Packaging Design',
    category: 'Corporate Branding',
    coverImage: getImage('p8'),
    summary: 'A packaging design.',
    description: 'A packaging design.',
    projectInfo: { client: 'Client', year: 2024, services: 'Packaging' },
    images: [],
    aiPrompt: { projectName: 'Packaging Design', designChoices: 'Creative', outcomes: 'Great results' }
  },
  {
    slug: 'mobile-app-ui',
    title: 'Mobile App UI',
    category: 'Corporate Branding',
    coverImage: getImage('p9'),
    summary: 'A mobile app UI design.',
    description: 'A mobile app UI design.',
    projectInfo: { client: 'Client', year: 2024, services: 'UI/UX' },
    images: [],
    aiPrompt: { projectName: 'Mobile App UI', designChoices: 'Modern', outcomes: 'Great results' }
  },
  {
    slug: 'corporate-identity-10',
    title: 'Corporate Identity',
    category: 'Corporate Branding',
    coverImage: getImage('p10'),
    summary: 'A corporate identity project.',
    description: 'A corporate identity project.',
    projectInfo: { client: 'Client', year: 2024, services: 'Branding' },
    images: [],
    aiPrompt: { projectName: 'Corporate Identity', designChoices: 'Professional', outcomes: 'Great results' }
  },
  {
    slug: 'character-design',
    title: 'Character Design',
    category: 'Flyers',
    coverImage: getImage('p11'),
    summary: 'A character design project.',
    description: 'A character design project.',
    projectInfo: { client: 'Client', year: 2024, services: 'Illustration' },
    images: [],
    aiPrompt: { projectName: 'Character Design', designChoices: 'Creative', outcomes: 'Great results' }
  },
  {
    slug: 'website-banner',
    title: 'Website Banner',
    category: 'Banners',
    coverImage: getImage('p12'),
    summary: 'A website banner design.',
    description: 'A website banner design.',
    projectInfo: { client: 'Client', year: 2024, services: 'Web Design' },
    images: [],
    aiPrompt: { projectName: 'Website Banner', designChoices: 'Eye-catching', outcomes: 'Great results' }
  },
  {
    slug: 'business-card-13',
    title: 'Modern Business Card',
    category: 'Business Cards',
    coverImage: getImage('p13'),
    summary: 'A business card design.',
    description: 'A business card design.',
    projectInfo: { client: 'Client', year: 2024, services: 'Print Design' },
    images: [],
    aiPrompt: { projectName: 'Business Card', designChoices: 'Elegant', outcomes: 'Great results' }
  },
  {
    slug: 'poster-design-14',
    title: 'Event Poster Design',
    category: 'Flyers',
    coverImage: getImage('p14'),
    summary: 'A poster design project.',
    description: 'A poster design project.',
    projectInfo: { client: 'Client', year: 2024, services: 'Print Design' },
    images: [],
    aiPrompt: { projectName: 'Poster Design', designChoices: 'Bold', outcomes: 'Great results' }
  },
  {
    slug: 'apparel-graphics',
    title: 'Apparel Graphics',
    category: 'Flyers',
    coverImage: getImage('p15'),
    summary: "Created a collection of graphic designs for a streetwear apparel brand.",
    description: "Unique and trendy designs for t-shirts and other apparel.",
    projectInfo: { client: 'Urban Wear', year: 2024, services: 'T-shirt Design, Illustration' },
    images: [],
    aiPrompt: { projectName: 'Urban Wear Graphics', designChoices: 'Edgy, graphic, and inspired by street culture.', outcomes: 'Popular new clothing line.' }
  },
  {
    slug: 'corporate-brochure',
    title: 'Corporate Brochure',
    category: 'Flyers',
    coverImage: getImage('p16'),
    summary: "Designed a professional and informative brochure for a corporate client to use for marketing and sales.",
    description: "A high-quality print piece to showcase company services.",
    projectInfo: { client: 'Global Corp', year: 2023, services: 'Brochure Design, Print Layout' },
    images: [],
    aiPrompt: { projectName: 'Global Corp Brochure', designChoices: 'Clean layout, professional typography, and impactful imagery.', outcomes: 'Effective sales tool.' }
  },
  {
    slug: 'social-media-graphic',
    title: 'Social Media Graphic',
    category: 'Banners',
    coverImage: getImage('p17'),
    summary: 'A social media graphic design.',
    description: 'A social media graphic design.',
    projectInfo: { client: 'Client', year: 2024, services: 'Social Media' },
    images: [],
    aiPrompt: { projectName: 'Social Media Graphic', designChoices: 'Engaging', outcomes: 'Great results' }
  },
  {
    slug: 'landing-page',
    title: 'Landing Page',
    category: 'Corporate Branding',
    coverImage: getImage('p18'),
    summary: 'A landing page design.',
    description: 'A landing page design.',
    projectInfo: { client: 'Client', year: 2024, services: 'Web Design' },
    images: [],
    aiPrompt: { projectName: 'Landing Page', designChoices: 'Modern', outcomes: 'Great results' }
  },
  {
    slug: 'abstract-illustration',
    title: 'Abstract Illustration',
    category: 'Flyers',
    coverImage: getImage('p19'),
    summary: 'An abstract illustration.',
    description: 'An abstract illustration.',
    projectInfo: { client: 'Client', year: 2024, services: 'Illustration' },
    images: [],
    aiPrompt: { projectName: 'Abstract Illustration', designChoices: 'Creative', outcomes: 'Great results' }
  },
  {
    slug: 'brand-manual',
    title: 'Brand Manual',
    category: 'Corporate Branding',
    coverImage: getImage('p20'),
    summary: 'A brand manual design.',
    description: 'A brand manual design.',
    projectInfo: { client: 'Client', year: 2024, services: 'Branding' },
    images: [],
    aiPrompt: { projectName: 'Brand Manual', designChoices: 'Comprehensive', outcomes: 'Great results' }
  },
  {
    slug: 'app-ui-branding',
    title: 'App UI Branding',
    category: 'Corporate Branding',
    coverImage: getImage('p21'),
    summary: "Developed a comprehensive UI kit with icons, components, and design patterns for a new mobile application.",
    description: "A complete design system for a consistent and scalable app.",
    projectInfo: { client: 'ConnectApp', year: 2023, services: 'UI Design, Iconography' },
    images: [],
    aiPrompt: { projectName: 'ConnectApp UI Kit', designChoices: 'Modern, clean, and highly usable.', outcomes: 'Streamlined development process.' }
  },
  {
    slug: 'vehicle-graphics-22',
    title: 'Vehicle Graphics',
    category: 'Banners',
    coverImage: getImage('p22'),
    summary: 'A vehicle graphics design.',
    description: 'A vehicle graphics design.',
    projectInfo: { client: 'Client', year: 2024, services: 'Print Design' },
    images: [],
    aiPrompt: { projectName: 'Vehicle Graphics', designChoices: 'Bold', outcomes: 'Great results' }
  },
  {
    slug: 'product-label-23',
    title: 'Product Label',
    category: 'Corporate Branding',
    coverImage: getImage('p23'),
    summary: 'A product label design.',
    description: 'A product label design.',
    projectInfo: { client: 'Client', year: 2024, services: 'Packaging' },
    images: [],
    aiPrompt: { projectName: 'Product Label', designChoices: 'Creative', outcomes: 'Great results' }
  },
  {
    slug: 'infographic-design-24',
    title: 'Infographic Design',
    category: 'Flyers',
    coverImage: getImage('p24'),
    summary: 'An infographic design.',
    description: 'An infographic design.',
    projectInfo: { client: 'Client', year: 2024, services: 'Illustration' },
    images: [],
    aiPrompt: { projectName: 'Infographic', designChoices: 'Informative', outcomes: 'Great results' }
  },
  {
    slug: 'digital-painting-25',
    title: 'Digital Painting',
    category: 'Flyers',
    coverImage: getImage('p25'),
    summary: 'A digital painting.',
    description: 'A digital painting.',
    projectInfo: { client: 'Client', year: 2024, services: 'Illustration' },
    images: [],
    aiPrompt: { projectName: 'Digital Painting', designChoices: 'Artistic', outcomes: 'Great results' }
  },
  {
    slug: 'storefront-sign-26',
    title: 'Storefront Sign',
    category: 'Banners',
    coverImage: getImage('p26'),
    summary: 'A storefront sign design.',
    description: 'A storefront sign design.',
    projectInfo: { client: 'Client', year: 2024, services: 'Print Design' },
    images: [],
    aiPrompt: { projectName: 'Storefront Sign', designChoices: 'Visible', outcomes: 'Great results' }
  },
  {
    slug: 'email-newsletter-27',
    title: 'Email Newsletter',
    category: 'Flyers',
    coverImage: getImage('p27'),
    summary: 'An email newsletter design.',
    description: 'An email newsletter design.',
    projectInfo: { client: 'Client', year: 2024, services: 'Marketing' },
    images: [],
    aiPrompt: { projectName: 'Email Newsletter', designChoices: 'Engaging', outcomes: 'Great results' }
  },
  {
    slug: 'dashboard-ui-28',
    title: 'Dashboard UI',
    category: 'Corporate Branding',
    coverImage: getImage('p28'),
    summary: 'A dashboard UI design.',
    description: 'A dashboard UI design.',
    projectInfo: { client: 'Client', year: 2024, services: 'UI/UX' },
    images: [],
    aiPrompt: { projectName: 'Dashboard UI', designChoices: 'Functional', outcomes: 'Great results' }
  },
  {
    slug: 'book-cover-29',
    title: 'Book Cover',
    category: 'Flyers',
    coverImage: getImage('p29'),
    summary: 'A book cover design.',
    description: 'A book cover design.',
    projectInfo: { client: 'Client', year: 2024, services: 'Print Design' },
    images: [],
    aiPrompt: { projectName: 'Book Cover', designChoices: 'Creative', outcomes: 'Great results' }
  },
  {
    slug: 'pattern-design-30',
    title: 'Pattern Design',
    category: 'Flyers',
    coverImage: getImage('p30'),
    summary: 'A pattern design.',
    description: 'A pattern design.',
    projectInfo: { client: 'Client', year: 2024, services: 'Illustration' },
    images: [],
    aiPrompt: { projectName: 'Pattern Design', designChoices: 'Seamless', outcomes: 'Great results' }
  },
  {
    slug: 'restaurant-branding-package',
    title: 'Restaurant Branding Package',
    category: 'Corporate Branding',
    coverImage: getImage('p31'),
    summary: "Complete branding for a new restaurant, including menu design, packaging, and signage.",
    description: "Creating a delicious brand identity from scratch.",
    projectInfo: { client: 'The Corner Bistro', year: 2024, services: 'Menu Design, Packaging, Signage' },
    images: [],
    aiPrompt: { projectName: 'Bistro Branding', designChoices: 'Warm, rustic, and inviting.', outcomes: 'Successful restaurant launch.' }
  },
  {
    slug: 'app-icon-32',
    title: 'Mobile App Icon',
    category: 'Flyers',
    coverImage: getImage('p32'),
    summary: 'An app icon design.',
    description: 'An app icon design.',
    projectInfo: { client: 'Client', year: 2024, services: 'Branding' },
    images: [],
    aiPrompt: { projectName: 'App Icon', designChoices: 'Memorable', outcomes: 'Great results' }
  },
  {
    slug: 'vector-art-33',
    title: 'Vector Art',
    category: 'Flyers',
    coverImage: getImage('p33'),
    summary: 'A vector art piece.',
    description: 'A vector art piece.',
    projectInfo: { client: 'Client', year: 2024, services: 'Illustration' },
    images: [],
    aiPrompt: { projectName: 'Vector Art', designChoices: 'Scalable', outcomes: 'Great results' }
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
