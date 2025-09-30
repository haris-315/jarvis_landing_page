import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '@/app/contact/contact-form';

const faqItems = [
  {
    question: 'How does the Outlook sync work?',
    answer: 'Our app securely connects to your Outlook account using OAuth 2.0, the industry standard for secure authorization. Your credentials are never stored on our servers. The app syncs your emails in real-time to provide up-to-date summaries and assistance.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, security is our top priority. All sensitive data is stored locally on your device, and any communication with our services is end-to-end encrypted. We are compliant with major data protection regulations. For more details, please see our Privacy Policy.',
  },
  {
    question: 'Can I customize the AI models?',
    answer: 'Currently, we use a fine-tuned version of GPT-4 Turbo for the best performance. We are working on features to allow more customization and integration with other models in the future.',
  },
  {
    question: 'What happens when I\'m offline?',
    answer: 'Our app is designed with offline functionality in mind. Thanks to local Hive storage, you can access previously synced emails, summaries, and chat history even without an internet connection.',
  },
];

export function ContactSection() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 md:py-20">
      <header className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Contact Us
        </h2>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          We're here to help. Reach out with any questions or feedback.
        </p>
      </header>
      
      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold">Send us a message</h3>
              <p className="mb-6 text-muted-foreground">We typically respond within 24 hours.</p>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <a href="mailto:support@aiassistant.com" className="text-muted-foreground hover:text-primary">support@aiassistant.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-muted-foreground">(123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h4 className="font-semibold">Office</h4>
                <p className="text-muted-foreground">123 AI Lane, Tech City, 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-20">
        <h3 className="text-center text-3xl font-bold tracking-tight">
          Frequently Asked Questions
        </h3>
        <div className="mx-auto mt-8 max-w-3xl">
          <Accordion type="single" collapsible>
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
