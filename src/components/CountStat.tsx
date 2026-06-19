"use client";

import { useEffect, useRef, useState } from "react";

interface CountStatProps {
  /** Display number — can include prefix/suffix like "6+", "—40%", "₦2.4M", "<60ms" */
  number: string;
  label: string;
}

/**
 * CountStat — animates a numeric value from 0 to its target when it enters the viewport.
 * Handles prefix/suffix strings (e.g. "6+", "—40%", "₦2.4M", "<60ms").
 * Respects prefers-reduced-motion.
 */
export function CountStat({ number, label }: CountStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  // Parse: optional prefix, numeric part, optional suffix
  const match = String(number).match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  const prefix = match ? match[1] : "";
  const n = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : String(number);
  const isNonNumeric = !match;

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [val, setVal] = useState(0);

  // Intersection observer to trigger animation on viewport entry
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setShown(true);
        });
      },
      { threshold: 0.5 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // Count-up animation
  useEffect(() => {
    if (!shown || prefersReducedMotion || isNonNumeric) {
      return;
    }
    const duration = 800;
    const start = performance.now();
    let raf: number;

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(n * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown, n, prefersReducedMotion, isNonNumeric]);

  const currentValue = prefersReducedMotion ? n : val;
  const display = Number.isInteger(n)
    ? Math.round(currentValue)
    : currentValue.toFixed(1);

  return (
    <div ref={ref} className="flex flex-col items-center gap-3 text-center">
      <div
        className="leading-none tracking-tight"
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(72px, 9vw, 128px)",
          fontWeight: 500,
          letterSpacing: "-0.06em",
          color: "var(--text-primary)",
        }}
      >
        {isNonNumeric ? number : `${prefix}${display}${suffix}`}
      </div>
      <p
        className="text-sm leading-snug"
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          maxWidth: "22ch",
        }}
      >
        {label}
      </p>
    </div>
  );
}
