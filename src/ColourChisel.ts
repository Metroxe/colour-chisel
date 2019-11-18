import {IColourChisel, IInput, IExportOptions} from "./interface";
import compile from "./compiler";
import {determineInput, InputType} from "./converters/determineInput";
import {rgbStringToHSL} from "./converters/rgbToHSL";
import hexToHSL from "./converters/hexToHSL";
import hslToRGB from "./converters/hslToRGB";
import hslToHex from "./converters/hslToHex";
import {hslToString, rgbToString} from "./converters/toStringFunctions";

class ColourChisel implements IColourChisel {

	public static readonly compile = compile;
	public readonly discriminator = "isColourChisel";
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
			case InputType.CODE:
				this.path = ColourChisel.compile(input as string)[0].hsl();
				break;
			case InputType.ARRAY:
				this.path = (input as any[]).map((i: string | [number, number, number] | ColourChisel): [number, number, number] => {
					const type = determineInput(i);
					if ([InputType.ARRAY, InputType.CODE,].includes(type)) {
						throw new Error("Incompatible input in array: " + i);
					}
					return new ColourChisel(i).hsl()[0];
				});
				break;
			default:
				this.path = [];
		}
	}

	public addToPath(input: IInput): ColourChisel {
		const temp = new ColourChisel(input);
		return new ColourChisel([...this.hsl(), ...temp.hsl()]);
	}

	public analogous(range: number = 45): ColourChisel {
		return this.rotate(range);
	}

	public compliment(): ColourChisel {
		return this.rotate(180);
	}

	public hex(): string[] {
		return this.path.map(hslToHex);
	}

	public rgb(): [number, number, number][] {
		return this.path.map(hslToRGB);
	}

	public hsl(): [number, number, number][] {
		// done to make caller safe
		return this.path.map((hsl) => ([...hsl] as [number, number, number]));
	}

	public rotate(range: number): ColourChisel {
		const newPath: [number, number, number][] = this.hsl()
			.map((hsl) => ([hsl[0] + range, hsl[1], hsl[2]]));
		return new ColourChisel(newPath);
	}

	public scale(amount: number): ColourChisel {
		const newPath: [number, number, number][] = this.hsl()
			.map((hsl) => ([hsl[0], hsl[1] * amount, hsl[2]]));
		return new ColourChisel(newPath);
	}

	public clone(): ColourChisel {
		return new ColourChisel(this.hsl());
	}

	public js(options: IExportOptions): string {
		const vals = this.getVals(options);
		const prefix = options.variablePrefix ? options.variablePrefix : "val";
		let file = "// This file was generated using colour-chisel\n";
		file += "// https://github.com/Metroxe/colour-chisel\n\n";
		vals.forEach( (v, i) => file += `export const ${prefix}${i} = "${v}";\n`);
		return file;
	}

	public scss(options: IExportOptions): string {
		const vals = this.getVals(options);
		const prefix = options.variablePrefix ? options.variablePrefix : "val";
		let file = "// This file was generated using colour-chisel\n";
		file += "// https://github.com/Metroxe/colour-chisel\n\n";
		vals.forEach( (v, i) => file += `$${prefix}${i} = ${v};\n`);
		return file;
	}

	private getVals({format, ignoreCurrent, appendedColourChisels}: IExportOptions): string[] {
		let ccs: IColourChisel[] = [];
		if (!ignoreCurrent) {
			ccs = [this];
		}
		if (appendedColourChisels) {
			ccs = [...ccs, ...appendedColourChisels];
		}
		let ret: string[] = [];
		ccs.forEach(cc => {
			switch (format) {
				case "rgb":
					ret = [...ret, ...cc.rgb().map(rgbToString)];
					break;
				case "hsl":
					ret = [...ret, ...cc.rgb().map(hslToString)];
					break;
				default:
					ret = [...ret, ...cc.hex()];
			}
		});
		return ret;
	}
}

export default ColourChisel;