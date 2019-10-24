import {IColourChisel, IInput} from "./interface";
import compile from "./compiler";
import {determineInput, InputType} from "./converters/determineInput";
import {rgbStringToHSL} from "./converters/rgbToHSL";
import hexToHSL from "./converters/hexToHSL";
import hslToRGB from "./converters/hslToRGB";
import hslToHex from "./converters/hslToHex";

class ColourChisel implements IColourChisel {

	public static readonly compile = compile;
	public readonly discriminator: "isColourChisel";
	private readonly path: [number, number, number][]; // hsl[]

	constructor(input?: IInput) {
		switch (determineInput(input)) {
			case InputType.RGB:
				this.path = [rgbStringToHSL(input as string)];
				break;
			case InputType.HSL:
				this.path = [input as [number, number, number]];
				break;
			case InputType.HEX:
				this.path = [hexToHSL(input as string)];
				break;
			case InputType.COLOUR_CHISEL:
				this.path = (input as unknown as ColourChisel).hsl();
				break;
			// case InputType.CODE:
			// 	this.path = ColourChisel.compile(input as string);
			// 	break;
			case InputType.ARRAY:
				this.path = (input as any[]).map((i: string | [number, number, number] | IColourChisel): [number, number, number] => {
					const type = determineInput(i);
					if ([InputType.ARRAY, InputType.CODE, InputType.CODE].includes(type)) {
						throw new Error("Incompatible input in array: " + i);
					}
					return new ColourChisel(i).hsl()[0];
				});
				break;
			default:
				throw new Error("Invalid input of: " + input);
		}
	}

	addToPath(input: IInput): IColourChisel {
		const temp = new ColourChisel(input);
		return new ColourChisel([...this.hsl(), ...temp.hsl()]);
	}

	analogous(range: number = 45): IColourChisel {
		return this.rotate(range);
	}

	compliment(): IColourChisel {
		return this.rotate(180);
	}

	hex(): string[] {
		return this.path.map(hslToHex);
	}

	rgb(): [number, number, number][] {
		return this.path.map(hslToRGB);
	}

	hsl(): [number, number, number][] {
		// done to make caller safe
		return this.path.map((hsl) => ([...hsl] as [number, number, number]));
	}

	rotate(range: number): IColourChisel {
		const newPath: [number, number, number][] = this.hsl()
			.map((hsl) => ([hsl[0] + range, hsl[1], hsl[2]]));
		return new ColourChisel(newPath);
	}

	scale(amount: number): IColourChisel {
		const newPath: [number, number, number][] = this.hsl()
			.map((hsl) => ([hsl[0], hsl[1] * amount, hsl[2]]));
		return new ColourChisel(newPath);
	}

	clone(): IColourChisel {
		return new ColourChisel(this.hsl());
	}
}

export default ColourChisel;