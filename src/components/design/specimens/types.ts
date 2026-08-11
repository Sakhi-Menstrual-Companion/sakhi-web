import type { ReactNode } from "react";

/**
 * One catalogued design element.
 *
 * `id` is the stable handle: it is printed on the specimen so it can be quoted
 * back ("build the pricing block with pricing-03") without describing the
 * design in prose. Ids never get reused or renumbered, so a new variant is
 * always appended rather than inserted.
 */
export type Specimen = {
  id: string;
  name: string;
  /** One line on what this variant is for, and when to reach for it. */
  note: string;
  /** Rendered live, so the catalogue can never drift from the real tokens. */
  preview: ReactNode;
  /** Copyable usage. Real component imports where one exists, markup where it does not. */
  code: string;
  /** Set when the preview needs to run edge-to-edge instead of inside a padded stage. */
  bleed?: boolean;
};

export type SpecimenGroup = {
  id: string;
  label: string;
  blurb: string;
  items: Specimen[];
};
