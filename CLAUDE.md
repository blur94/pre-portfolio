# CLAUDE.md
Claude Code-specific orchestration instructions. These supplement and extend `AGENTS.md`.

---

## Startup Sequence

1. Read `AGENTS.md` first — universal rules all agents follow
2. Read `PLAN.md`, `DECISIONS.md`, `CHANGELOG.md`
3. Read `DESIGN.md` before any visual or UI work
4. Write a one-paragraph summary of the current project state and what needs to be done next
5. Only then begin implementation

---

## Design System

Always read `DESIGN.md` before making any visual or UI decisions.
All font choices, colors, spacing, and aesthetic direction are defined there.
Do not deviate without explicit user approval.
In QA mode, flag any code that doesn't match `DESIGN.md`.

---

## Before Writing Any Code

- Confirm you understand the current task from `PLAN.md`
- Verify your planned approach does not violate any entry in `DECISIONS.md`
- If there is a conflict, stop and ask — do not work around a frozen decision silently
- State your intended approach explicitly before beginning

---

## During Implementation

- Use TypeScript everywhere — no plain JS files
- Use Tailwind CSS utility classes; avoid inline styles
- shadcn/ui components live in `src/components/ui/` — extend, don't rewrite them
- Animation components (GSAP, Motion) live in `src/components/`
- API routes live in `src/app/api/`
- Keep changes incremental — commit-sized chunks where possible
- If you discover an undocumented architectural decision being made, record it in `DECISIONS.md`
- If you discover new work that wasn't planned, add it to the Parking Lot in `PLAN.md`

---

## Architecture Changes

If you believe an architectural decision needs to change:

1. Do not change it silently
2. Explicitly state: what you want to change, why, and what the impact is
3. Wait for confirmation before proceeding
4. Once confirmed, update `DECISIONS.md` with the new decision

---

## End-of-Session Checklist

After completing implementation work:

- [ ] Remove completed tasks from `PLAN.md`
- [ ] Update `PLAN.md` with current progress and any new tasks discovered
- [ ] Add any new architectural decisions to `DECISIONS.md`
- [ ] Record completed work in `CHANGELOG.md` under `## Unreleased`
- [ ] Confirm repo memory files are consistent with each other

---

## Skill Routing

When the user's request matches an available skill, invoke it via the Skill tool.

Key routing rules:
- Design system / visual decisions → invoke `/design-consultation` or `/plan-design-review`
- Bugs / errors → invoke `/investigate`
- QA / testing site behavior → invoke `/qa` or `/qa-only`
- Code review / diff check → invoke `/review`
- Visual polish → invoke `/design-review`
- Ship / deploy / PR → invoke `/ship` or `/land-and-deploy`

---

## Anti-Patterns to Avoid

- Do not rely on chat history as a source of truth
- Do not make sweeping refactors without flagging them first
- Do not leave `PLAN.md` with stale completed tasks
- Do not record temporary debug work in `DECISIONS.md`
- Do not skip the startup sequence even for "small" tasks
- Do not use `any` type in TypeScript without a comment explaining why
