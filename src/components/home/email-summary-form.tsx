'use client';

import { useState } from 'react';
import { generateEmailSummary } from '@/ai/flows/generate-email-summaries';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles } from 'lucide-react';

export function EmailSummaryForm() {
  const [emailThread, setEmailThread] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const exampleEmail = `From: Alex <alex@example.com>
To: Jane <jane@example.com>
Subject: Re: Project Phoenix Update

Hi Jane,

Just wanted to follow up on our discussion yesterday. I've completed the initial mockups for the new dashboard. Let me know what you think.

Best,
Alex

---
From: Jane <jane@example.com>
To: Alex <alex@example.com>
Subject: Project Phoenix Update

Hi Alex,

Sounds good. I'm available to review them tomorrow afternoon. Can you also prepare the user flow diagrams we talked about? I want to present both to the stakeholders on Friday.

Thanks,
Jane
`;

  const handleSummarize = async () => {
    if (!emailThread.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter an email thread to summarize.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);
    setSummary('');
    try {
      const result = await generateEmailSummary({ emailThread });
      setSummary(result.summary);
    } catch (error) {
      console.error('Error generating summary:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate summary. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleUseExample = () => {
    setEmailThread(exampleEmail);
  }

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="grid gap-4">
          <Textarea
            placeholder="Paste your email thread here..."
            value={emailThread}
            onChange={(e) => setEmailThread(e.target.value)}
            rows={10}
            className="w-full"
            disabled={isLoading}
          />
          <div className="flex flex-col sm:flex-row gap-2">
            <Button onClick={handleSummarize} disabled={isLoading} className="w-full sm:w-auto">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              Summarize
            </Button>
            <Button onClick={handleUseExample} variant="outline" disabled={isLoading} className="w-full sm:w-auto">
              Use Example
            </Button>
          </div>
        </div>
        {summary && (
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sparkles className="mr-2 h-5 w-5 text-primary animate-pulse-sparkle" />
                  AI Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground whitespace-pre-wrap">{summary}</p>
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
