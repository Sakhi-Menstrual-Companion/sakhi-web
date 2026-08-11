import Link from "next/link";
import SakhiLogo from "@/components/ui/SakhiLogo";
import { Container } from "@/components/ui/section";

const productLinks = [
  { label: "Features", href: "/features" },
  { label: "Vision & Roadmap", href: "/vision" },
  { label: "Download App", href: "https://apps.apple.com/app/id6742219623", external: true },
  { label: "Press Kit", href: "/press" },
];

const companyLinks = [
  { label: "Our Story", href: "/story" },
  { label: "Team", href: "/team" },
  { label: "Press", href: "/press" },
  { label: "Join Us", href: "/contribute" },
];

const connectLinks = [
  { label: "contact@sakhiapp.in", href: "mailto:contact@sakhiapp.in" },
  { label: "Instagram", href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "LinkedIn", href: "#" },
];

/* One treatment for every link in here. Deep Pink on hover, not Primary Pink:
   Primary reads ~3.2:1 on the blush footer and this is 15px text. */
const linkClass =
  "text-[15px] text-muted-foreground no-underline transition-colors duration-(--duration-fast) hover:text-secondary hover:underline underline-offset-[3px]";

function LinkColumn({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <h2 className="eyebrow mb-5 text-foreground">{heading}</h2>
      <ul className="flex list-none flex-col gap-3 p-0">
        {links.map((link) => (
          <li key={link.label}>
            {link.external || link.href.startsWith("mailto:") || link.href === "#" ? (
              <a
                href={link.href}
                className={linkClass}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.label}
              </a>
            ) : (
              <Link href={link.href} className={linkClass}>
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * The footer used to be a client component purely so that twelve links could
 * each carry `onMouseEnter`/`onMouseLeave` handlers that set a colour in JS.
 * That is a CSS hover, so it is one now, and the whole footer renders on the
 * server.
 *
 * Its container was also 1200px wide while every other band on the site is
 * 1120px, so the footer columns sat 40px outside the page's content edge on
 * any wide screen. It shares `Container` now.
 */
export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-blush px-6 pt-20 pb-10 sm:px-8">
      <Container>
        <div className="mb-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="mb-4 inline-flex items-center gap-2 no-underline">
              <SakhiLogo size={24} tone="pink" />
            </Link>
            <p className="max-w-[22ch] text-[15px] leading-relaxed text-muted-foreground">
              A Friend In Every Cycle.
            </p>
          </div>

          <LinkColumn heading="Product" links={productLinks} />
          <LinkColumn heading="Company" links={companyLinks} />
          <LinkColumn heading="Connect" links={connectLinks} />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-7">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Sakhi. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with <span className="text-secondary">love</span> in India
          </p>
        </div>
      </Container>
    </footer>
  );
}
