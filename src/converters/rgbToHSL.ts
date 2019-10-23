function rgbToHSL([_r, _g, _b]: [number, number, number]): [number, number, number] {
	let r: number = _r;
	let g: number = _g;
	let b: number = _b;
	r /= 255;
	g /= 255;
	b /= 255;

	var max = Math.max(r, g, b), min = Math.min(r, g, b);
	var h, s, l = (max + min) / 2;

	if (max == min) {
		h = s = 0; // achromatic
	} else {
		var d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

		switch (max) {
			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
			case g: h = (b - r) / d + 2; break;
			case b: h = (r - g) / d + 4; break;
		}

		h /= 6;
	}

	return [ h, s, l ];
}

function rgbStringToHSL(_rgb: string): [number, number, number] {
	let sep = _rgb.indexOf(",") > -1 ? "," : " ";
	const str = _rgb.substr(4).split(")")[0].split(sep);
	const rgb: [number, number, number] = [undefined, undefined, undefined];

	for (let s in str) {
		let r = str[s];
		if (r.indexOf("%") > -1) {
			rgb[s] = Math.round(parseInt(r.substr(0, r.length - 1)) / 100 * 255);
		}
	}

	const r = rgb[0] / 255,
		g = rgb[1] / 255,
		b = rgb[2] / 255;

	return rgbToHSL([r, g, b]);
}

export default rgbToHSL;
export {rgbStringToHSL};