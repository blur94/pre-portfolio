# PLAN.md
Active working memory for the pre-portfolio project.

Keep this lean. Remove completed work. Focus on active execution only.

---

## Frozen Section

- Framework: Next.js App Router with TypeScript
- Styling: Tailwind CSS + shadcn/ui
- Animation: GSAP + Motion (Framer)
- Email: Resend via API route at `/api/send-email`
- Theme: Dark-first, Zinc base + Lime primary (shadcn preset `b8QyST2lZC`)
- Design tokens: See `DESIGN.md`
- Fonts: Instrument Serif (`--font-display`, hero/display only) · Visby CF (`--font-heading`, UI headings) · Inter (`--font-body`, body copy)

---

## Open Section

### Current Task: None

**Status:** Core portfolio pages are implemented. No active implementation task is in progress.

**Pages:** 5 total (Home, Works, Works > View, Contact, About Me)
**Design reference:** Screenshots provided. Use `DESIGN.md` for exact tokens and `STYLE.md` for compact style guidance.

---

## Component Inventory

### Shared (all pages)

| Component | File | Notes |
|-----------|------|-------|
| `<Nav>` | `src/components/Nav.tsx` | Logo "BalmofCodes" · Instagram/Twitter(X)/Github links · hamburger `≡` |
| `<CTASection>` | `src/components/CTASection.tsx` | "Have a project in mind?" · body · pill button "Send me a message here" |
| `<Footer>` | `src/components/Footer.tsx` | Social icons · phone · email · "Designed with ♥ & Coffee" · copyright |
| `<LiveBadge>` | `src/components/LiveBadge.tsx` | "LIVE PROJECT" green chip — used in Works and Works > View |

### Home Page (`src/app/page.tsx`)

| Section | Component | Notes |
|---------|-----------|-------|
| Hero | `<HeroSection>` | Photo left · "**Gilead Odo** 👋" right · bio text · "See my works" + "Download my CV" buttons — condensed side-by-side layout |
| Works intro | `<WorksIntro>` | "I have contributed to several impactful projects..." paragraph heading |
| Project rows | `<ProjectRow>` | Left: screenshot · Right: title + `<LiveBadge>` + description + links · 5 projects |
| Articles | `<ArticlesSection>` | "Recent Articles" + "All Articles →" · 3 `<ArticleCard>` |

### About Me Page (`src/app/about/page.tsx`)

| Section | Component | Notes |
|---------|-----------|-------|
| Hero | `<HeroSection>` | Centered "Hi there, I'm **Gilead Odo** 👋" · "Your Web Developer partner" subtitle · B&W full-width photo below — reuses same component, different layout prop |
| Stats | `<StatsRow>` | 3 cols: "6+" Years / "12" Projects / "8" Tech Stacks — `stat-number` 72px Visby CF |
| Bio | `<BioBlock>` | Description paragraph · "See my works" + "Download my CV" outlined buttons |
| Tech Stacks | `<TechStacksCard>` | Dark surface card · 3 categories (Frontend / Server-Side / Tools) · lime accent underline per category |
| Experience | `<ExperienceCard>` | Dark surface card · repeating rows: company · date badge · role title · description |
| Gallery | `<PictureGallery>` | Horizontal row of 6 square photo placeholders — horizontal scroll on overflow |

### Works Page (`src/app/works/page.tsx`)

| Section | Component | Notes |
|---------|-----------|-------|
| Intro | `<WorksIntro>` | "I have contributed to several impactful projects..." paragraph heading |
| Project rows | `<ProjectRow>` | Left: screenshot · Right: title + `<LiveBadge>` + description + "View Project ↗" + "View Repository ↗" · 5 projects |
| Articles | `<ArticlesSection>` | "Recent Articles" heading · "All Articles →" link · 3 `<ArticleCard>` |
| Article card | `<ArticleCard>` | Image · title · description · date · "Read Article →" |

**Projects data:**
1. LegiPro — LIVE PROJECT
2. VerivAfrica — LIVE PROJECT
3. APAS — LIVE PROJECT
4. Qatapolt Admin — LIVE PROJECT
5. Recurrent.ng — LIVE PROJECT

### Works > View (`src/app/works/[slug]/page.tsx`)

| Section | Component | Notes |
|---------|-----------|-------|
| Hero | `<ProjectHero>` | "← Back to works" · title + `<LiveBadge>` · description · Live Preview + View Repository links |
| Screenshot | `<ProjectScreenshot>` | Full-width project dashboard image |
| Content sections | `<ContentSection>` | Reusable: heading + body — used for Overview, Tech Stacks, Roles, Features, Challenges |
| Code block | `<CodeBlock>` | Monospace file-tree display |
| Gallery | `<ProjectGallery>` | 3 screenshot thumbnails in a row |

### Contact Page (`src/app/contact/page.tsx`)

| Section | Component | Notes |
|---------|-----------|-------|
| Hero | `<ContactHero>` | "Hi there, **Let's Talk**" — italic Instrument Serif "Hi there," + bold Visby CF "Let's Talk" |
| Form | existing | Name · Email · Message · "Send Message" — wire up to existing API route |

## Build Order

**Phase 1 — Shared components** ✅ COMPLETE
- [x] `<Nav>` — hamburger Sheet (base-ui render prop), social links, Visby CF logo
- [x] `<Footer>` — social SVG icons, phone/email, credits row
- [x] `<CTASection>` — "Have a project in mind?" with pill button
- [x] `<LiveBadge>` — emerald "LIVE PROJECT" chip
- [x] Root layout — Visby CF loaded via localFont, all 3 font variables wired
- [x] Browser verified — Nav, Sheet, Footer, dark mode all confirmed

**Phase 2 — Home page** ✅ COMPLETE
- [x] `<HeroSection>` — Aurora bg, photo placeholder left, name + bio + 2 CTA buttons right
- [x] `<WorksIntro>` — intro paragraph
- [x] `<ProjectRow>` — screenshot + title + LiveBadge + description + tags + links
- [x] `<ArticlesSection>` + `<ArticleCard>` — 3-column grid, 3 placeholder articles
- [x] `src/lib/works.ts` — static data for 5 projects
- [x] Assembled `src/app/page.tsx` as a server component
- [x] Browser verified at 1440px desktop — no console errors

**Phase 3 — About Me page** ✅ COMPLETE
- [x] `<AboutHeroSection>` — centered heading + full-width photo placeholder
- [x] `<StatsRow>`
- [x] `<BioBlock>` with CTA buttons
- [x] `<TechStacksCard>`
- [x] `<ExperienceCard>`
- [x] `<PictureGallery>`
- [x] Assemble `src/app/about/page.tsx`

**Phase 4 — Works page** ✅ COMPLETE
- [x] Reuse `<WorksIntro>` + `<ProjectRow>` from Phase 2
- [x] Assemble `src/app/works/page.tsx`

**Phase 5 — Works > View** ✅ COMPLETE
- [x] Define project data type and static data file
- [x] `<ProjectHero>`
- [x] `<ProjectScreenshot>`
- [x] `<ContentSection>` (reusable)
- [x] `<CodeBlock>`
- [x] `<ProjectGallery>`
- [x] Assemble `src/app/works/[slug]/page.tsx`

**Phase 6 — Contact page** ✅ COMPLETE
- [x] `<ContactHero>`
- [x] Wire up form to `/api/send-email`
- [x] Assemble `src/app/contact/page.tsx`

**All designs confirmed.** No deferred pages.

---

## Parking Lot

- PWA manifest and icons (already added per git history)
- SEO metadata per page
- OGL / WebGL Aurora background — decide placement on Home hero
- Blog / article section (referenced in typography scale)
- Light mode polish (dark-first, light mode is secondary)
