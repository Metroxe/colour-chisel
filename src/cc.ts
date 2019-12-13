#!/usr/bin/env node
import {readFileSync, writeFileSync} from "fs";
import ColourChisel from "./ColourChisel";
const [input, format, output] = process.argv.slice(2);

if (!input) {
	throw new Error("No input file");
}

const code = readFileSync(input, 'utf8');
const colourChisel = new ColourChisel(code);
let outputCode: string;

switch (format) {
	case ("js"):
		outputCode = colourChisel.js({});
		break;
	case ("scss"):
		outputCode = colourChisel.scss({});
		break;
	default:
		throw new Error(`Invalid Format: ${format}`);
}

if (output) {
	writeFileSync(output, outputCode);
} else {
	console.log(outputCode);
}
