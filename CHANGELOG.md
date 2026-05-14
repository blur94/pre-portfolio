# CHANGELOG.md
All notable changes to pre-portfolio are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## Unreleased

### Added
- Phase 6 Contact page: `ContactHero`, immediate-rendering `ContactForm`, and `/api/send-email` wiring
- ReactBits-inspired GridMotion treatment for the app error and not-found pages, with portfolio-specific copy and navigation actions
- Phase 5 Works detail page: typed project detail data, static params, project hero, screenshot, content sections, code block, gallery, and `/works/[slug]` assembly
- Phase 2 Home page: `HeroSection`, `WorksIntro`, `ProjectRow`, `ArticlesSection`, `ArticleCard`
- `src/lib/works.ts` — typed static data for 5 projects (LegiPro, VerivAfrica, APAS, Qatapolt Admin, Recurrent.ng)
- Converted `src/app/page.tsx` to a server component assembler
- Phase 1 shared components: `Nav`, `Footer`, `CTASection`, `LiveBadge`
- Root layout wired with all three fonts: Visby CF (localFont → `--font-heading`), Instrument Serif italic (`--font-display`), Inter (`--font-body`)
- Sheet-based hamburger nav (home, about, works, contact + social links)
- Footer with social SVG icons, phone/email, and credits row
- `<CTASection>` shared across all pages above the footer
- `<LiveBadge>` emerald chip for live project status
- Initialized repo memory system (`AGENTS.md`, `CLAUDE.md`, `PLAN.md`, `DECISIONS.md`, `CHANGELOG.md`)
- Favicon, icons, and PWA manifest support
- Contact page with email form
- Global styles and root layout
- `SplitText` animation component
- `Aurora` WebGL background component
- `AnimatedContent`, `Magnet`, `ShinyText` components
- `theme-provider` and `theme-hotkey` for dark/light mode switching
- shadcn/ui base components: Button, Card, Input, Label, Textarea
- API route `/api/send-email` using Resend SDK
- `DESIGN.md` with full Figma token extraction (colors, typography, spacing, border-radius, icons)

### Changed
- Improved light-mode contrast for the GridMotion error and not-found pages
- Removed vertical overflow from the not-found page by letting it fill the layout's remaining viewport height
- Recentered the not-found GridMotion background after the no-scroll layout adjustment
- Marked interactive visual components as client components where required by Next.js builds
- Migrated email sending from Nodemailer to Resend
- Moved `pnpm onlyBuiltDependencies` config from `pnpm-workspace.yaml` to `package.json`

---

## [0.1.0] - 2025-05

### Added
- Initial Next.js App Router project setup with TypeScript and Tailwind CSS
- shadcn/ui integration
- GSAP + Motion animation libraries
- Main page content and root layout
