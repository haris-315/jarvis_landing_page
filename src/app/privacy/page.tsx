import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function PrivacyPolicyPage() {
  const privacyImage = PlaceHolderImages.find(img => img.id === 'privacy-policy-image');

  return (
    <div className="bg-white dark:bg-card">
      <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
        <Breadcrumbs />
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Jarvis AI — Privacy Policy
          </h1>
          <p className="mt-2 text-muted-foreground">
            Effective Date: September 25, 2025
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
            Jarvis AI (the “Service”) is provided by <strong>1001245164 Ontario Inc.</strong> (“Company,” “we,” “us,” or “our”).
            This Privacy Policy explains how we collect, use, disclose, and protect personal information when you use Jarvis AI,
            including features for task management, reminders, optional email access, and meeting recording/summarization.
          </p>
          <p>
            If you do not agree with this Policy, please do not use the Service. By using the Service, you acknowledge you have read and understood this Policy.
          </p>

          <section>
            <h2 className="text-2xl font-bold">1. Scope</h2>
            <p>
              This Policy applies to personal information we process about:
            </p>
            <ul>
              <li>Individuals who use the Service (account holders and end users);</li>
              <li>Individuals whose information may appear in user content (e.g., emails, meeting transcripts, tasks, contacts);</li>
              <li>Website visitors and beta testers.</li>
            </ul>
            <p>
              This Policy does not apply to processing we carry out on behalf of enterprise customers as a processor under a separate agreement (see Section 15 and the DPA).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">2. Summary (Quick Read)</h2>
            <ul>
              <li>We collect information you provide (account details, tasks, reminders, emails you connect, meeting recordings) and information created or inferred by the Service (summaries, action items, insights).</li>
              <li>Email and meeting features are opt-in and scoped; you can disconnect at any time.</li>
              <li>We use trusted service providers (e.g., cloud hosting, AI model providers) under contract. We don’t sell personal information.</li>
              <li>You have choices: access/correction, deletion, export, and opt-outs. Regional rights (GDPR/UK GDPR, CPRA, PIPEDA, etc.) also apply.</li>
              <li>Security, minimization, and retention controls are in place. See Sections 10–12.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">3. Information We Collect</h2>
            <p>
              We may collect the following types of information:
            </p>
            <ul>
              <li><strong>Account & Profile:</strong> name, email, role, optional phone/photo, password or SSO identifiers.</li>
              <li><strong>Tasks & Reminders:</strong> titles, descriptions, due dates, assignees, labels, preferences.</li>
              <li><strong>Email Access (Optional):</strong> headers, body, attachments, summaries, derived insights (opt-in only).</li>
              <li><strong>Meeting Data (Optional):</strong> recordings, transcripts, participants, derived highlights (consent required).</li>
              <li><strong>Automatically Collected:</strong> usage logs, crash data, device/OS, app version, cookies (web).</li>
              <li><strong>Third-Party Integrations:</strong> calendars, contacts, cloud storage, conferencing (only if authorized).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">4. How We Use Information</h2>
            <p>
              We use information to:
            </p>
            <ul>
              <li>Provide, maintain, and improve the Service.</li>
              <li>Operate optional features you enable (email parsing, transcription, integrations).</li>
              <li>Personalize your experience with suggestions and intelligent features.</li>
              <li>Communicate with you (updates, support, security notices).</li>
              <li>Ensure security, prevent abuse, comply with legal obligations.</li>
              <li>Research and develop new features and models.</li>
            </ul>
          </section>

          {/* Continue sections like Security, Retention, Children’s Privacy, Sharing, Rights, etc. */}
          <section>
            <h2 className="text-2xl font-bold">10. Security</h2>
            <p>
              We employ administrative, technical, and physical safeguards, including encryption in transit and at rest, least-privilege access, and vulnerability management.
              No system is 100% secure; report incidents to <a href="mailto:security@jarvisai.one" className="text-primary hover:underline">security@jarvisai.one</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">16. Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have rights to access, correct, delete, or export your data.
              To exercise these rights, email us at <a href="mailto:privacy@jarvisai.one" className="text-primary hover:underline">privacy@jarvisai.one</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">19. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact:
            </p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:privacy@jarvisai.one" className="text-primary hover:underline">privacy@jarvisai.one</a></li>
              <li><strong>Security:</strong> <a href="mailto:security@jarvisai.one" className="text-primary hover:underline">security@jarvisai.one</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
