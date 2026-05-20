# AGENTS.md
Universal AI collaboration instructions for all coding agents (Claude Code, Cursor, Windsurf, ChatGPT, etc.).

---

## Startup Protocol

Before writing any code or making any decisions, read these files in order:

1. `PLAN.md` - current project state and active tasks
2. `DECISIONS.md` - frozen architectural and product decisions
3. `CHANGELOG.md` - completed work history
4. `STYLE.md` - compact style and implementation-pattern reference

Then briefly summarize what you understand about the current project state before proceeding.

---

## Project Overview

Personal developer portfolio - **pre-portfolio** - built with Next.js App Router (TypeScript), Tailwind CSS, and shadcn/ui. Designed desktop-first (1440px canvas) with a dark-first aesthetic. Contact form uses Resend for email delivery. Animations via GSAP and Motion (Framer).

Key pages: Home, Works, Works > View, Contact, About Me. Design tokens are documented in `DESIGN.md`; compact style guidance is documented in `STYLE.md`.

---

## File Responsibilities

| File | Purpose |
|------|---------|
| `PLAN.md` | Active working memory - what is being built right now |
| `DECISIONS.md` | Frozen decisions - things that are settled and should not change |
| `CHANGELOG.md` | Historical record - completed implementation work |
| `DESIGN.md` | Design tokens, typography, color, spacing - single source of truth for all visual decisions |
| `STYLE.md` | Compact style and implementation-pattern reference derived from the repo |

---

## Core Behavioral Rules

- **Never override frozen decisions** in `DECISIONS.md` unless the user explicitly instructs you to.
- **Always read `DESIGN.md`** before making any visual or UI decisions. Do not deviate from its tokens without approval.
- **Use `STYLE.md`** as the compact reference for visual identity, stack boundaries, and reusable implementation patterns.
- **Keep implementation consistent** with existing architecture described in `DECISIONS.md`.
- **Prefer incremental changes** over full rewrites. If a rewrite is necessary, flag it explicitly and ask first.
- **Avoid assumptions from previous chats**. The repo files are the source of truth, not conversation history.
- **Remove completed tasks** from `PLAN.md` after they are done. Do not let it accumulate stale entries.
- **Do not invent requirements**. If something is unclear, ask before implementing.
- **Prefer typed, explicit, maintainable code** over clever shortcuts.

---

## End-of-Session Workflow

At the end of every implementation session, update the following files:

### PLAN.md
- Remove tasks that were completed
- Update the status/context of in-progress work
- Add any newly discovered tasks or complications

### DECISIONS.md
- Record any new architectural or product decisions that were made
- Include the date, decision, reasoning, and implications

### CHANGELOG.md
- Record completed implementation work under `## Unreleased`
- Use developer-facing, concise language

---

## What Belongs Where

**In PLAN.md:** what you're building right now, acceptance criteria, deferred ideas (Parking Lot section)

**In DECISIONS.md:** technology choices, structural patterns, anything you'd explain to a new engineer joining the project

**In CHANGELOG.md:** features added, bugs fixed, things changed or removed, completed milestones

**In DESIGN.md:** all visual decisions - colors, typography, spacing, border-radius, icons

**In STYLE.md:** compact implementation-facing style guidance derived from `DESIGN.md` and current code

**Not in any file:** temporary debug notes, speculative ideas (use Parking Lot in `PLAN.md` instead)
