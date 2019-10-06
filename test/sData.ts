import chroma from "chroma-js";

// this file hold all the necessary data for testing easily

// Standard 'S'
export const s0 = chroma("red").hex();
export const s1 = chroma(s0).set("hsl.h", "-45").hex();
export const s2 = chroma(s1).set("hsl.h", "-45").hex();
export const s3 = chroma(s0).set("hsl.h", "+180").hex();
export const s4 = chroma(s1).set("hsl.h", "+180").hex();
export const s5 = chroma(s2).set("hsl.h", "+180").hex();
export const sPath = [s0, s1, s2, s3, s4, s5];

// Rotated 'S' 90 degrees
export const sr90Path = sPath.map(h => chroma(h).set("hsl.h", "+90").hex());

// Rotated 'S' -90 degrees
export const srNeg90Path = sPath.map(h => chroma(h).set("hsl.h", "-90").hex());

// Scaled 'S' 0.5x
export const sScaleHalfPath = sPath.map(h => chroma(h).set("hsl.s", Math.round(chroma(h).hsl[1] * 0.5)));

// Scaled 'S' 2x
export const sScaleDoublePath = sPath.map(h => chroma(h).set("hsl.s", Math.round(chroma(h).hsl[1] * 2)));