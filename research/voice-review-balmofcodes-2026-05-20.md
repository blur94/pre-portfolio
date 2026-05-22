# Voice Review: BalmofCodes Portfolio

**Date:** 2026-05-20
**Strings reviewed:** 36
**Source:** Full component scan — HeroSection, CTASection, WorksIntro, ProjectRow, ArticleCard, ArticlesSection, ContactHero, ContactForm, About copy, Nav, Footer, LiveBadge, not-found.tsx

---

## Voice Rubric

No explicit rubric exists in the project docs — derived from the strongest-performing strings:

**On-voice (how the brand sounds):**
1. **Warm** — first-person, conversational, addresses the reader directly
2. **Specific** — names real things (project names, tech stacks, outcomes), avoids generic claims
3. **Craft-conscious** — signals intentionality about both engineering and design; the voice should feel like someone who cares about the details

**Anti-voice (never sounds like this):**
1. **Corporate** — third-person about the author, job-description language, "specialist responsible for"
2. **Generic** — portfolio boilerplate ("impactful", "exceptional", "digital experiences")
3. **Passive** — bureaucratic verbs, technical system messages, no-recovery error copy

> **Governance gap:** No voice rubric is documented in `DESIGN.md`, `STYLE.md`, or any project file. All strings currently pass or fail based on author feel alone. See governance recommendation at the end.

---

## Voice Consistency Score: 64% on-voice (23/36 strings score 4–5)

| # | String | Location | Score | Issue | Rewrite |
|---|---|---|---|---|---|
| 1 | "Software developer exploring the intersection of design, music, and code." | Hero bio | 5/5 | — | — |
| 2 | "See my works" | Hero CTA | 4/5 | Minor: "See" is slightly passive | "View my work" or keep as-is |
| 3 | "Download my CV" | Hero CTA | 4/5 | "Download" is a system action verb | "Get my CV" or "View my CV" |
| 4 | "I have contributed to several impactful projects, collaborating with teams to deliver exceptional digital experiences." | WorksIntro | 2/5 | Triple boilerplate: "contributed", "impactful", "exceptional digital experiences". Passive voice ("I have contributed"). | "I've shipped five production systems across legal tech, fintech, and government. Here's the work." |
| 5 | "Have a project in mind?" | CTASection heading | 5/5 | — | — |
| 6 | "A professional frontend developer is a skilled specialist responsible for creating the visual and interactive elements of a website or web application." | CTASection body | 1/5 | Hard violation. Wikipedia definition. Third-person about the author. Not a human voice. Appears on every single page. | "I build fast, accessible, beautifully designed web experiences — from idea to deployment. If you've got something in mind, let's make it real." |
| 7 | "Send me a message here" | CTASection button | 4/5 | "here" is redundant on a button | "Send me a message" |
| 8 | "Hi there, I'm Gilead Odo" | About hero | 5/5 | — | — |
| 9 | "Your Web Developer partner" | About hero subtitle | 3/5 | "partner" is vague and buzzwordy; capitalization of "Web Developer" is inconsistent | "Your frontend engineer." or "Let's build something together." |
| 10 | "Hi there, Let's Talk" | Contact hero | 5/5 | — | — |
| 11 | "Have a project in mind or just want to say hello? Drop me a message and I'll get back to you." | Contact subheading | 5/5 | — | — |
| 12 | "Tell me about your project…" | Contact textarea placeholder | 5/5 | — | — |
| 13 | "Your name" | Name input placeholder | 4/5 | Good. Personal. | — |
| 14 | "you@example.com" | Email input placeholder | 3/5 | Generic RFC placeholder | "you@yourcompany.com" |
| 15 | "Full Name" | Form label | 3/5 | "Full Name" is slightly bureaucratic | "Name" |
| 16 | "Email" | Form label | 4/5 | Clean | — |
| 17 | "Message" | Form label | 3/5 | Minimal. Works but the label could cue the right content | "Your message" |
| 18 | "Send message" | Submit button | 4/5 | Good action label | "Send it" would be warmer; current is acceptable |
| 19 | "Sending…" | Button loading state | 4/5 | Clear, consistent with tone | — |
| 20 | "Message sent successfully." | Form success status | 2/5 | System-speak. "Successfully" is a technical adverb. No personality. No follow-up. | "Sent! I'll get back to you soon." |
| 21 | "Message not sent." | Form error fallback | 2/5 | Provides no recovery path. Cold. | "Something went wrong — try again or email me at gilead.odo@gmail.com." |
| 22 | "View Project ↗" | ProjectRow live link | 4/5 | Clear, action-led | — |
| 23 | "View Repository ↗" | ProjectRow repo link | 4/5 | Clear | — |
| 24 | "Case Study →" | ProjectRow case study link | 2/5 | Inconsistent: (a) no "View" prefix unlike the two links above it; (b) uses `→` not `↗`. Reads as a label, not a CTA. | "View Case Study ↗" |
| 25 | "Read Article →" | ArticleCard link | 4/5 | Good. Specific verb. | — |
| 26 | "All Articles →" | ArticlesSection link | 3/5 | Functional, neutral. | "All writing →" if leaning into personal voice |
| 27 | "Recent Articles" | Section heading | 3/5 | Generic. | "What I've been writing" or "Writing" |
| 28 | "This route is not part of the current portfolio map. Head back home or jump straight into the work." | 404 body | 5/5 | Excellent. Portfolio-specific metaphor, dual options. | — |
| 29 | "404 / ROUTE MISSING" | 404 chip label | 3/5 | "ROUTE MISSING" is developer-speak. Technically charming, slightly niche. | Keep if the audience is engineers; "PAGE MISSING" for broader audiences |
| 30 | "Page not found" | 404 h1 | 4/5 | Standard. The page personality is carried by the body copy, so this is fine. | "Off the map" if leaning harder into the portfolio metaphor |
| 31 | "Back home" | 404 CTA | 4/5 | Warm. Conversational. | — |
| 32 | "View works" | 404 CTA | 4/5 | Good. Consistent with "works" naming. | — |
| 33 | "Loading…" | app/loading.tsx img alt | 4/5 | Appropriate. Clear. | — |
| 34 | "LIVE PROJECT" | LiveBadge | 5/5 | Strong signal. Specific, credibility-building. | — |
| 35 | "Designed with ♥ & Coffee" | Footer | 4/5 | Human, warm. | — |
| 36 | "Years of Experience" / "Projects Completed" / "Tech Stacks Mastered" | About stats labels | 3/5 | "Mastered" is the only claim-heavy word; the other two are neutral. Inconsistent confidence register across the three labels. | "Years of Experience" / "Projects Shipped" / "Tech Stacks" |

---

## Top 3 Recurring Violations

**1. Generic portfolio boilerplate** (strings #4, #6, #9, #27)

Pattern: Using words that every portfolio uses — "impactful", "exceptional", "specialist", "digital experiences", "partner". These words are meaningless from overuse. They signal that the author defaulted to template language instead of writing in their own voice.

Why it violates: The brand's strongest strings are distinctive because they're specific to Gilead ("design, music, and code"; "portfolio map"). Generic words contradict that specificity.

Fix rule: Before using any adjective, ask "would this appear on 50% of other developer portfolios?" If yes, replace it with something concrete — a project name, a number, a real outcome.

---

**2. System-speak in status messages** (strings #20, #21)

Pattern: "Message sent successfully." and "Message not sent." — both read like HTTP status descriptions. No warmth, no recovery instruction, no brand personality.

Why it violates: Status messages are micro-brand moments. The success state is particularly valuable — a potential client just reached out. "Successfully" is a technical adverb that belongs in a server log, not a conversation.

Fix rule: All status messages must follow the pattern: [what happened in plain English] + [what happens next / what the user should do]. Success messages should celebrate. Error messages must include a recovery action.

---

**3. CTA label inconsistency: label-style vs verb-style** (string #24, and comparing #22/#23 to #24)

Pattern: `ProjectRow` uses three links side-by-side. Two use verb-led CTA style ("View Project ↗", "View Repository ↗") and one drops the verb and changes the arrow ("Case Study →"). The same pattern inconsistency appears between "Live Preview →" (Works > View hero) and "View Project ↗" (Works list) — different labels for the same concept on adjacent pages.

Why it violates: Inconsistent CTA patterns force users to re-parse intent. The arrow style (`→` vs `↗`) also carries implicit meaning (internal vs external) that is applied inconsistently.

Fix rule: All text links in the Works flow use verb-first + `↗` for external, `→` for internal navigation. Add this to `STYLE.md`.

---

## Governance Recommendation

Add a **3-line voice rubric to `STYLE.md`** under a "Copy & Voice" section listing the three on-voice adjectives, three anti-voice adjectives, and the two fix rules above for button labels and status messages. This makes the rubric reviewable in PRs without requiring a specialist each time.
