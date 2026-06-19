/**
 * AvailabilityCard — contact page right-column aside.
 * Shows availability status, current month, and KV rows for timezone/email/calendar.
 */
export function AvailabilityCard() {
  const now = new Date();
  const monthYear = now.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <aside
      className="flex flex-col gap-6 rounded-[20px] border p-8"
      style={{
        backgroundColor: "var(--bg-surface)",
        borderColor: "var(--border-faint)",
      }}
    >
      {/* Availability indicator */}
      <div className="flex items-center gap-2.5">
        <span
          aria-hidden="true"
          className="inline-block size-2 rounded-full"
          style={{
            backgroundColor: "var(--accent-primary)",
            boxShadow:
              "0 0 0 4px color-mix(in oklab, var(--accent-primary) 24%, transparent)",
          }}
        />
        <span
          className="text-xs font-semibold uppercase tracking-widest"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--text-secondary)",
          }}
        >
          Booking project work
        </span>
      </div>

      {/* Available from */}
      <div>
        <p
          className="mb-4 leading-none"
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: 36,
            letterSpacing: "-0.06em",
            color: "var(--text-primary)",
          }}
        >
          Available from
          <br />
          {monthYear}
        </p>
        <p
          className="text-sm leading-relaxed"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 500,
            color: "var(--text-muted)",
          }}
        >
          Lead times measured in weeks, not months. Best fit for 4–12 week
          engagements.
        </p>
      </div>

      {/* Divider */}
      <hr style={{ borderColor: "var(--border-faint)", margin: 0 }} />

      {/* KV rows */}
      <dl
        className="grid gap-y-3.5"
        style={{ gridTemplateColumns: "auto 1fr", columnGap: 24 }}
      >
        <dt
          className="text-xs font-semibold uppercase tracking-[0.08em]"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--text-tertiary)",
          }}
        >
          Timezone
        </dt>
        <dd
          className="m-0 text-base font-medium tracking-tight"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--text-primary)",
            letterSpacing: "-0.04em",
          }}
        >
          WAT · UTC+1
        </dd>

        <dt
          className="text-xs font-semibold uppercase tracking-[0.08em]"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--text-tertiary)",
          }}
        >
          Email
        </dt>
        <dd
          className="m-0 text-base font-medium"
          style={{
            fontFamily: "var(--font-heading)",
            letterSpacing: "-0.04em",
          }}
        >
          <a
            href="mailto:hello@gileadodo.com"
            className="underline transition-opacity hover:opacity-70"
            style={{ color: "var(--text-primary)" }}
          >
            hello@gileadodo.com
          </a>
        </dd>

        <dt
          className="text-xs font-semibold uppercase tracking-[0.08em]"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--text-tertiary)",
          }}
        >
          Calendar
        </dt>
        <dd
          className="m-0 text-base font-medium"
          style={{
            fontFamily: "var(--font-heading)",
            letterSpacing: "-0.04em",
          }}
        >
          <a
            href="https://cal.com/gileadodo"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-opacity hover:opacity-70"
            style={{ color: "var(--text-primary)" }}
          >
            cal.com/gileadodo
          </a>
        </dd>
      </dl>
    </aside>
  );
}
