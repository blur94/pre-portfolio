# About Stats Count Up Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Animate the `/about` stats upward with the React Bits count-up component while preserving the existing `StatsRow` layout.

**Architecture:** Keep `StatsRow` as the About stats section owner and install the React Bits counter through the configured shadcn registry. Convert the stat data from formatted strings to numeric targets plus an optional suffix so the imported counter receives numbers while the UI still displays `6+`.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Tailwind CSS v4, shadcn registry CLI, React Bits, pnpm

---

## File Structure

- Create through registry CLI: React Bits count-up component under the path chosen by the configured shadcn registry item.
- Modify: `src/components/StatsRow.tsx` to pass numeric stat targets into the counter and retain suffix display.
- Modify: `PLAN.md` to replace the completed hero task with the current stats task while it is active, then remove completed execution details at session end.
- Modify: `CHANGELOG.md` under `## Unreleased` to record the completed About stats animation.
- Modify only if a durable decision is made: `DECISIONS.md`.

### Task 1: Install And Inspect React Bits CountUp

**Files:**
- Create: registry-generated React Bits count-up component path reported by `pnpm dlx shadcn@latest add`
- Inspect: `components.json`

- [ ] **Step 1: Confirm the React Bits registry item**

Run:

```powershell
pnpm dlx shadcn@latest search @react-bits -q "count up"
```

Expected: the search output includes the React Bits count-up registry item.

- [ ] **Step 2: Preview or add the registry item**

Run the exact registry item returned by search:

```powershell
pnpm dlx shadcn@latest add @react-bits/count-up
```

Expected: the CLI copies a React Bits counter component into the project and reports any package additions.

- [ ] **Step 3: Read the generated component**

Open the generated TypeScript file and check:

- the exported component name and props for numeric targets
- whether animation runs on view or mount
- whether the imported file is a client component
- any added dependency and import path adjustments

- [ ] **Step 4: Commit the registry source if it installs cleanly**

```powershell
git add -- <generated-count-up-file> package.json pnpm-lock.yaml
git commit -m "chore: add react bits count up"
```

### Task 2: Wire CountUp Into StatsRow

**Files:**
- Modify: `src/components/StatsRow.tsx`

- [ ] **Step 1: Capture the expected display contract before editing**

The existing stats row must still render these visible values after animation:

```ts
[
  { value: 6, suffix: "+", label: "Years of\nExperience" },
  { value: 12, label: "Projects\nCompleted" },
  { value: 8, label: "Tech Stacks\nMastered" },
]
```

There is no existing component-test harness in this repo. Use the build and browser verification steps below as the behavior check for this UI-only integration.

- [ ] **Step 2: Replace formatted stat strings with numeric data**

Update `StatsRow` data to numeric targets plus optional suffixes:

```tsx
const stats = [
  { value: 6, suffix: "+", label: "Years of\nExperience" },
  { value: 12, label: "Projects\nCompleted" },
  { value: 8, label: "Tech Stacks\nMastered" },
];
```

- [ ] **Step 3: Render the imported React Bits counter in the existing number span**

Use the generated component API from Task 1 in the current number treatment. Keep the `AnimatedContent` wrapper, layout classes, labels, and font styling intact. The resulting shape should remain equivalent to:

```tsx
<span
  className="text-6xl font-medium leading-none tracking-tight md:text-7xl lg:text-[72px]"
  style={{ fontFamily: "var(--font-heading)" }}
>
  <CountUp to={stat.value} />
  {stat.suffix}
</span>
```

Adjust only the `CountUp` prop names if the registry-generated component uses a different API.

- [ ] **Step 4: Run lint**

```powershell
pnpm lint
```

Expected: lint exits with code `0`.

- [ ] **Step 5: Run build**

```powershell
pnpm build
```

Expected: the Next.js production build exits with code `0`.

- [ ] **Step 6: Commit the stats integration**

```powershell
git add -- src/components/StatsRow.tsx
git commit -m "feat: animate about stats count up"
```

### Task 3: Verify UI And Update Repo Memory

**Files:**
- Modify: `PLAN.md`
- Modify: `CHANGELOG.md`
- Modify only if needed: `DECISIONS.md`

- [ ] **Step 1: Start the local app**

Run:

```powershell
pnpm dev
```

Expected: Next.js prints a local URL for the dev server.

- [ ] **Step 2: Inspect `/about` in the local browser**

Check that:

- the three stats count upward
- the first stat still displays `6+`
- the stats row keeps its three-column dividers and labels
- no visible overlap or layout shift appears around the stat numbers

- [ ] **Step 3: Update session memory**

Update `PLAN.md` so it no longer advertises the completed hero task as active. Record only active or newly discovered work after this count-up task is complete.

Add a concise `CHANGELOG.md` entry under `## Unreleased`, for example:

```md
- Animated About page stats with the React Bits count-up treatment while preserving the existing stats row layout
```

Do not edit `DECISIONS.md` unless the work introduces a durable architecture or product decision not already covered by the existing React Bits and animation guidance.

- [ ] **Step 4: Re-run final verification**

```powershell
pnpm lint
pnpm build
```

Expected: both commands exit with code `0`.

- [ ] **Step 5: Commit memory updates**

```powershell
git add -- PLAN.md CHANGELOG.md DECISIONS.md
git commit -m "docs: record about stats count up"
```

