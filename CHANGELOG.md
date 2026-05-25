# CHANGELOG.md
All notable changes to pre-portfolio are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## Unreleased

### QA Session — 2026-05-24 (Mobile responsive stacking for side-by-side image sections)

**Agents employed:** `ui-stylist` (Phase 1)
**Rework cycles:** None — first-pass QA approved.

**Phase summaries:**
- Phase 1: Replaced two inline `style={{ gridTemplateColumns: "..." }}` props in `src/app/page.tsx` with Tailwind responsive classes. Hero grid: `grid-cols-1 gap-8 md:grid-cols-[55fr_45fr] md:gap-16`. About Teaser grid: `grid-cols-1 gap-12 md:grid-cols-[60fr_40fr] md:gap-24`. Both sections now stack to single column below `md` (768px) with copy above image, and restore the original fractional column layout on `md`+.

**QA verdict: APPROVED** — all 4 acceptance criteria met. `pnpm build` and `pnpm lint` pass with zero errors.

---

### QA Session — 2026-05-24 (Full Portfolio Redesign "Plinth")

**Agents employed:** `plinth-data-assets-integrator` (Phases 1 + 3), `plinth-page-assembler` (Phases 2A + 2B)
**Rework cycles:** None — all phases passed first-pass QA.

**Phase summaries:**
- Phase 1: 12 project images copied to `public/projects/`; `src/lib/works.ts` rewritten with new `Work` type and 6 Plinth projects (verivafrica, recurrent, qatapolt, prune, raia, reunitar).
- Phase 2A: 8 new shared components created — `Nav.tsx` (sticky 3-col, theme toggle, localStorage persistence, lime active underline), `Footer.tsx` (3-col + bottom bar), `ProjectCard.tsx` (bg-surface, 16:9, chips), `BrowserFrame.tsx` (mock chrome + URL bar), `Marquee.tsx` (CSS animation + gradient mask + hover-pause), `StaggeredGrid.tsx` (3-col + 56px even-index offset), `CountStat.tsx` (IntersectionObserver count-up, prefers-reduced-motion), `AvailabilityCard.tsx` (accent dot, dynamic month/year, KV rows).
- Phase 2B: All 5 pages rewritten — `page.tsx` (Hero 55/45 + BrowserFrame + Marquee + StaggeredGrid + CountStat), `about/page.tsx` (display header + 3 articles + 4-role experience), `works/page.tsx` (full StaggeredGrid + CTA), `works/[slug]/page.tsx` (8-slot case study template + prev/next navigation), `contact/page.tsx` (60/40 + AvailabilityCard + form wired to `/api/send-email`).
- Phase 3: All 19 obsolete components deleted. `pnpm build` passes with zero TypeScript errors.

**QA verdict: APPROVED** — all 9 acceptance criteria met.

### Added
- Plinth redesign implementation from the handoff bundle: six-project `works` data, public project assets, logo marks, shared `ProjectCard`, `BrowserFrame`, `Marquee`, `StaggeredGrid`, `CountStat`, `AvailabilityCard`, and `Kicker` components
- Plinth-specific specialist agent definitions: `plinth-data-assets-integrator` and `plinth-page-assembler`
- React Bits CountUp treatment for the About stats row while preserving the existing `6+`, projects, and tech-stack displays
- Multi-agent org system: Agent Registry + Org Protocol in `AGENTS.md`, multi-agent sections in `CLAUDE.md`, Active Agents table in `PLAN.md`, Agent Routing Decisions in `DECISIONS.md`, core agent definitions in `.claude/agents/` (ceo, hr, researcher, qa)
- Build commands and non-obvious architecture notes added to `CLAUDE.md`
- `STYLE.md` with a compact visual identity and implementation-pattern guide derived from the current repo
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
- Fixed shared chrome on mobile by restoring a hamburger Sheet menu and corrected the wordmark text from `Portfollio` to `Gilead Odo`.
- Reworked Home, Works, About, Contact, Nav, Footer, and `/works/[slug]` to match the Plinth dark-first editorial layout and route structure
- Replaced the old theme-toggle hydration path with stable `data-theme` DOM toggling and a no-flash `beforeInteractive` theme init script
- Updated ESLint and git ignore rules so the extracted `.handoff/` prototype stays available locally without being linted or tracked
- Migrated the Next.js 16 lint command to the ESLint CLI and cleared blocking lint errors in existing animation components required by the About stats QA gate
- `HeroSection`: replaced rectangular photo container with organic blob shape (multi-value `border-radius: 60% 40% 57% 43% / 52% 44% 56% 48%`), added `rotate-2` tilt, asymmetric `md:grid-cols-[5fr_4fr]` column ratio, `aspect-[3/4]` with `overflow-visible`, and a floating lime "Available ✦" accent pill absolutely positioned near the bottom of the photo column
- Commissioned `ui-stylist` agent (`.claude/agents/ui-stylist.md`) and registered it in `AGENTS.md` Agent Registry (QA pass rate: 1/1)
- Updated `AGENTS.md` startup guidance to include `STYLE.md` and the full implemented page set
- Removed vertical overflow from the contact page by fitting it to the layout's remaining viewport height
- Centered the contact form within the contact page content column while keeping the submit action left-aligned
- Improved light-mode contrast and focus styling for the hamburger menu sheet
- Improved light-mode contrast for the GridMotion error and not-found pages
- Removed vertical overflow from the not-found page by letting it fill the layout's remaining viewport height
- Recentered the not-found GridMotion background after the no-scroll layout adjustment
- Marked interactive visual components as client components where required by Next.js builds
- Migrated email sending from Nodemailer to Resend
- Moved `pnpm onlyBuiltDependencies` config from `pnpm-workspace.yaml` to `package.json`

### QA
- Verified mobile nav/logo fix with `pnpm lint`, `pnpm build`, source `asChild` scan, Playwright mobile hamburger open check at 390px, desktop nav snapshot, and QA agent review.
- Verified Plinth redesign with `pnpm lint`, `pnpm build`, stale old-component import scan, no source `asChild` usage, Playwright smoke screenshots for `/`, `/about`, `/works`, `/works/verivafrica`, `/contact`, zero browser console errors on those routes, theme persistence, and case-study next navigation.
- Multi-agent review completed for Plinth data/assets, case-study assembly, HR registry updates, and final QA.
- Approved the About stats CountUp session after React Bits registry integration by `registry-component-integrator`, lint CLI migration by `next-lint-migrator`, and animation lint rework by `animation-lint-reworker`.
- Rework cycle: the initial CountUp review failed on duplicate registry output and a broken Next 16 lint gate before the final QA pass.
- Reviewed Phase A React Bits CountUp registry add by `registry-component-integrator`; rework is required because the registry fetch failed before generated CountUp source was added.
- Reviewed Phase B About stats integration by `registry-component-integrator`; rework is required because no CountUp API was available and `StatsRow` remains static.

---

## [0.1.0] - 2025-05

### Added
- Initial Next.js App Router project setup with TypeScript and Tailwind CSS
- shadcn/ui integration
- GSAP + Motion animation libraries
- Main page content and root layout
