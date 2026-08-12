import type { Metadata } from "next";

import { DesignSystemBrowser } from "@/components/design/design-system-browser";
import { designGroups, designSpecimenCount } from "@/components/design/registry";

export const metadata: Metadata = {
  title: "Design System - Sakhi",
  description:
    "Every section pattern on the Sakhi site, named, previewed live and copyable. Internal reference.",
  // Internal build tool, not a page for visitors to find in search.
  robots: { index: false, follow: false },
};

export default function DesignSystemPage() {
  return (
    <main className="bg-background-shell pb-28">
      <div className="border-b border-border bg-background px-6 pt-[calc(var(--nav-clearance)+3rem)] pb-12 sm:px-8">
        <div className="mx-auto w-full max-w-[1400px]">
          <span className="eyebrow">Internal reference</span>
          <h1 className="text-h1 mt-4 max-w-[18ch] text-foreground">Sakhi design system</h1>
          <p className="text-lead mt-5 max-w-[52rem] text-muted-foreground">
            Every section pattern on the site, named and previewed live. Each one carries a short id
            like <code className="font-mono text-secondary">header-01</code>, so a whole layout can
            be requested by quoting ids rather than describing the design.
          </p>
          <p className="mt-4 text-[13.5px] text-muted-foreground">
            {designSpecimenCount} specimens across {designGroups.length} groups. The same catalogue
            opens in a modal from the button on any page.
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-6 pt-12 sm:px-8">
        <DesignSystemBrowser />
      </div>
    </main>
  );
}
