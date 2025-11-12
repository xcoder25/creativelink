'use client';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ArrowRight } from 'lucide-react';

export default function ContactForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Send a Message</CardTitle>
        <CardDescription>Fill out the form below and I'll get back to you.</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          action="https://formspree.io/f/your_formspree_endpoint" // Replace with your Formspree endpoint
          method="POST"
          className="space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" required minLength={10} />
          </div>
          <Button type="submit">
            Send Message
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
