"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * A vertical timeline: a marker per entry on a shared spine, with the spine
 * filling in as you scroll through the list.
 *
 * The spine used to be invisible everywhere this component was used. It was
 * measured with `lineRef.getBoundingClientRect()` and that same measurement
 * was written back as its own inline `height` — circular, so it began at 0px,
 * measured 0px, and stayed 0px for good. Both the rail and the progress fill
 * inside it were clipped to nothing, which left every timeline on the site as
 * unconnected dots beside floating text.
 *
 * Now the spine is positioned off the markers themselves: it starts at the
 * centre of the first and ends at the centre of the last, so it never
 * over- or under-shoots regardless of how tall any entry runs. A
 * ResizeObserver re-measures on reflow — a webfont swapping in or a
 * breakpoint change both alter row heights after first paint.
 */
export function Timeline({
  data,
}: {
  data: { title: React.ReactNode; content: React.ReactNode }[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rail, setRail] = useState({ top: 0, height: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const markers = el.querySelectorAll<HTMLElement>("[data-timeline-marker]");
      if (markers.length === 0) return;
      const containerTop = el.getBoundingClientRect().top;
      const first = markers[0].getBoundingClientRect();
      const last = markers[markers.length - 1].getBoundingClientRect();
      const start = first.top - containerTop + first.height / 2;
      const end = last.top - containerTop + last.height / 2;
      setRail({ top: start, height: Math.max(0, end - start) });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [data.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 70%"],
  });

  const fillHeight = useTransform(scrollYProgress, [0, 1], [0, rail.height]);
  const fillOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div ref={containerRef} className="relative">
      {/* The spine, sitting behind the markers. left-[7px] with a 2px width
          centres it on x=8, which is the centre of a 16px marker opening the
          row — so the dots sit exactly on the line at every breakpoint. */}
      <div
        aria-hidden="true"
        className="absolute left-[7px] w-0.5 rounded-full bg-border"
        style={{ top: rail.top, height: rail.height }}
      >
        <motion.div
          style={{ height: fillHeight, opacity: fillOpacity }}
          className="absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-primary to-secondary"
        />
      </div>

      {data.map((item, i) => (
        <div key={i} className="relative flex gap-4 pb-11 last:pb-0 md:gap-6">
          <span
            data-timeline-marker
            className="relative z-10 mt-0.5 grid size-4 shrink-0 place-items-center rounded-full border border-border bg-card shadow-[0_0_0_4px_var(--background)]"
          >
            <span className="size-1.5 rounded-full bg-gradient-to-br from-primary to-secondary" />
          </span>

          {/* Stacks under the date on a phone, sits beside it from md up: a
              fixed date column plus body copy is too narrow to read at
              mobile widths. */}
          <div className="flex min-w-0 flex-1 flex-col gap-1.5 md:flex-row md:gap-8">
            <div className="text-[12px] font-semibold tracking-[0.04em] text-secondary uppercase md:w-[8.5rem] md:shrink-0 md:pt-0.5">
              {item.title}
            </div>
            <div className="min-w-0 flex-1">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
