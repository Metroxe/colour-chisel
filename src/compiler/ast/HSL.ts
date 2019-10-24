import ASTNode from "./Node";

class HSL extends ASTNode {
	private h: string;
	private s: string;
	private l: string;

	parse(): void {
		this.tokenizer.checkNextAndPop("hsl");
		this.tokenizer.checkNextAndPop("(");
		this.h = this.tokenizer.getNextAndPop();
		this.tokenizer.checkNextAndPop(",");
		this.s = this.tokenizer.getNextAndPop();
		this.tokenizer.checkNextAndPop(",");
		this.l = this.tokenizer.getNextAndPop();
		this.tokenizer.checkNextAndPop(")");
	}

	typeCheck(): void {
		[this.h, this.s, this.l].forEach(v => {
			if (!isNaN(v as any) && v.toString().indexOf('.') !== -1) {
				throw new Error(`'hsl(${this.h},${this.s},${this.l})' is not a valid HSL.`);
			}​
		})
	}

	evaluate(): void {

	}
}

export default HSL;