// -------------------------
// Helper Functions
// -------------------------

import {
  ServedElementSet,
  ServedFacility,
  ElementVariant,
  ElementSet,
} from "./types";
import { FILE_VARIANTS, ASSET_BASE_URL, facilities, elementSets } from "./data";

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

export function expandElementSet(
  set: ElementSet,
  insertFacilities?: boolean
): ServedElementSet {
  if (set.elements && set.elements.length > 0) {
    return {
      id: set.id,
      elements: set.elements.map((el) => ({
        ...el,
        variants: generateVariants(el.name),
      })),
      facility: insertFacilities
        ? set.facilityId
          ? facilities.find((f) => f.id === set.facilityId) || null
          : null
        : null,
      name: set.name,
      elementCode: set.elementCode || "",
    };
  }

  // Empty sets
  if (
    (!set.elements || set.elements.length === 0) &&
    !set.elementPrefix &&
    !set.numberOfElements
  ) {
    return {
      id: 0,
      name: "",
      elementCode: "",
      elements: [],
    };
  }

  // Prefix-based sets
  if (set.elementPrefix && set.numberOfElements) {
    const elements = Array.from({ length: set.numberOfElements }, (_, i) => {
      const name = `${set.elementPrefix}motiv${i + 1}`;
      return { id: i + 1, name, variants: generateVariants(name) };
    });
    return removeDeprecatedElements(
      {
        id: set.id,
        name: set.name,
        elementCode: set.elementCode || "",
        elements,
        facility: insertFacilities
          ? set.facilityId
            ? facilities.find((f) => f.id === set.facilityId) || null
            : null
          : null,
      },
      set.deprecatedElements || []
    );
  }

  return {
    id: 0,
    name: "",
    elementCode: "",
    elements: [],
  };
}

/**
 * Expand all element sets into a mapping.
 */
export function expandAllElementSets(sets: ElementSet[]): ServedElementSet[] {
  const expanded: ServedElementSet[] = [];
  for (const set of sets) {
    expanded.push(expandElementSet(set, true));
  }
  return expanded;
}

// -------------------------
// Joined View (Facilities + their Element Sets)
// -------------------------

export const facilitiesWithElements: ServedFacility[] = facilities.map(
  (facility) => ({
    ...facility,
    elementSet: elementSets
      .filter((set) => set.facilityId === facility.id)
      .map((set) => expandElementSet(set, false))[0],
  })
);

/**
 * Generate all file variants for a given element name.
 */
export function removeDeprecatedElements(
  set: ServedElementSet,
  deprecatedElements: { id: number }[]
): ServedElementSet {
  return {
    ...set,
    elements:
      set.elements?.filter(
        (el) => !deprecatedElements?.some((d) => d.id === el.id)
      ) || [],
  };
}
