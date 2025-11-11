import ContactForm from "@/components/contact-form";
import { Mail, Phone } from "lucide-react";

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
              <a href="mailto:hello@creativelink.com" className="hover:text-primary transition-colors">
                hello@creativelink.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-primary"/>
              <span className="text-muted-foreground">(080) 8855-6832</span>
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
