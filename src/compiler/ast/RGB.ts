import ASTNode from "./Node";

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

	evaluate(): void {

	}
}

export default RGB;