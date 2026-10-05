This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Contact form email

The contact form sends messages to `info@alphaircraft.com`, with copies to `intsales@alphaaircraft.com`, `gcaffe.abhishek@gmail.com`, and `gcaffe.shashank@gmail.com`. Configure SMTP or Resend in the hosting environment before submissions can be delivered. Complete SMTP settings use Nodemailer and take precedence when both providers are configured. SMTP configuration:

```text
SMTP_HOST=your-provider-smtp-host
SMTP_PORT=465
SMTP_USER=your-mailbox-username
SMTP_PASS=your-mailbox-password
SMTP_FROM_EMAIL=your-verified-sender@example.com
SMTP_SECURE=true
```

`SMTP_SECURE` is optional and defaults to `true` on port 465. Keep credentials server-side and never commit them. Alternatively, configure both Resend variables:

```text
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=Alpha Aircraft <your-verified-sender@example.com>
```

Verify the sender domain or address in Resend.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
