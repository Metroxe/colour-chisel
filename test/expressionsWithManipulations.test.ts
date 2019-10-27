import ColourChisel from "../src";
import {expect} from "chai";
import {sCompliment, sPath, sr90Path, srNeg90Path, sScaleDoublePath, sScaleHalfPath} from "./sData";

describe("Expressions with no manipulations", () => {
	const hsl = `hsl(${[0, 0.5, 0.5]})`;

	function cHSL(a: Array<number[]>): string {
		let str = "";
		for (let i = 0; i < a.length; i++) {
			str += `(hsl(${a[i]}))`;
			if (i !== a.length - 1) {
				str += ",";
			}
		}
		return str;
	}

	it("analogous a single", () => {
		const cc = ColourChisel.compile(
			`export (${hsl}) > analogous 90;`
		)[0];
		expect(cc.hsl()).to.deep.equal([[90, 0.5, 0.5]]);
	});

	it("analogous an S", () => {
		const cc = ColourChisel.compile(
			`export [${cHSL(sPath)}] > analogous 90;`
		)[0];
		expect(cc.hsl()).to.deep.equal(sr90Path);
	});

	it("compliment a single", () => {
		const cc = ColourChisel.compile(
			`export (${hsl}) > compliment;`
		)[0];
		expect(cc.hsl()).to.deep.equal([[180, 0.5, 0.5]]);
	});

	it("compliment an S", () => {
		const cc = ColourChisel.compile(
			`export [${cHSL(sPath)}] > compliment;`
		)[0];
		expect(cc.hsl()).to.deep.equal((sCompliment));
	});

	it("rotate a single", () => {
		const cc = ColourChisel.compile(
			`export (${hsl}) > rotate -90;`
		)[0];
		expect(cc.hsl()).to.deep.equal([[-90, 0.5, 0.5]]);
	});

	it("rotate an S", () => {
		const cc = ColourChisel.compile(
			`export [${cHSL(sPath)}] > rotate -90;`
		)[0];
		expect(cc.hsl()).to.deep.equal(srNeg90Path);
	});

	it("scale a single smaller", () => {
		const cc = ColourChisel.compile(
			`export (${hsl}) > scale 0.5;`
		)[0];
		expect(cc.hsl()).to.deep.equal([[0, 0.25, 0.5]]);
	});

	it("scale an S smaller", () => {
		const cc = ColourChisel.compile(
			`export [${cHSL(sPath)}] > scale 0.5;`
		)[0];
		expect(cc.hsl()).to.deep.equal(sScaleHalfPath);
	});

	it("scale a single larger", () => {
		const cc = ColourChisel.compile(
			`export (${hsl}) > scale 2;`
		)[0];
		expect(cc.hsl()).to.deep.equal([[0, 1, 0.5]]);
	});

	it("scale an S larger", () => {
		const cc = ColourChisel.compile(
			`export [${cHSL(sPath)}] > scale 2;`
		)[0];
		expect(cc.hsl()).to.deep.equal(sScaleDoublePath);
	});

});