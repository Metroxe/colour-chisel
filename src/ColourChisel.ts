import {IColourChisel, IInput} from "./interface";
import compile from "./compiler";
import cloneDeep from "lodash.cloneDeep";
import chroma, {Color} from "chroma-js";
import isColourChisel from "./isColourChisel";

class ColourChisel implements IColourChisel {

	static readonly compile = compile;
	public readonly discriminator: "isColourChisel";
	private path: Color[];

	constructor(input?: IInput) {
		// remove any connection to caller
		const _input = cloneDeep<IInput>(input);

		// passed in undefined
		if (input === undefined) {
			this.path = [];
			return;
		}

		// passed in string
		if (typeof input === "string") {
			if (chroma.valid(input)) {
				this.path = [chroma(_input)];
				return;
			} else {
				this.path = compile(_input).chromaObject();
				return;
			}
		}

		// passed in IColourChisel
		if (isColourChisel(_input)) {
			this.path = _input.chromaObject();
		}

		// passed in Array
		if (Array.isArray(input)) {
			this.path = [];
			input.forEach(v => {
				console.log(v);
				const _temp = new ColourChisel(v);
				this.path = this.path.concat(_temp.chromaObject());
			});
			return;
		}

		throw new Error("invalid input to ColourChisel, must be string | IColourChisel | Array<string | IColourChisel>");
	}

	addToPath(input: IInput): IColourChisel {
		const _temp = new ColourChisel(input);
		this.path = this.path.concat(_temp.chromaObject());
		return undefined;
	}

	analogous(range: number = 45): IColourChisel {
		console.log(range.toString());
		const newPath: string[] = this.path
			.map(c => c.set("hsl.h", range.toString()))
			.map(c => c.hex());
		return new ColourChisel(newPath);
	}

	compliment(): IColourChisel {
		const newPath: string[] = this.path
			.map(c => c.set("hsl.h", "+180"))
			.map(c => c.hex());
		return new ColourChisel(newPath);
	}

	hex(): string[] {
		return this.path.map(c => c.hex());
	}

	rgb(): string[] {
		return this.path
			.map(c => c.rgb())
			.map(([r, g, b]) => `rgb(${r},${g},${b})`);
	}

	rgba(): string[] {
		return this.path
			.map(c => c.rgba())
			.map(([r, g, b, a]) => `rgba(${r},${g},${b},${a})`);
	}

	rotate(range: number): IColourChisel {
		return this.analogous(range);
	}

	scale(range: number): IColourChisel {
		const newPath: string[] = this.path
			.map(c => c.saturate(range))
			.map(c => c.hex());
		return new ColourChisel(newPath);
	}

	chromaObject(): chroma.Color[] {
		return this.hex()
			.map(h => chroma(h));
	}

	clone(): IColourChisel {
		return cloneDeep(this);
	}
}

export default ColourChisel;