export type IInput = string | [number, number, number] | IColourChisel | Array<string | [number, number, number] | IColourChisel>;

export interface IColourChisel {
	readonly discriminator: "isColourChisel"

	// exports
	hex(): string[];
	rgb(): [number, number, number][];
	hsl(): [number, number, number][];

	// transforms
	addToPath(input: IInput): IColourChisel;
	rotate(range: number): IColourChisel;
	analogous(range: number): IColourChisel;
	compliment(): IColourChisel;
	scale(range: number): IColourChisel;

	// utils
	clone(): IColourChisel;
}