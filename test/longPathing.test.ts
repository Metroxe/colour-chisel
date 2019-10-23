import {expect} from "chai";
import ColourChisel from "../src";

describe("test making a path with exponential amount of paths", () => {
	const hueIncrement = 1;
	const saturationIncrement = 0.1;
	const luminanceIncrement = 0.1;
	const points: [number, number, number][] = [];
	let cc: ColourChisel;

	it("create long array of points", () => {
		let h: number;
		let s: number;
		let l: number;
		// hue
		for (h = 0; h <= 360; h += hueIncrement) {
			// saturation
			for (s = 0; s <= 1; s += saturationIncrement) {
				// luminance
				for (l = 0; l <= 1; l += luminanceIncrement) {
					points.push([h + 0, s + 0, l + 0]) // to stop reference
				}
			}
		}
		expect(points.length).to.be.equal(Math.round((h / hueIncrement) * (s / saturationIncrement) * (l / luminanceIncrement)));
	});

	it("create ColourChisel Object", () => {
		cc = new ColourChisel(points);
	});

	it("check hues match", () => {
		const hsls = cc.hsl();
		hsls.forEach((h, i) => {
			expect(h).to.be.deep.equal(points[i]);
		})
	})
});
