import { Element, Facility } from "./data";

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
