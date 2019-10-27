import ColourChisel from "../src";
import {expect} from "chai";

describe("Expressions with no manipulations", () => {
	const hex = '#ff0000';
	const rgb = 'rgb(255,0,0)';
	const hsl = [0, 1, 0.5];

	it("create an expression from rgb", () => {
		const cc = ColourChisel.compile(
			`export (${rgb});`
		)[0];
		expect(cc.rgb()).to.deep.equal([[255, 0, 0]]);
	});

	it("create an expression from hex", () => {
		const cc = ColourChisel.compile(
			`export (${hex});`
		)[0];
		expect(cc.hex()).to.deep.equal([hex]);
	});

	it("create an expression from hsl", () => {
		const cc = ColourChisel.compile(
			`export (hsl(0,1,0.5));`
		)[0];
		expect(cc.hsl()).to.deep.equal([hsl]);
	});

	it("create an expression from path", () => {
		const cc = ColourChisel.compile(
			`export [(hsl(0,1,0.5)), (hsl(0.1,0.2,0.3))];`
		)[0];
		expect(cc.hsl()).to.deep.equal([hsl, [0.1, 0.2, 0.3]]);
	});

	it("create an expression from variable and export on next line", () => {
		const cc = ColourChisel.compile(`
			var test = (${rgb});
			export test;`
		)[0];
		expect(cc.rgb()).to.deep.equal([[255, 0, 0]]);
	});

	it("create an expression from variable and export in line", () => {
		const cc = ColourChisel.compile(`
			export var test = (${rgb});`
		)[0];
		expect(cc.rgb()).to.deep.equal([[255, 0, 0]]);
	});

	it("multiple exports", () => {
		const cc = ColourChisel.compile(`
			export (${rgb});
			export (${hex});
			export (hsl(0,1,0.5));
			export [(hsl(0,1,0.5)), (hsl(0.1,0.2,0.3))];
			export var testA = (${rgb});
			var testB = (${rgb});
			export testB;`
		);
		expect(cc[0].rgb()).to.deep.equal([[255, 0, 0]]);
		expect(cc[1].hex()).to.deep.equal([hex]);
		expect(cc[2].hsl()).to.deep.equal([hsl]);
		expect(cc[3].hsl()).to.deep.equal([hsl, [0.1, 0.2, 0.3]]);
		expect(cc[4].rgb()).to.deep.equal([[255, 0, 0]]);
		expect(cc[5].rgb()).to.deep.equal([[255, 0, 0]]);
	})
});