function hslToHex([_h, _s, _l]: [number, number, number]): string {
	const h = _h / 360;
	const s = _s;
	const l = _l;
	let r, g, b;
	if (s === 0) {
		r = g = b = l; // achromatic
	} else {
		const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;
		r = hueToRGB(p, q, h + 1 / 3);
		g = hueToRGB(p, q, h);
		b = hueToRGB(p, q, h - 1 / 3);
	}

	return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function toHex(x: number): string {
	const hex = Math.round(x * 255).toString(16);
	return hex.length === 1 ? '0' + hex : hex;
}

function hueToRGB(p, q, t): number {
	if (t < 0) t += 1;
	if (t > 1) t -= 1;
	if (t < 1 / 6) return p + (q - p) * 6 * t;
	if (t < 1 / 2) return q;
	if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	return p;
}

export default hslToHex;