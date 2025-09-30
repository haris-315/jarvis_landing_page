import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function PrivacyPolicyPage() {
  const privacyImage = PlaceHolderImages.find(img => img.id === 'privacy-policy-image');
  return (
    <div className="bg-white dark:bg-card">
      <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
        <Breadcrumbs />
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-muted-foreground">
            Last Updated: September 30, 2025
          </p>
        </header>
        
        {privacyImage && (
            <div className="relative mb-12 h-64 w-full overflow-hidden rounded-lg">
                <Image 
                    src={privacyImage.imageUrl} 
                    alt={privacyImage.description} 
                    fill
                    className="object-cover"
                    data-ai-hint={privacyImage.imageHint}
                />
            </div>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-foreground">
          <p>
            AI Assistant ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application.
          </p>

          <section>
            <h2 className="text-2xl font-bold">1. Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect via the Application depends on the content and materials you use, and includes:
            </p>
            <ul>
              <li>
                <strong>Account Data:</strong> When you connect your Outlook account, we access basic profile information and email data necessary for the app's functionality. We do not store your passwords.
              </li>
              <li>
                <strong>Email Content:</strong> For features like AI Summaries, the content of your emails is processed. This data is handled with strict security measures and is primarily stored locally on your device.
              </li>
              <li>
                <strong>Meeting Data:</strong> When you use the meeting assistant, we may process audio data for transcription and summarization. This data is encrypted in transit and at rest.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Application to:
            </p>
            <ul>
              <li>Provide and manage our services, including email summaries and meeting transcriptions.</li>
              <li>Improve our application and user experience.</li>
              <li>Respond to your comments and questions and provide customer service.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Application.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">3. Data Security</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. Our architecture is built with a "local-first" principle, meaning most of your sensitive data, such as email content, resides on your device in a secure, encrypted database (Hive). While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">4. Your Rights</h2>
            <p>
              You have certain rights regarding your personal information, including the right to access, correct, or delete your data. As most data is stored locally, you have direct control. You can disconnect your account at any time to stop data synchronization.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-bold">5. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at <a href="mailto:privacy@aiassistant.com" className="text-primary hover:underline">privacy@aiassistant.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
