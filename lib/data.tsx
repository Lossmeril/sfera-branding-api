// -------------------------
// Configuration
// -------------------------

import { AccentColor, ElementSet, Facility } from "./types";

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
    elementCode: "T",
  },
  {
    id: 2,
    name: "Grafika",
    elementPrefix: "Grafika_",
    numberOfElements: 31,
    facilityId: 2,
    elementCode: "G",
  },
  {
    id: 3,
    name: "Dřevo",
    elementPrefix: "Dřevo_",
    numberOfElements: 31,
    facilityId: 3,
    elementCode: "D",
  },
  {
    id: 4,
    name: "Kov/Elektro",
    elementPrefix: "Kov Elektro_",
    numberOfElements: 33,
    facilityId: 4,
    elementCode: "K/E",
  },
  {
    id: 5,
    name: "IT/VR",
    elementPrefix: "IT VR_",
    numberOfElements: 35,
    facilityId: 5,
    elementCode: "IT",
    deprecatedElements: [
      { id: 2 },
      { id: 8 },
      { id: 12 },
      { id: 15 },
      { id: 18 },
      { id: 19 },
      { id: 20 },
      { id: 23 },
      { id: 24 },
    ],
  },
  {
    id: 6,
    name: "Fyzika",
    elementPrefix: "Fyzika_",
    numberOfElements: 30,
    facilityId: 6,
    elementCode: "F",
  },
  {
    id: 7,
    name: "Chemie",
    elementPrefix: "Chemie_",
    numberOfElements: 29,
    facilityId: 7,
    elementCode: "CH",
    deprecatedElements: [{ id: 15 }],
  },
  {
    id: 8,
    name: "Přírodopis",
    elementPrefix: "Přírodopis_",
    numberOfElements: 36,
    facilityId: 8,
    elementCode: "P",
  },
  {
    id: 9,
    name: "Hřiště",
    elementPrefix: "Hřiště_",
    numberOfElements: 30,
    facilityId: 9,
    elementCode: "SD",
  },
  {
    id: 10,
    name: "Science on a Sphere",
    elementPrefix: "SOS_",
    numberOfElements: 27,
    facilityId: 10,
    elementCode: "S",
  },

  // Standalone set: Misc
  {
    id: 11,
    name: "Miscellaneous",
    elementPrefix: "Misc_",
    numberOfElements: 9,
    facilityId: null,
    elementCode: "M",
  },

  // Standalone set: Unique
  {
    id: 12,
    name: "Unique",
    facilityId: null,
    elements: [
      { id: 1, name: "Addamsovi_motiv1", elementCode: "RA.1" },
      { id: 2, name: "Tajuplný ostrov_motiv1", elementCode: "TO.1" },
      { id: 3, name: "Tajuplný ostrov_motiv2", elementCode: "TO.2" },
      { id: 4, name: "Tajuplný ostrov_motiv3", elementCode: "TO.3" },
      { id: 5, name: "Tajuplný ostrov_motiv4", elementCode: "TO.4" },
      { id: 6, name: "Vikingové_motiv1", elementCode: "V.1" },
      { id: 7, name: "Vikingové_motiv2", elementCode: "V.2" },
      { id: 8, name: "Vikingové_motiv3", elementCode: "V.3" },
      { id: 9, name: "Vikingové_motiv4", elementCode: "V.4" },
      { id: 10, name: "Sherlock_motiv1", elementCode: "SH.1" },
      { id: 11, name: "Sherlock_motiv2", elementCode: "SH.2" },
      { id: 12, name: "Plachetnice_motiv1", elementCode: "PL.1" },
      { id: 13, name: "Přemyslovci_motiv1", elementCode: "PŘ.1" },
      { id: 14, name: "ŠKODA_motiv1", elementCode: "ŠK.1" },
      { id: 15, name: "Tandem_motiv1", elementCode: "TV.1" },
      { id: 16, name: "Viva la Textilia_motiv1", elementCode: "TF.1" },
      { id: 17, name: "Viva la Textilia_motiv2", elementCode: "TF.2" },
      { id: 18, name: "Viva la Textilia_motiv3", elementCode: "TF.3" },
      { id: 19, name: "Viva la Textilia_motiv4", elementCode: "TF.4" },
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
