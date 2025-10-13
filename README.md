# Cruiz n Clean

A modern, accessible Next.js + Tailwind site for mobile detailing bookings.

## Setup

1. **Copy environment variables:**
   - Copy `.env.local.example` to `.env.local` and fill in your secrets.
   - Required:
     - `CONTACT_EMAIL` (where requests are sent)
     - `RESEND_API_KEY` (preferred) or `SENDGRID_API_KEY`
     - `NEXT_PUBLIC_SETMORE_BOOKING_URL` (your Setmore booking link)

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run locally:**
   ```bash
   npm run dev
   ```

4. **Deploy to Vercel:**
   - Install Command: `npm install`
   - Build Command: `next build`
   - Output Directory: (leave blank)
   - Root Directory: `/`
   - Add your environment variables in Vercel project settings (Settings > Environment Variables).

## Setup & Deploy (Quick)

```bash
npm install
npm run dev
npm run build
npm run start
```

5. **Add images:**
   - Place hero images in `/public/images/hero/` and gallery images in `/public/images/gallery/`.
   - Update `/data/images-manifest.ts` to describe your images.

---


# Future: Setmore API Integration
When Brian provides `SETMORE_API_KEY` and `SETMORE_BUSINESS_ID`, update `/app/api/create-appointment/route.ts`
to create bookings directly instead of redirecting.

For more, see code comments and `/data/images-manifest.ts` for image metadata format.
