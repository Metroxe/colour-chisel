export type IInput = string | IColourChisel | Array<string | IColourChisel>;

export interface IColourChiselStatic {
	(input?: string): IColourChisel;
	(input?: IColourChisel): IColourChisel;
	(input?: Array<string | IColourChisel>): IColourChisel;
}

export interface IColourChisel {
	// exports
	readonly hex: () => string[];
	readonly rgb: () => string[];
	readonly rgba: () => string[];
	readonly getChildren: () => IColourChisel[];

	// transforms
	readonly addToPath: (input: IInput) => IColourChisel;
	readonly rotate: (range: number) => IColourChisel;
	readonly analogous: (range: number) => IColourChisel;
	readonly compliment: () => IColourChisel;
	readonly scale: (range: number) => IColourChisel;

	// used for checking instance of variable
	readonly discriminator: "isColourChisel";
}