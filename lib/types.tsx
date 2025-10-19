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
  elementCode?: string;
  facilityId?: number | null;
  elementPrefix?: string;
  numberOfElements?: number;
  elements?: { id: number; name: string; elementCode: string }[];
  deprecatedElements?: { id: number }[];
};

export type ServedElementSet = {
  id: number;
  name: string;
  elementCode: string;
  facility?: Facility | null;
  elements: Element[];
};

export type ServedFacility = Facility & {
  elementSet: ServedElementSet;
};

export type AccentColor = {
  id: number;
  name: string;
  hex: string;
};
