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

	evaluate(): void {

	}
}

export default HSL;