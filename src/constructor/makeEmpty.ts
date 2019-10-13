import {IColourChisel} from "../interface";
import constructor from "./index";

function makeEmpty(): IColourChisel {
	return {
		hex: () => [],
		rgb: () => [],
		rgba: () => [],
		getChildren: () => [],
		addToPath: constructor,
		rotate: makeEmpty,
		analogous: makeEmpty,
		compliment: makeEmpty,
		scale: makeEmpty,
		discriminator: "isColourChisel",
	}
}