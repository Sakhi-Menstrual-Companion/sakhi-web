"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * A copyable snippet. Deliberately not syntax-highlighted: adding a highlighter
 * would pull a tokenizer into the bundle for a page whose whole job is to be
 * read and copied, and the monospace-on-ink treatment is legible without it.
 */
export function CodeBlock({ code, className }: { code: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard is blocked without a secure context or permission. The code
      // is selectable on the page either way, so there is nothing to recover.
    }
  };

  return (
    <div className={cn("group relative", className)}>
      <pre className="overflow-x-auto rounded-xl bg-ink px-4 py-3.5 text-[12.5px] leading-relaxed text-white/90">
        <code className="font-mono">{code}</code>
      </pre>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Copied" : "Copy code"}
        className="absolute top-2.5 right-2.5 grid size-8 place-items-center rounded-lg bg-white/10 text-white/70 opacity-0 transition-[opacity,background-color] duration-200 group-hover:opacity-100 hover:bg-white/20 hover:text-white focus-visible:opacity-100"
      >
        {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
      </button>
    </div>
  );
}
