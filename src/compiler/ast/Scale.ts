import ASTNode from "./Node";
import ColourChisel from "../../ColourChisel";

class Scale extends ASTNode {

	private range: string;
	private param: ColourChisel;

	parse(): void {
		this.tokenizer.checkNextAndPop("scale");
		this.range = this.tokenizer.getNextAndPop();
	}

	typeCheck(): void {
		if (isNaN(this.range as any)) {
			throw new Error("range is not a valid number")
		}
	}

	evaluate(): ColourChisel {
		const range = parseFloat(this.range);
		return this.param.scale(range);
	}

	setParam(colourChisel: ColourChisel): void {
		this.param = colourChisel;
	}

}

export default Scale;