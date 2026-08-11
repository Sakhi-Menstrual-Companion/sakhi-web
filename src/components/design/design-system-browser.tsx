"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { PanelLeftClose, PanelLeftOpen, Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/design/code-block";
import { designGroups, designSpecimenCount } from "@/components/design/registry";
import type { Specimen } from "@/components/design/specimens/types";

/**
 * The catalogue browser: collapsible sidebar, filter, and the specimen list.
 *
 * Written to work in two frames without knowing which it is in. Inside the
 * modal it scrolls in its own container; on the full-page route it scrolls with
 * the document. The difference is `scrollRoot`, which is also what the
 * scroll-spy observes, since an IntersectionObserver watching the viewport
 * would never fire for content inside a scrolling dialog.
 */
export function DesignSystemBrowser({
  scrollRoot,
  className,
}: {
  /** The scrolling ancestor when embedded in a dialog. Omit to use the viewport. */
  scrollRoot?: React.RefObject<HTMLElement | null>;
  className?: string;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(designGroups[0]?.items[0]?.id ?? "");
  const contentRef = useRef<HTMLDivElement>(null);
  /** Only the modal passes a scroll root, so this is also the "am I in a dialog" test. */
  const inDialog = Boolean(scrollRoot);

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return designGroups;
    return designGroups
      .map((g) => ({
        ...g,
        items: g.items.filter(
          (i) =>
            i.id.toLowerCase().includes(q) ||
            i.name.toLowerCase().includes(q) ||
            i.note.toLowerCase().includes(q)
        ),
      }))
      .filter((g) => g.items.length > 0);
  }, [query]);

  const visibleIds = groups.flatMap((g) => g.items.map((i) => i.id)).join("|");

  useEffect(() => {
    const root = scrollRoot?.current ?? null;
    const sections = visibleIds
      .split("|")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const seen = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (seen) setActive(seen.target.id);
      },
      { root, rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [visibleIds, scrollRoot]);

  /** Anchor jumps have to be manual: inside a dialog the browser will not do it. */
  const jumpTo = (id: string) => {
    const el = document.getElementById(id);
    const root = scrollRoot?.current;
    if (!el) return;
    if (root) {
      const top = el.getBoundingClientRect().top - root.getBoundingClientRect().top + root.scrollTop;
      root.scrollTo({ top: top - 16, behavior: "smooth" });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActive(id);
  };

  return (
    <div className={cn("flex min-h-0 w-full gap-8", className)}>
      <aside
        className={cn(
          "shrink-0 transition-[width] duration-200",
          collapsed ? "w-12" : "w-60",
          "hidden md:block"
        )}
      >
        {/* An explicit height, not max-h-full: a sticky box sizes to its own
            content, so without one the nav below simply grows past the fold and
            `overflow-y-auto` never has a constraint to scroll against. The two
            offsets differ because the sidebar sticks to the dialog's own top
            inside the modal, and below the fixed navbar on the full page. */}
        <div
          className={cn(
            "sticky flex flex-col gap-3 pb-4",
            inDialog
              ? "top-0 h-[calc(92vh-8.5rem)]"
              : "top-[calc(var(--nav-clearance)+1.5rem)] h-[calc(100vh-var(--nav-clearance)-4rem)]"
          )}
        >
          <div className={cn("flex items-center gap-2", collapsed && "justify-center")}>
            <button
              type="button"
              onClick={() => setCollapsed((c) => !c)}
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              aria-expanded={!collapsed}
              className="grid size-9 shrink-0 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {collapsed ? (
                <PanelLeftOpen className="size-4.5" aria-hidden="true" />
              ) : (
                <PanelLeftClose className="size-4.5" aria-hidden="true" />
              )}
            </button>
            {!collapsed && (
              <span className="text-[12px] text-muted-foreground">{designSpecimenCount} specimens</span>
            )}
          </div>

          {!collapsed && (
            <>
              <div className="relative">
                <Search
                  className="pointer-events-none absolute top-1/2 left-3 size-3.5 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Filter by id or name"
                  aria-label="Filter specimens"
                  className="w-full rounded-lg border border-border bg-card py-1.5 pr-3 pl-8 text-[12.5px] text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* flex-1 + min-h-0 is what actually makes this scroll: without
                  min-h-0 a flex child refuses to shrink below its content. */}
              <nav
                aria-label="Design system sections"
                className="min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1"
              >
                {groups.map((g) => (
                  <div key={g.id} className="mb-5">
                    <p className="eyebrow mb-2">{g.label}</p>
                    <ul className="list-none space-y-0.5 p-0">
                      {g.items.map((i) => (
                        <li key={i.id}>
                          <button
                            type="button"
                            onClick={() => jumpTo(i.id)}
                            aria-current={active === i.id ? "true" : undefined}
                            className={cn(
                              "block w-full rounded-lg px-2.5 py-1.5 text-left text-[12.5px] transition-colors duration-150",
                              active === i.id
                                ? "bg-accent-faint font-semibold text-secondary"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                          >
                            <span className="font-mono text-[11px] opacity-70">{i.id}</span>{" "}
                            {i.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {groups.length === 0 && (
                  <p className="px-2.5 text-[12.5px] text-muted-foreground">
                    Nothing matches that filter.
                  </p>
                )}
              </nav>
            </>
          )}
        </div>
      </aside>

      <div ref={contentRef} className="min-w-0 flex-1">
        <div className="space-y-16">
          {groups.map((g) => (
            <section key={g.id}>
              <div className="border-b border-border pb-4">
                <h2 className="text-h3 text-foreground">{g.label}</h2>
                <p className="mt-2 max-w-[68ch] text-[14px] leading-relaxed text-muted-foreground">
                  {g.blurb}
                </p>
              </div>
              <div className="mt-8 space-y-12">
                {g.items.map((item) => (
                  <SpecimenCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          ))}
          {groups.length === 0 && (
            <p className="text-[14px] text-muted-foreground">
              No specimen matches &ldquo;{query}&rdquo;.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function SpecimenCard({ item }: { item: Specimen }) {
  return (
    <article id={item.id} className="scroll-mt-4">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <code className="rounded-md bg-accent-faint px-2 py-0.5 font-mono text-[12px] font-semibold text-secondary">
          {item.id}
        </code>
        <h3 className="text-h4 text-foreground">{item.name}</h3>
      </div>
      <p className="mt-1.5 max-w-[68ch] text-[13.5px] leading-relaxed text-muted-foreground">
        {item.note}
      </p>

      <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-background">
        <div className={item.bleed ? "" : "p-6 sm:p-8"}>{item.preview}</div>
      </div>

      <details className="group mt-3">
        <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-[13px] font-semibold text-muted-foreground transition-colors hover:text-secondary">
          <span className="transition-transform duration-200 group-open:rotate-90" aria-hidden="true">
            &rsaquo;
          </span>
          Code
        </summary>
        <CodeBlock className="mt-2.5" code={item.code} />
      </details>
    </article>
  );
}
