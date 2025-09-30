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
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Account & Profile:</strong> name, email, phone (optional), photo (optional), role, organization, password or SSO identifiers.</li>
              <li><strong>Tasks & Reminders:</strong> task titles/descriptions, due dates, assignees, labels, notification preferences.</li>
              <li><strong>Content You Upload or Connect:</strong> documents, files, contacts, calendars; third-party integrations you authorize (e.g., Google, Microsoft).</li>
              <li><strong>Support & Feedback:</strong> messages, survey responses, bug reports.</li>
              <li><strong>Optional Email Access (If Enabled):</strong> headers, bodies (sender/recipient, subject, timestamp, body, attachments) for summarization, categorization, drafting, search; derived data (summaries, classifications, action items, sentiment, entities).</li>
              <li><strong>Optional Meeting Recording & Summarization (If Enabled):</strong> audio/video recordings, real-time or post-meeting transcripts, participants (names, emails, calendar metadata, invitations/RSVPs), derived data (summaries, highlights, tasks, minutes).</li>
              <li><strong>Automatically Collected:</strong> usage logs, app interactions, crash diagnostics, device type, OS, app version, cookies/similar tech (web).</li>
              <li><strong>From Third Parties:</strong> integrations you authorize (calendars, contacts, email, cloud drives); enterprise admins (user provisioning, role/permissions, audit data).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">4. How We Use Information</h2>
            <p>We use personal information to:</p>
            <ul>
              <li>Provide, maintain, and improve the Service (core app functions; reminders; task execution; search; summarization).</li>
              <li>Operate optional features you enable (email parsing/drafting; meeting recording/transcription; integrations).</li>
              <li>Personalize the experience (preferences, suggestions, ranking, and intelligent features).</li>
              <li>Communicate with you (service updates, security notices, support).</li>
              <li>Ensure security, prevent abuse/fraud, debug, and comply with legal obligations.</li>
              <li>Research and develop new features and models.</li>
              <li>Support business operations (billing, accounting, audits).</li>
            </ul>
            <p>
              <strong>Automated Decision-Making:</strong> Jarvis AI may generate suggested actions or prioritization. These do not produce legal or similarly significant effects without human review.
            </p>
            <p>
              <strong>No Sale:</strong> We do not sell personal information. We also do not use personal information for cross-context behavioral advertising.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">5. Legal Bases (EEA/UK/CH)</h2>
            <p>Where GDPR/UK GDPR applies, our processing bases include:</p>
            <ul>
              <li><strong>Contract:</strong> to deliver the Service you requested.</li>
              <li><strong>Consent:</strong> for optional email access, meeting recording, certain analytics/marketing cookies.</li>
              <li><strong>Legitimate Interests:</strong> to secure and improve the Service, prevent abuse, and support internal operations (balanced against your rights).</li>
              <li><strong>Legal Obligation:</strong> to meet compliance and record-keeping duties.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">6. Sharing & Disclosure</h2>
            <p>We share personal information only as described:</p>
            <ul>
              <li><strong>Service Providers / Sub-processors:</strong> cloud hosting, storage, AI model providers, analytics, communications, and customer support. Providers act under contracts requiring confidentiality, security, and limited use.</li>
              <li><strong>Enterprise Customers (Admin Access):</strong> if your account is managed by your organization, administrators may access/monitor data per their policies.</li>
              <li><strong>Integration Partners:</strong> when you connect third-party services, data flows per your configuration and the partner’s terms.</li>
              <li><strong>Legal/Compliance:</strong> to comply with law, valid legal process, or to protect rights, safety, or the integrity of the Service.</li>
              <li><strong>Business Transfers:</strong> as part of a merger, acquisition, or asset sale, subject to this Policy and applicable law.</li>
            </ul>
            <p>We do not share personal information with advertisers for cross-context behavioral ads.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">7. International Transfers</h2>
            <p>
              We may transfer, store, and process information outside your country (e.g., Canada, U.S., EEA, UK). We implement appropriate safeguards (e.g., SCCs, UK Addendum/IDTA, adequacy decisions) and technical measures (encryption, access controls). Details available on request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">8. Your Choices & Controls</h2>
            <ul>
              <li><strong>Permissions:</strong> You can enable/disable email access, meeting recording, calendar/contacts, and file integrations at any time.</li>
              <li><strong>Gmail/Google Workspace Revocation:</strong> visit Google Account → Security → Third-party access to remove Jarvis AI’s access.</li>
              <li><strong>Microsoft 365 Revocation:</strong> visit Microsoft Entra (Azure AD) → App permissions.</li>
              <li><strong>Recording Notices:</strong> obtain participant consent where required; many platforms allow announcing recordings automatically.</li>
              <li><strong>Notifications & Marketing Emails:</strong> opt out via in-app settings or unsubscribe links.</li>
              <li><strong>Data Access, Portability, Correction, Deletion:</strong> request via Section 16.</li>
              <li><strong>Model Training Controls:</strong> where applicable, opt out of allowing your content to be used for model training/improvement (we default to opt-out for enterprise unless the customer opts in).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">9. Cookies & Analytics (Web)</h2>
            <p>
              We use necessary cookies for core functionality and, with consent where required, analytics cookies to understand usage. You can control cookies via your browser settings. Blocking some cookies may impact the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">10. Security</h2>
            <p>
              We employ administrative, technical, and physical safeguards, including encryption in transit and at rest, least-privilege access, logging, and vulnerability management. No system is 100% secure; report incidents to <a href="mailto:security@jarvisai.one" className="text-primary hover:underline">security@jarvisai.one</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">11. Data Retention</h2>
            <p>
              We retain personal information only as long as needed to provide the Service, comply with legal obligations, resolve disputes, and enforce agreements. You can delete content or your account, after which we will delete or de-identify data within a reasonable period, except where retention is legally required or permitted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">12. Children’s Privacy</h2>
            <p>
              The Service is not intended for children under 13 (or the age required by your region). We do not knowingly collect personal information from children. If you believe a child has provided information, contact us to delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">13. Third-Party Services</h2>
            <p>
              Your use of third-party services (email, calendar, storage, conferencing) is governed by their terms and privacy policies. We are not responsible for their practices. Review and manage permissions in each service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">14. Meeting Recording & Transcription</h2>
            <p>
              You are responsible for ensuring lawful recording and participant notices/consents. Where required (e.g., all-party consent jurisdictions), obtain explicit consent before recording. Jarvis AI can display a recording indicator and insert a consent notice in calendar invites where supported.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">15. Enterprise & Controller/Processor Roles</h2>
            <p>
              For individual users, we act as an independent controller of your data. For enterprise customers, we act as a processor/service provider with respect to Customer Data, processing under the Data Processing Addendum (DPA) and the customer’s instructions. Admins may control retention, access, and integrations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">16. Your Privacy Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access/know what personal information we process;</li>
              <li>Correct inaccurate information;</li>
              <li>Delete information;</li>
              <li>Receive a portable copy of certain information;</li>
              <li>Object to or restrict certain processing;</li>
              <li>Withdraw consent at any time (without affecting prior processing);</li>
              <li>Appeal certain decisions (US state laws);</li>
              <li>Lodge a complaint with a supervisory authority.</li>
            </ul>
            <p>
              <strong>How to Exercise:</strong> Email <a href="mailto:privacy@jarvisai.one" className="text-primary hover:underline">privacy@jarvisai.one</a> or use in-app controls. We may verify your identity and respond within required timelines. Authorized agent requests are honored as required by law.
            </p>
            <p>
              <strong>California (CPRA):</strong> We do not sell or share personal information for cross-context behavioral advertising. We may disclose limited identifiers to service providers for business purposes.
            </p>
            <p>
              <strong>Canada (PIPEDA):</strong> You may request access and correction; we process data in/outside Canada using contractual and technical safeguards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">17. Model Providers & AI Processing</h2>
            <p>
              To deliver AI features, we may use third-party model providers and our own models. Providers act under confidentiality and security obligations. We apply minimization (only the data needed for the feature), encryption, and access controls. Unless you (or your enterprise) opt in, user content is not used to train foundation models.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">18. Changes to This Policy</h2>
            <p>
              We may update this Policy from time to time. Material changes will be notified via the Service or email. Continued use after the effective date means you accept the updated Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">19. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:privacy@jarvisai.one" className="text-primary hover:underline">privacy@jarvisai.one</a></li>
              <li><strong>Security:</strong> <a href="mailto:security@jarvisai.one" className="text-primary hover:underline">security@jarvisai.one</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Appendix A – Sub-processors (Overview)</h2>
            <ul>
              <li>Cloud infrastructure & storage</li>
              <li>AI model providers</li>
              <li>Email/calendar integration providers</li>
              <li>Analytics & crash reporting</li>
              <li>Customer support and ticketing</li>
            </ul>
            <p>
              (Full, current list available at: [URL to sub-processor list].)
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Appendix B – Data Retention by Feature (Examples)</h2>
            <ul>
              <li><strong>Tasks/reminders:</strong> active + 24 months (or admin-configured)</li>
              <li><strong>Email summaries/drafts:</strong> 30–90 days (configurable), or on deletion of source email</li>
              <li><strong>Meeting recordings/transcripts:</strong> default 90 days (configurable); summaries persist until deleted</li>
              <li><strong>Logs/diagnostics:</strong> 30–180 days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Appendix C – Region-Specific Notices</h2>
            <ul>
              <li><strong>EEA/UK/CH:</strong> Controller = [Company Legal Name], Legal bases in Section 5; transfers under SCCs/UK Addendum.</li>
              <li><strong>California:</strong> No sale/sharing; rights under CPRA; categories and purposes align with Sections 3–4 & 6.</li>
              <li><strong>Canada:</strong> Contact our Privacy Officer at <a href="mailto:privacy@jarvisai.one" className="text-primary hover:underline">privacy@jarvisai.one</a> for access/correction inquiries.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Tip for Users</h2>
            <p>
              You can disconnect integrations anytime: Settings → Integrations.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}