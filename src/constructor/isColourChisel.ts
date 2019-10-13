import {IColourChisel} from "../interface";

function isColourChisel(object: any): object is IColourChisel {
	return object !== undefined &&
		object !== null &&
		typeof object === 'object' &&
		object.discriminator === "isColourChisel"
}

export default isColourChisel;