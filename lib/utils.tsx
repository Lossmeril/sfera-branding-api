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
  FinalElementSet,
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
export function expandElementSet(set: ElementSet): FinalElementSet {
  // Explicitly named elements
  if (set.elements && set.elements.length > 0) {
    return {
      id: set.id,
      elements: set.elements.map((el) => ({
        ...el,
        variants: generateVariants(el.name),
      })),
      facility: set.facilityId
        ? facilities.find((f) => f.id === set.facilityId) || null
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
    return {
      id: set.id,
      name: set.name,
      elementCode: set.elementCode || "",
      elements,
      facility: set.facilityId
        ? facilities.find((f) => f.id === set.facilityId) || null
        : null,
    };
  }

  return {
    id: 0,
    name: "",
    elementCode: "",
    elements: [],
  };
}

export function expandElementSetNoFacilities(set: ElementSet): FinalElementSet {
  // Explicitly named elements
  if (set.elements && set.elements.length > 0) {
    return {
      id: set.id,
      elements: set.elements.map((el) => ({
        ...el,
        variants: generateVariants(el.name),
      })),
      facility: null,
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
    return {
      id: set.id,
      name: set.name,
      elementCode: set.elementCode || "",
      elements,
      facility: null,
    };
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
export function expandAllElementSets(sets: ElementSet[]): FinalElementSet[] {
  const expanded: FinalElementSet[] = [];
  for (const set of sets) {
    expanded.push(expandElementSet(set));
  }
  return expanded;
}

// -------------------------
// Joined View (Facilities + their Element Sets)
// -------------------------

export type FacilityWithElements = Facility & {
  elementSets: FinalElementSet[];
};

export const facilitiesWithElements: FacilityWithElements[] = facilities.map(
  (facility) => ({
    ...facility,
    elementSets: elementSets
      .filter((set) => set.facilityId === facility.id)
      .map((set) => expandElementSetNoFacilities(set)),
  })
);
