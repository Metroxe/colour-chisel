import colourChisel from "../dist";
import {expect} from "chai";

describe("test the basic utilities of passing a colour in and exporting to different variations", () => {
	const hex = '#646464';
	const rgb = 'rgb(100,100,100)';
	const rgba = 'rgba(100,100,100,1)';

	describe("use hex as input", testInput(hex));
	describe("use rgb as input", testInput(hex));
	describe("use rgba as input", testInput(hex));

	function testInput(input: string) {
		return () => {
			const cc = colourChisel(input);
			it("output to hex", () => {
				expect(cc.hex()).to.be.equal(hex);
			});

			it("output to rgb", () => {
				expect(cc.rgb()).to.be.equal(rgb);
			});

			it("output to rgba", () => {
				expect(cc.rgba()).to.be.equal(rgba)
			});
		}
	}
});