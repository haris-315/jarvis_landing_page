import { EmailSummaryForm } from './email-summary-form';

export function AiSummarySection() {
  return (
    <section id="ai-demo" className="w-full py-12">
      <div className="container px-0">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Experience AI Email Summaries
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            Paste an email thread below to see how our AI can distill it into a
            concise summary. Your data is not stored.
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-4xl">
            <EmailSummaryForm />
        </div>
      </div>
    </section>
  );
}
