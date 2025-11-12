import ContactForm from "@/components/contact-form";
import { Mail } from "lucide-react";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);


export const metadata = {
  title: "Contact | Creativelink",
  description: "Get in touch to discuss your project.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="text-center mb-12 animate-fade-in-up">
        <h1 className="font-headline text-5xl font-bold tracking-tight md:text-6xl">
          Let's Create Together
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Have a project in mind? We'd love to hear about it.
        </p>
      </header>

      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="animate-fade-in">
          <h2 className="font-headline text-3xl font-bold">Contact Info</h2>
          <p className="mt-4 text-muted-foreground">
            Feel free to reach out via email or phone, or simply use the form on this page. We look forward to connecting with you.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary"/>
              <a href="mailto:creativeelink@gmail.com" className="hover:text-primary transition-colors">
                creativeelink@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <WhatsAppIcon className="h-6 w-6 text-primary"/>
              <span className="text-muted-foreground">08180539482</span>
            </div>
          </div>
        </div>

        <div className="animate-fade-in-up">
           <ContactForm />
        </div>
      </div>
    </div>
  );
}
