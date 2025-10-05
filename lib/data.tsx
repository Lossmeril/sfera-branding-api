// -------------------------
// Configuration
// -------------------------

/**
 * Base URL for serving assets.
 */
export const ASSET_BASE_URL =
  process.env.ASSET_BASE_URL || "https://branding.sferagrafika.eu/assets/";

/**
 * Filenames use suffixes: _low, _med, _high
 */
export const FILE_VARIANTS = {
  low: { suffix: "_low.jpg", type: "image/jpeg" },
  medium: { suffix: "_med.png", type: "image/png" },
  high: { suffix: "_high.png", type: "image/png" },
};

// -------------------------
// Types
// -------------------------

export type Facility = {
  id: number;
  name: string;
  nameEn: string;
  colorBg: string; // primary facility color
};

export type ElementVariant = {
  size: "low" | "medium" | "high";
  url: string;
  contentType: string;
};

export type Element = {
  id: number;
  name: string;
  variants: ElementVariant[];
};

export type ElementSet = {
  id: number;
  name: string;
  facilityId?: number | null;
  elementPrefix?: string;
  numberOfElements?: number;
  elements?: { id: number; name: string }[];
};

export type AccentColor = {
  id: number;
  name: string;
  hex: string;
};

// -------------------------
// Facilities
// -------------------------

export const facilities: Facility[] = [
  {
    id: 0,
    name: "Vzdělávací centrum SFÉRA",
    nameEn: "SFÉRA Educational Center",
    colorBg: "#000000",
  },
  {
    id: 1,
    name: "Dílna Textilu",
    nameEn: "Textiles Workshop",
    colorBg: "#ffcb04",
  },
  {
    id: 2,
    name: "Dílna Grafiky",
    nameEn: "Graphics Workshop",
    colorBg: "#f7941d",
  },
  { id: 3, name: "Dílna Dřeva", nameEn: "Wood Workshop", colorBg: "#7e5228" },
  {
    id: 4,
    name: "Dílna Kovu/Elektra",
    nameEn: "Metal/Electric Workshop",
    colorBg: "#afca0b",
  },
  {
    id: 5,
    name: "Laboratoř IT/VR",
    nameEn: "Computer Science/VR Lab",
    colorBg: "#83d0f5",
  },
  {
    id: 6,
    name: "Laboratoř Fyziky",
    nameEn: "Physics Lab",
    colorBg: "#ec619f",
  },
  {
    id: 7,
    name: "Laboratoř Chemie",
    nameEn: "Chemistry Lab",
    colorBg: "#6859a3",
  },
  {
    id: 8,
    name: "Laboratoř Přírodopisu",
    nameEn: "Biology Lab",
    colorBg: "#004f9f",
  },
  {
    id: 9,
    name: "Sférické Hřiště",
    nameEn: "Spherical Playground",
    colorBg: "#3fa535",
  },
  {
    id: 10,
    name: "Sál Science on a Sphere",
    nameEn: "Science on a Sphere Room",
    colorBg: "#e74011",
  },
  { id: 11, name: "Příměstský Tábor", nameEn: "Day Camp", colorBg: "#f37053" },
];

// -------------------------
// Element Sets
// -------------------------

export const elementSets: ElementSet[] = [
  // Facility-linked sets
  {
    id: 1,
    name: "Textil",
    elementPrefix: "Textil_",
    numberOfElements: 45,
    facilityId: 1,
  },
  {
    id: 2,
    name: "Grafika",
    elementPrefix: "Grafika_",
    numberOfElements: 31,
    facilityId: 2,
  },
  {
    id: 3,
    name: "Dřevo",
    elementPrefix: "Dřevo_",
    numberOfElements: 31,
    facilityId: 3,
  },
  {
    id: 4,
    name: "Kov/Elektra",
    elementPrefix: "Kov Elektro_",
    numberOfElements: 33,
    facilityId: 4,
  },
  {
    id: 5,
    name: "IT/VR",
    elementPrefix: "IT VR_",
    numberOfElements: 35,
    facilityId: 5,
  },
  {
    id: 6,
    name: "Fyzika",
    elementPrefix: "Fyzika_",
    numberOfElements: 30,
    facilityId: 6,
  },
  {
    id: 7,
    name: "Chemie",
    elementPrefix: "Chemie_",
    numberOfElements: 29,
    facilityId: 7,
  },
  {
    id: 8,
    name: "Přírodopis",
    elementPrefix: "Přírodopis_",
    numberOfElements: 36,
    facilityId: 8,
  },
  {
    id: 9,
    name: "Hřiště",
    elementPrefix: "Hřiště_",
    numberOfElements: 30,
    facilityId: 9,
  },
  {
    id: 10,
    name: "Science on a Sphere",
    elementPrefix: "SOS_",
    numberOfElements: 27,
    facilityId: 10,
  },

  // Standalone set: Misc
  {
    id: 11,
    name: "Miscellaneous",
    elementPrefix: "Misc_",
    numberOfElements: 9,
    facilityId: null,
  },

  // Standalone set: Unique (individually named)
  {
    id: 12,
    name: "Unique",
    facilityId: null,
    elements: [
      { id: 1, name: "Pokus_motiv1" },
      { id: 2, name: "Pokus_motiv2" },
      { id: 3, name: "Hra_motiv1" },
      { id: 4, name: "Hra_motiv2" },
      { id: 5, name: "Experiment_special" },
    ],
  },
];

// -------------------------
// Accent Colors (Global Palette)
// -------------------------

export const accentColors: AccentColor[] = [
  { id: 1, name: "Primary Blue", hex: "#0055ff" },
  { id: 2, name: "Secondary Green", hex: "#3fa535" },
  { id: 3, name: "Warm Orange", hex: "#f7941d" },
  { id: 4, name: "Cool Grey", hex: "#7a7a7a" },
];

// -------------------------
// Helper Functions
// -------------------------

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
