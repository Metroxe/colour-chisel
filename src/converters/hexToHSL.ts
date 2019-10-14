import rgbToHSL from "./rgbToHSL";
import hexToRGB from "./hexToRGB";

function hexToHSL(input: string): [number, number, number] {
	return rgbToHSL(hexToRGB(input))
}

export default hexToHSL;