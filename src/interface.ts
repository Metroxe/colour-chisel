import ColourChisel from "./ColourChisel";

export type IInput = string | [number, number, number] | IColourChisel | Array<string | [number, number, number] | IColourChisel>;

export interface IColourChisel {
	readonly discriminator: "isColourChisel"

	// exports
	hex(): string[];
	rgb(): [number, number, number][];
	hsl(): [number, number, number][];
	js(options: IExportOptions): string;
	scss(options: IExportOptions): string;

	// transforms
	addToPath(input: IInput): IColourChisel;
	rotate(range: number): IColourChisel;
	analogous(range: number): IColourChisel;
	compliment(): IColourChisel;
	scale(range: number): IColourChisel;

	// utils
	clone(): IColourChisel;
}

export interface IExportOptions {
	appendedColourChisels?: ColourChisel[];
	ignoreCurrent?: boolean;
	format?: "hex" | "rgb" | "hsl" | "colourchisel" // defaults to rgb
	variablePrefix?: string
}