# Anchal Chaurasiya — Personal Portfolio

A cinematic, high-performance personal portfolio website built for **Anchal Chaurasiya** — Software Developer, Website Developer & Shopify Developer.

---

## 🌟 Overview & Highlights

- **Aesthetic**: Cinematic dark mode interface with obsidian backgrounds, subtle cyan & electric violet lighting, and delicate glassmorphism.
- **Top Bar Contract**: Clean 3-zone header: `ANCHAL.` brand mark, concise nav links, and high-impact action CTA.
- **Interactive Moments**:
  - Terminal-style intro sequence (`Initializing portfolio...` -> `Compiling ideas into experiences...`) with skip & replay support.
  - Interactive Command Palette triggered with `⌘K` or `/` for quick section navigation and actions.
  - Interactive project detail modal with architectural breakdowns and verified metrics.
  - Instant skill search and category filtering (Frontend, E-Commerce Liquid, Full-Stack, AI, Tools).
  - Validated contact dispatch form with celebratory confetti micro-interactions.
- **Anti-Slop Discipline**: Zero fake scorecards, zero static pill capsules, zero broken image placeholders, and authentic career metrics.

---

## 🛠️ Tech Stack

- **Framework**: React 19 with TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS v4 with custom font pairing (Space Grotesk + Inter + JetBrains Mono)
- **Animation**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Micro-Interactions**: Canvas Confetti

---

## 📁 Project Structure

```
├── index.html                   # HTML entry point with SEO, JSON-LD, fonts, and SVG favicon
├── metadata.json                # Project identity metadata
├── src/
│   ├── assets/images/           # High-resolution generated project mockups & hero visuals
│   ├── components/
│   │   ├── OpeningSequence.tsx  # Terminal intro animation with skip & auto-dwell
│   │   ├── Navbar.tsx           # 3-zone navigation bar with mobile drawer
│   │   ├── Hero.tsx             # Typographic headline, rotating roles & 3D developer card
│   │   ├── About.tsx            # Narrative, core pillars & interactive code cards
│   │   ├── Skills.tsx           # Category filter + instant live skill search
│   │   ├── Experience.tsx       # Timeline selector & detailed deliverables
│   │   ├── Projects.tsx         # Featured works with browser window frames
│   │   ├── ProjectModal.tsx     # Deep-dive modal with architecture details
│   │   ├── EducationCertifications.tsx # AKTU IT degree & RHCSA / MERN credentials
│   │   ├── Contact.tsx          # Direct channels, validated form & confetti feedback
│   │   ├── CommandPalette.tsx   # Keyboard-driven command overlay (⌘K / /)
│   │   ├── CustomCursor.tsx     # Non-intrusive desktop follower
│   │   └── Footer.tsx           # Clean footer with replay intro & back-to-top
│   ├── data/
│   │   └── portfolioData.ts     # Central easy-to-edit configuration file
│   ├── App.tsx                  # Main app layout and scroll progress
│   ├── index.css                # Global CSS, theme variables & scrollbar styles
│   └── main.tsx                 # React DOM root mounting
└── package.json
```

---

## 🚀 Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Dev Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🌐 Deployment to Vercel / Netlify

### Deploy on Vercel:
1. Connect your repository to Vercel.
2. Build Command: `npm run build`
3. Output Directory: `dist`
4. Framework Preset: `Vite`

### Deploy on Netlify:
1. Connect your repository to Netlify.
2. Build Command: `npm run build`
3. Publish Directory: `dist`

---

## 📬 Contact & Inquiries

- **Developer**: Anchal Chaurasiya
- **Email**: [chaurasiyanchal07@gmail.com](mailto:chaurasiyanchal07@gmail.com)
- **Phone**: +91 9219673644
- **LinkedIn**: [linkedin.com/in/anchal-chaurasiya](https://linkedin.com/in/anchal-chaurasiya)
- **GitHub**: [github.com/Ancha2003](https://github.com/Ancha2003)
