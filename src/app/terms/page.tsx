import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function TermsAndConditionsPage() {
    const termsImage = PlaceHolderImages.find(img => img.id === 'terms-conditions-image');
  return (
    <div className="bg-white dark:bg-card">
      <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
        <Breadcrumbs />
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-muted-foreground">
            Last Updated: September 30, 2025
          </p>
        </header>

        {termsImage && (
            <div className="relative mb-12 h-64 w-full overflow-hidden rounded-lg">
                <Image 
                    src={termsImage.imageUrl} 
                    alt={termsImage.description} 
                    fill
                    className="object-cover"
                    data-ai-hint={termsImage.imageHint}
                />
            </div>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-foreground">
          <p>
            Please read these Terms and Conditions ("Terms") carefully before using the AI Assistant application (the "Service") operated by AI Assistant ("us", "we", or "our").
          </p>

          <section>
            <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">2. User Responsibilities</h2>
            <p>
              You are responsible for safeguarding the device where the application is installed. You agree not to misuse the Service or help anyone else to do so. This includes, but is not limited to, probing, scanning, or testing the vulnerability of any system or network, and breaching or otherwise circumventing any security or authentication measures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">3. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of AI Assistant and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold">4. Third-Party Integrations</h2>
            <p>
              Our Service integrates with third-party services like Microsoft Outlook. We are not responsible for the practices of these third-party services, and your use of them is subject to their respective terms and policies. We are not liable for any loss or damage caused by your use of any third-party service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">5. Disclaimers and Limitation of Liability</h2>
            <p>
              The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We do not warrant that the Service will be uninterrupted, secure, or error-free. In no event shall AI Assistant, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">6. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at <a href="mailto:legal@aiassistant.com" className="text-primary hover:underline">legal@aiassistant.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
