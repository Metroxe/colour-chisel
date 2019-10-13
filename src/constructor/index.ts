import {IColourChisel, IColourChiselStatic, IInput} from "../interface";
import {cloneDeep} from "lodash.clonedeep";
import compile from "../compiler";
import chroma from "chroma-js";
import isColourChisel from "./isColourChisel";
import makeFromColour from "./makeFromColour";

const constructor: IColourChiselStatic = (input) => {
	// remove any connection to caller
	const _input = cloneDeep<IInput>(input);

	// variables stored from input
	let colourChisel: IColourChisel;

	// passed in undefined
	if (input === undefined) {

	}

	// passed in string
	if (typeof input === "string") {
		if (chroma.valid(input)) {
			colourChisel = makeFromColour(input)
		} else {
			colourChisel = compile(input)
		}
	}

	// passed in IColourChisel
	if (isColourChisel(input)) {
		colourChisel = cloneDeep(_input)
	}

	// passed in Array
	if (Array.isArray(input)) {
		const colourChiselArray = input.map(constructor)

	}

	// no valid input was found
	if (!colourChisel) {
		throw invalidInputError;
	}

	return colourChisel;
};

const invalidInputError = new Error("invalid input to ColourChisel, must be string | IColourChisel | Array<string | IColourChisel>");

export default constructor;