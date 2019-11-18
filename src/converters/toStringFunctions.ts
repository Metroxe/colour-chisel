function hslToString([h, s, l]: [number, number, number]): string {
	return `hsl(${h},${s},${l})`;
}

function rgbToString([r, g, b]: [number, number, number]): string {
	return `rgb(${r},${g},${b})`;
}

export {hslToString, rgbToString};