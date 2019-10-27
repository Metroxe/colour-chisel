import ASTNode from "./Node";
import ColourChisel from "../../ColourChisel";

class RGB extends ASTNode {
	private r: string;
	private g: string;
	private b: string;

	parse(): void {
		this.tokenizer.checkNextAndPop("rgb");
		this.tokenizer.checkNextAndPop("(");
		this.r = this.tokenizer.getNextAndPop();
		this.tokenizer.checkNextAndPop(",");
		this.g = this.tokenizer.getNextAndPop();
		this.tokenizer.checkNextAndPop(",");
		this.b = this.tokenizer.getNextAndPop();
		this.tokenizer.checkNextAndPop(")");
	}

	typeCheck(): void {
		[this.r, this.g, this.b].forEach(v => {
			if (!isNaN(v as any) && v.toString().indexOf('.') !== -1) {
				throw new Error(`'rgb(${this.r},${this.g},${this.b})' is not a valid RGB.`);
			}​
		})
	}

	evaluate(): ColourChisel {
		return new ColourChisel(`rgb(${this.r},${this.g},${this.b})`);
	}
}

export default RGB;