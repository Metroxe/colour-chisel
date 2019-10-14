import hslToHex from "./hslToHex";
import hexToRGB from "./hexToRGB";

function hslToRGB(hsl: [number, number, number]): [number, number, number] {
	return hexToRGB(hslToHex(hsl));
}

export default hslToRGB;