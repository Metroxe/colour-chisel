import colourChisel, {IColourChisel} from "../dist";
import {expect} from "chai";
import {sPath, sr90Path, srNeg90Path, sScaleDoublePath, sScaleHalfPath} from "./sData";

describe("test creating paths and transformations", () => {
	let path: IColourChisel;

	it ("create an 'S' path", () => {
		path = colourChisel(sPath);
		const hexPath = path.hex();
		expect(hexPath).to.be.deep.equal(sPath);
	});

	it ("rotate the 'S' +90", () => {
		const hexPath = path.rotate(90).hex();
		expect(hexPath).to.be.deep.equal(sr90Path);
	});

	it ("rotate the 'S' -90", () => {
		const hexPath = path.rotate(-90).hex();
		expect(hexPath).to.be.deep.equal(srNeg90Path);
	});

	it ("scale the 'S' 0.5x", () => {
		const hexPath = path.scale(0.5).hex();
		expect(hexPath).to.be.deep.equal(sScaleHalfPath);
	});

	it ("scale the 'S' 2x", () => {
		const hexPath = path.scale(2).hex();
		expect(hexPath).to.be.deep.equal(sScaleDoublePath);
	});
});