import ColourChisel from "../src";
import {expect} from "chai";

describe("test the basic utilities of passing a colour in and exporting to different variations", () => {
	const hex = '#ff0000';
	const rgb = 'rgb(255,0,0)';
	const hsl = [0, 1, 0.5];

	describe("use hex as input", testInput(hex));
	describe("use rgb as input", testInput(rgb));
	describe("use hsl as input", testInput(hsl));

	function testInput(input) {
		return () => {
			const cc = new ColourChisel(input);
			it("output to hex", () => {
				expect(cc.hex()).to.deep.equal([hex]);
			});

			it("output to rgb", () => {
				expect(cc.rgb()).to.deep.equal([[255, 0, 0]]);
			});

			it("output to hsl", () => {
				expect(cc.hsl()).to.deep.equal([hsl]);
			});
		}
	}
});