import ASTNode from "./Node";
import ColourChisel from "../../ColourChisel";

class Rotate extends ASTNode {

	private range: string;
	private param: ColourChisel;

	parse(): void {
		this.tokenizer.checkNextAndPop("analogous");
		this.range = this.tokenizer.getNextAndPop();
	}

	typeCheck(): void {
		if (!isNaN(this.range as any)) {
			throw new Error("range is not a valid number")
		}
	}

	evaluate(): ColourChisel {
		const range = parseInt(this.range);
		return this.param.rotate(range);
	}

	setParam(colourChisel: ColourChisel): void {
		this.param = colourChisel;
	}

}

export default Rotate;