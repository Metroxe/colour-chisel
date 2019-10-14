export type IInput = string | IColourChisel | Array<string | IColourChisel>;

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