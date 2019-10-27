// this file hold all the necessary data for testing easily

// Standard 'S'
const s0: [number, number, number] = [90, 0.5, 0.5];
const [h, s, l]: [number, number, number] = s0;
const s1: [number, number, number] = [h + 30, s, l];
const s2: [number, number, number] = [h - 30, s, l];
const s3: [number, number, number] = [h + 145, s, l];
const s4: [number, number, number] = [h + 180, s, l];
const s5: [number, number, number] = [h + 215, s, l];
export const sPath: Array<[number, number, number]> = [s2, s0, s1, s5, s4, s3];

// Rotated 'S' 90 degrees
export const sr90Path = sPath.map(([h, s, l]) => [h + 90, s, l]);

// Rotated 'S' -90 degrees
export const srNeg90Path = sPath.map(([h, s, l]) => [h - 90, s, l]);

// Scaled 'S' 0.5x
export const sScaleHalfPath = sPath.map(([h, s, l]) => [h, s * 0.5, l]);

// Scaled 'S' 2x
export const sScaleDoublePath = sPath.map(([h, s, l]) => [h, s * 2, l]);

// 'S' compliment
export const sCompliment = sPath.map(([h, s, l]) => [h + 180, s, l]);