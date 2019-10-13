import chroma, {ChromaStatic, Color} from "chroma-js";
import {IColourChisel} from "../interface";
import isColourChisel from "./isColourChisel";

function createChromaObjects(arr: Array<string | IColourChisel>): Color[] {
	let colours: Color[] = [];
	arr.forEach((c) => {
		if ( typeof c === "string" && chroma.valid(c)) {
			colours.push(chroma(c));
			return;
		}

		if (isColourChisel(c)) {
			colours = [...colours, ...createChromaObjects([c])]
		}
	})
}