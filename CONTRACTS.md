# CONTRACTS.md

Shared interfaces that more than one phase produces or consumes. Workers read the
relevant entry before implementing; QA verifies implementations match.

---

## Work live-link fields

**Defined in:** `src/lib/works.ts` (the `Work` type — already added)
**Status:** materialized in code (TypeScript is the source of truth)

```ts
type Work = {
  // ...existing fields
  isLive: boolean;
  /** Public URL to visit the live project, when one exists. */
  liveUrl?: string;
  /** True when liveUrl lands on a login wall (a gated app or admin). */
  liveUrlGated?: boolean;
  // ...
};
```

**Producer:** Phase 1 (data) — sets `liveUrl` / `liveUrlGated` per work entry.
**Consumer:** Phase 2 (UI) — `src/app/works/[slug]/page.tsx` reads both fields to render
the "Visit project" affordance and the "Login required" hint.

**Rules:**
- `liveUrl` is optional. UI must render the link only when it is a non-empty string.
- `liveUrlGated` is optional and only meaningful when `liveUrl` is set. When `true`,
  the UI shows a "Login required" hint next to the link.
- A non-live work (`isLive: false`) has no `liveUrl`.
