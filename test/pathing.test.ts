import ColourChisel from "../src";
import {expect} from "chai";
import {sPath, sr90Path, srNeg90Path, sScaleDoublePath, sScaleHalfPath} from "./sData";

describe("test creating paths and transformations", () => {
	let colourChisel: ColourChisel;

	it ("create an 'S' path", () => {
		colourChisel = new ColourChisel(sPath);
		const hexPath = colourChisel.hsl();
		expect(hexPath).to.be.deep.equal(sPath);
	});

	it ("rotate the 'S' +90", () => {
		const hexPath = colourChisel.rotate(90).hsl();
		expect(hexPath).to.be.deep.equal(sr90Path);
	});

	it ("rotate the 'S' -90", () => {
		const hexPath = colourChisel.rotate(-90).hsl();
		expect(hexPath).to.be.deep.equal(srNeg90Path);
	});

	it ("scale the 'S' 0.5x", () => {
		const hexPath = colourChisel.scale(0.5).hsl();
		expect(hexPath).to.be.deep.equal(sScaleHalfPath);
	});

	it ("scale the 'S' 2x", () => {
		const hexPath = colourChisel.scale(2).hsl();
		expect(hexPath).to.be.deep.equal(sScaleDoublePath);
	});
});