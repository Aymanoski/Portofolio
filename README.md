# Mohamed Ayman — Portfolio

A modern, production-ready portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Syne (display) + DM Sans (body) + JetBrains Mono

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout + SEO metadata
│   ├── page.tsx         # Main page (composes all sections)
│   └── globals.css      # Global styles, fonts, custom utilities
├── components/
│   ├── Navbar.tsx       # Sticky nav with mobile drawer
│   ├── Footer.tsx       # Simple footer
│   └── sections/
│       ├── Hero.tsx         # Hero with animated headline
│       ├── About.tsx        # About with highlight cards
│       ├── Projects.tsx     # Featured + grid project cards
│       ├── Skills.tsx       # Categorized skill bars
│       ├── Experience.tsx   # Vertical timeline
│       └── Contact.tsx      # Email CTA + social links
└── lib/
    └── utils.ts         # cn() utility
```

## Customization

- **Colors**: Edit `tailwind.config.ts` — `brand`, `accent`, and `surface` palettes
- **Content**: All copy lives inside the section components under `src/components/sections/`
- **Fonts**: Change the Google Fonts imports in `globals.css` and `tailwind.config.ts`
- **SEO**: Update metadata in `src/app/layout.tsx`

## Deployment

Deploy instantly on [Vercel](https://vercel.com):

```bash
npx vercel
```

Or connect your GitHub repo to Vercel for automatic deployments on every push.
