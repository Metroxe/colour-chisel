export type IInput = string | IColourChisel | Array<string | IColourChisel>;
export type IColourChiselStatic = (input: IInput) => IColourChisel;

export interface IColourChisel {
	// import the language directly
	compile: (input: string) => IColourChisel;

	// exports
	hex: () => string[];
	rgb: () => string[];
	rgba: () => string[];
	get: () => IColourChisel[];

	// transforms
	path: (input) => IColourChisel;
	rotate: (range: number) => IColourChisel;
	analogous: (range: number) => IColourChisel;
	compliment: () => IColourChisel;
	scale: (range: number) => IColourChisel;
}