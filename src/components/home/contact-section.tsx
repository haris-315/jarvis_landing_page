"use client";

import { ContactForm } from '@/app/contact/contact-form';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';

const faqItems = [
  {
    question: 'How does the Outlook sync work?',
    answer:
      'Our app securely connects to your Outlook account using OAuth 2.0, the industry standard for secure authorization. Your credentials are never stored on our servers. The app syncs your emails in real-time to provide up-to-date summaries and assistance.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes, security is our top priority. All sensitive data is stored locally on your device, and any communication with our services is end-to-end encrypted. We are compliant with major data protection regulations. For more details, please see our Privacy Policy.',
  },
  {
    question: 'Can I customize the AI models?',
    answer:
      'Currently, we use a fine-tuned version of GPT-4 Turbo for the best performance. We are working on features to allow more customization and integration with other models in the future.',
  },
  {
    question: "What happens when I'm offline?",
    answer:
      'Our app is designed with offline functionality in mind. Thanks to local Hive storage, you can access previously synced emails, summaries, and chat history even without an internet connection.',
  },
];

export function ContactSection() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 md:py-20">
      {/* Header */}
      <header className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Contact Us
        </h2>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          We're here to help. Reach out with any questions or feedback.
        </p>
      </header>

      {/* Contact Form + Info */}
      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5">
        {/* Left: Form */}
        <div className="lg:col-span-3">
          <Card className="relative overflow-hidden border shadow-lg">
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-primary/60" />
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold">Send us a message</h3>
              <p className="mb-6 text-muted-foreground">
                We typically respond within 24 hours.
              </p>
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        {/* Right: Contact Info + Map */}
        <div className="lg:col-span-2">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            {[
              {
                icon: <Mail className="h-6 w-6 text-primary" />,
                label: 'Email',
                value: (
                  <a
                    href="mailto:support@aiassistant.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    support@aiassistant.com
                  </a>
                ),
              },
              {
                icon: <Phone className="h-6 w-6 text-primary" />,
                label: 'Phone',
                value: (
                  <p className="text-muted-foreground">(123) 456-7890</p>
                ),
              },
              {
                icon: <MapPin className="h-6 w-6 text-primary" />,
                label: 'Office',
                value: (
                  <>
                    <p className="text-muted-foreground mb-3">
                      123 AI Lane, Tech City, 12345
                    </p>
                    {/* Small Map */}
                    <div className="rounded-lg overflow-hidden shadow border">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086502385067!2d-122.41941548467892!3d37.77492977975914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d5c36d21%3A0xa24c46e3d1d6d8d7!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1699971890000!5m2!1sen!2sus"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 group transition-transform"
              >
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold">{item.label}</h4>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mt-20">
        <h3 className="text-center text-3xl font-bold tracking-tight">
          Frequently Asked Questions
        </h3>
        <div className="mx-auto mt-8 max-w-3xl">
          <Accordion type="single" collapsible>
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
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
