import { foundationSpecimens } from "@/components/design/specimens/foundations";
import { headerSpecimens } from "@/components/design/specimens/headers";
import {
  featureSpecimens,
  processSpecimens,
  proseSpecimens,
  statSpecimens,
} from "@/components/design/specimens/content";
import {
  ctaSpecimens,
  faqSpecimens,
  pricingSpecimens,
  proofSpecimens,
} from "@/components/design/specimens/conversion";
import { feedbackSpecimens, navSpecimens } from "@/components/design/specimens/navigation";
import { formSpecimens } from "@/components/design/specimens/forms";
import { mediaSpecimens, peopleSpecimens } from "@/components/design/specimens/people";
import type { SpecimenGroup } from "@/components/design/specimens/types";

/**
 * The catalogue, in sidebar and page order.
 *
 * One array feeding both surfaces that show it: the full-page route at
 * /design-system and the modal that opens from the floating button anywhere.
 * Adding a variant means appending to a group's `items` and nothing else.
 */
export const designGroups: SpecimenGroup[] = [
  foundationSpecimens,
  headerSpecimens,
  navSpecimens,
  featureSpecimens,
  processSpecimens,
  statSpecimens,
  proofSpecimens,
  pricingSpecimens,
  faqSpecimens,
  proseSpecimens,
  mediaSpecimens,
  peopleSpecimens,
  formSpecimens,
  ctaSpecimens,
  feedbackSpecimens,
];

export const designSpecimenCount = designGroups.reduce((n, g) => n + g.items.length, 0);
