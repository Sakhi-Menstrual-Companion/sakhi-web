"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

/**
 * Aceternity UI's Timeline, reproduced against its documented shape: a `data`
 * array of `{ title, content }`, a sticky left rail carrying each title, and
 * a vertical line on the right whose fill grows with scroll progress through
 * the whole list — read via `useScroll({ target: containerRef })`.
 */
export function Timeline({
  data,
}: {
  data: { title: React.ReactNode; content: React.ReactNode }[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (lineRef.current) setLineHeight(lineRef.current.getBoundingClientRect().height);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, lineHeight]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="relative">
      {data.map((item, i) => (
        <div key={i} className="flex gap-6 pt-10 first:pt-0 md:gap-10">
          <div className="sticky top-[calc(var(--nav-clearance)+1rem)] z-20 flex h-fit max-w-[7rem] shrink-0 flex-col items-start self-start md:max-w-[10rem]">
            <div className="absolute -left-[7px] grid size-3.5 place-items-center rounded-full border border-border bg-card md:-left-[9px] md:size-4">
              <div className="size-1.5 rounded-full bg-gradient-to-br from-primary to-secondary md:size-2" />
            </div>
            <div className="pl-6 text-[13px] font-semibold text-muted-foreground md:pl-8 md:text-[14px]">
              {item.title}
            </div>
          </div>
          <div className="w-full pr-2 pb-14">{item.content}</div>
        </div>
      ))}

      <div
        ref={lineRef}
        style={{ height: lineHeight + "px" }}
        className="absolute top-0 left-1.5 w-[2px] overflow-hidden bg-gradient-to-b from-transparent via-border to-transparent md:left-2"
      >
        <motion.div
          style={{ height: heightTransform, opacity: opacityTransform }}
          className={cn("absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-primary via-secondary to-transparent")}
        />
      </div>
    </div>
  );
}
