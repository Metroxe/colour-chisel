function rgbToHSL([_r, _g, _b]: [number, number, number]): [number, number, number] {
	const r = 255 / _r;
	const g = 255 / _g;
	const b = 255 / _b;

	// Find greatest and smallest channel values
	let cmin = Math.min(r,g,b),
		cmax = Math.max(r,g,b),
		delta = cmax - cmin,
		h = 0,
		s = 0,
		l = 0;

	if (delta == 0) {
		h = 0;
	}
	else if (cmax == r) {
		h = ((g - b) / delta) % 6;
	}
	else if (cmax == g) {
		h = (b - r) / delta + 2;
	}
	else {
		h = (r - g) / delta + 4;
	}

	h = Math.round(h * 60);

	if (h < 0) {
		h += 360;
	}

	l = (cmax + cmin) / 2;
	s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
	s = +(s * 100).toFixed(1);
	l = +(l * 100).toFixed(1);

	return [h, s, l]
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