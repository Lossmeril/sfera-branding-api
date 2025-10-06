// -------------------------
// Helper Functions
// -------------------------

import {
  ElementVariant,
  FILE_VARIANTS,
  ASSET_BASE_URL,
  ElementSet,
  Facility,
  facilities,
  elementSets,
  Element,
} from "./data";

/**
 * Generate all file variants for a given element name.
 */
export function generateVariants(name: string): ElementVariant[] {
  return (
    Object.entries(FILE_VARIANTS) as [
      keyof typeof FILE_VARIANTS,
      { suffix: string; type: string }
    ][]
  ).map(([size, { suffix, type }]) => ({
    size,
    url: `${ASSET_BASE_URL}${name}${suffix}`,
    contentType: type,
  }));
}

/**
 * Expand an element set into a flat list with variant URLs.
 */
export function expandElementSet(set: ElementSet): Element[] {
  // Explicitly named elements
  if (set.elements && set.elements.length > 0) {
    return set.elements.map((el) => ({
      ...el,
      variants: generateVariants(el.name),
    }));
  }

  // Prefix-based sets
  if (set.elementPrefix && set.numberOfElements) {
    return Array.from({ length: set.numberOfElements }, (_, i) => {
      const name = `${set.elementPrefix}${i + 1}`;
      return { id: i + 1, name, variants: generateVariants(name) };
    });
  }

  return [];
}

/**
 * Expand all element sets into a mapping.
 */
export function expandAllElementSets(
  sets: ElementSet[]
): Record<number, Element[]> {
  const expanded: Record<number, Element[]> = {};
  for (const set of sets) {
    expanded[set.id] = expandElementSet(set);
  }
  return expanded;
}

// -------------------------
// Joined View (Facilities + their Element Sets)
// -------------------------

export type FacilityWithElements = Facility & {
  elementSets: ElementSet[];
};

export const facilitiesWithElements: FacilityWithElements[] = facilities.map(
  (facility) => ({
    ...facility,
    elementSets: elementSets.filter((set) => set.facilityId === facility.id),
  })
);
