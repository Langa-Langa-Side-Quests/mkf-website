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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on cPanel (Node.js App)

This project is configured with `output: "standalone"` in `next.config.ts` for optimal cPanel deployment.

### Prerequisites

- cPanel with **Setup Node.js App** feature (under Software section)
- SSH/Shell access to your cPanel
- Domain pointed to your cPanel server (`mamakevinafoundation.com`)

### Deployment Steps

1. **Push code to GitHub** (or transfer via git):
   ```bash
   git push origin main
   ```

2. **SSH into your cPanel server** and clone the repository:
   ```bash
   cd ~/repositories
   git clone https://github.com/Langa-Langa-Side-Quests/mkf-website.git
   ```

3. **In cPanel → Setup Node.js App:**
   - Create a new application
   - Application root: path to your cloned project
   - Application URL: `mamakevinafoundation.com`
   - Application startup file: `.next/standalone/server.js`
   - Node.js version: v20.9+ (latest LTS)

4. **Set Environment Variables** in the Node.js app config:
   - `RESEND_API_KEY` = your Resend API key (get one at https://resend.com)
   - `NODE_ENV` = `production`

5. **Build and start via SSH:**
   ```bash
   cd /path/to/application/root
   npm install
   npm run build
   ```

6. **Start the app** from the cPanel Node.js dashboard.

Your site will be live at `https://mamakevinafoundation.com`.

### Contact Form

The contact form uses [Resend](https://resend.com) to send emails. Set `RESEND_API_KEY` as an environment variable in cPanel's Node.js app configuration. See `.env.example` for reference.
