import ASTNode from "./Node";
import ColourChisel from "../../ColourChisel";

class Compliment extends ASTNode {

	private param: ColourChisel;

	parse(): void {
		this.tokenizer.checkNextAndPop("compliment");
	}

	typeCheck(): void {
		// nothing to check
	}

	evaluate(): ColourChisel {
		return this.param.compliment();
	}

	setParam(colourChisel: ColourChisel): void {
		this.param = colourChisel;
	}

}

export default Compliment;