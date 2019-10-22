enum InputType {
	INCOMPATIBLE,
	RGB,
	HSL,
	HEX,
	COLOUR_CHISEL,
	CODE,
	ARRAY,
}

const hexRegExp = RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$");

// Duplicate checks are here to make reading and adding new checks easier.
function determineInput(input: any): InputType {
	// null or undefined check
	if (input === undefined || input === null) {
		return InputType.INCOMPATIBLE;
	}

	// hex check
	if (typeof input === "string" && hexRegExp.test(input)) {
		return InputType.HEX
	}

	// hsl check
	if (Array.isArray(input) && input.length === 3) {
		return InputType.HSL;
	}

	// rgb check
	if (Array.isArray(input) && input.length === 3) {
		return InputType.RGB
	}

	// colour chisel check
	if (input.discriminator === "isColourChisel") {
		return InputType.COLOUR_CHISEL;
	}

	// code
	if (typeof input === "string") {
		return InputType.CODE;
	}

	// array
	if (Array.isArray(input)) {
		return InputType.ARRAY;
	}

	return InputType.INCOMPATIBLE;
}

export {InputType, determineInput};