# Environment Variables

## Contact Form – Email Service

The contact form (`/contact`) submits to `/api/contact`. Out of the box it just logs to the console. To send real emails, use **[Resend](https://resend.com)**.

### Setup

```bash
npm install resend
```

Create a `.env.local` file in the project root:

```env
# Resend API key – get one at https://resend.com/api-keys
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# The inbox that receives contact form submissions
CONTACT_TO_EMAIL=hello@yourdomain.com
```

### Activate

Open `src/pages/api/contact.ts` and uncomment the `Resend` block (already written, just commented out).

> **Note**: `.env*` files are gitignored. Never commit real API keys.
