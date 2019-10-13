import {IColourChisel} from "../interface";
import constructor from "./index";
import chroma from "chroma-js";

function makeFromColour(colour: string): IColourChisel {
	return {
		hex: () => [chroma(colour).hex()],
		rgb: () => [chroma(colour).rgb()],
		rgba: () => [chroma(colour).rgba()],
		getChildren: () => [],
		addToPath: constructor,
		rotate: makeEmpty,
		analogous: makeEmpty,
		compliment: makeEmpty,
		scale: makeEmpty,
		discriminator: "isColourChisel",
	}
}

export default makeFromColour;