# About Stats Count Up Design

## Goal

Animate the numeric stats on the `/about` page so they count up while preserving
the current stats row layout and visual hierarchy.

## Context

- The About page composes the stats section through `StatsRow`.
- `StatsRow` currently renders three static values: `6+`, `12`, and `8`.
- The repo already configures the React Bits shadcn registry in
  `components.json`.
- The stats section already uses `AnimatedContent` for the column reveal.

## Chosen Approach

Use the React Bits `CountUp` component inside the existing `StatsRow`.

This keeps the behavior change focused on the stat numbers, satisfies the
request to use React Bits, and avoids replacing the current stats section with a
larger block that could drift from the existing About page design.

## Component Design

### `CountUp`

Add the React Bits count-up component from the configured shadcn registry and
review the copied source before wiring it into the page.

The component should animate numeric targets upward from its default starting
value. It will own number interpolation only.

### `StatsRow`

Keep `StatsRow` as the section owner:

- Preserve the existing section spacing, three-column grid, dividers, labels,
  typography styling, and `AnimatedContent` reveal.
- Store numeric stat targets separately from optional display suffixes so the
  years-of-experience stat can animate `6` and still display `+`.
- Render React Bits `CountUp` where the static stat number is currently shown.

## Data Flow

Each stats entry provides:

- a numeric count target
- an optional suffix
- the existing label

`StatsRow` maps those entries into the existing stat columns and passes each
numeric target to `CountUp`.

## Accessibility And Motion

The visible stat labels remain unchanged so each number keeps its existing
context. The count-up behavior should not add controls or alter navigation.

If the imported React Bits component already includes reduced-motion handling,
preserve it. Otherwise keep the integration minimal and avoid introducing a
second custom animation path in this change.

## Error Handling

There is no async data or user input in this feature. Failures should surface at
build or lint time through type and import checks.

## Verification

- Confirm the React Bits registry item installs into the repo with correct
  imports and dependencies.
- Verify `/about` still renders the same three stats and that `6+` keeps its
  suffix.
- Run the repo lint and build checks.
- Open the local About page after the change and visually confirm the numbers
  count upward without disturbing the existing layout.
