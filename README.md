# Elmeeda Landing Page

A modern, professional landing page for Elmeeda - AI-powered breakdown coordination and warranty recovery for trucking fleets.

## Design Features

- **Clean, Modern Aesthetic**: Inspired by tryharmony.ai and lunavo.ai
- **Dark Navy Theme**: Professional B2B SaaS design with orange accents
- **Smooth Animations**: Framer Motion powered scroll animations
- **Responsive Design**: Mobile-first approach, works on all devices
- **Interactive ROI Calculator**: Real-time savings estimation
- **SEO Optimized**: Complete metadata and Open Graph tags

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations
- **Lucide React**: Beautiful icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Customization Guide

### 1. Replace Placeholder Images

Add founder photos to the `/public` directory:
- `/public/abdu.jpg` - Photo of Abdu
- `/public/jasur.jpg` - Photo of Jasur

### 2. Update Contact Links

Currently all "Book a Demo" buttons link to: https://www.linkedin.com/in/jayallayorov/

To change this, update the links in:
- `/components/Navigation.tsx`
- `/components/Hero.tsx`
- `/components/ROICalculator.tsx`
- `/components/FinalCTA.tsx`
- `/components/Founder.tsx`

### 3. Adjust ROI Calculator

The calculator uses **$2,000 per truck per year** for warranty savings.

To modify:
1. Open `/components/ROICalculator.tsx`
2. Change the `savingsPerTruck` constant (line 9)

### 4. Update Company Information

- **Metadata**: Edit `/app/layout.tsx` for SEO titles and descriptions
- **Y Combinator Badge**: Remove from `/components/Hero.tsx` if not applicable
- **Social Proof**: Update fleet name/size in `/components/Hero.tsx`

### 5. Color Customization

Colors are defined in `/tailwind.config.ts`:
- **Navy**: `#1a202c` (background)
- **Orange**: `#ff7e29` (primary accent)
- **Blue**: `#3b82f6` (secondary accent)

### 6. Typography

Fonts are loaded from Google Fonts in `/app/globals.css`:
- **Display Font**: Manrope (headings)
- **Body Font**: Inter (text)

## Project Structure

```
elmeeda-landing/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles & Tailwind
├── components/
│   ├── Navigation.tsx      # Sticky navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── Problem.tsx        # Problem statement
│   ├── Solution.tsx       # 3-feature solution cards
│   ├── HowItWorks.tsx     # 3-step process
│   ├── ROICalculator.tsx  # Interactive calculator
│   ├── Founder.tsx        # Founder profiles
│   ├── FinalCTA.tsx       # Final call-to-action
│   └── Footer.tsx         # Footer
├── public/                # Static assets
├── tailwind.config.ts     # Tailwind configuration
└── next.config.js         # Next.js configuration
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## Support

For issues or questions, contact the development team.

## License

© 2025 Elmeeda. All rights reserved.
