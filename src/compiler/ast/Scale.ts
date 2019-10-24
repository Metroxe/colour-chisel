import ASTNode from "./Node";

class Scale extends ASTNode {

	private range: string;

	parse(): void {
		this.tokenizer.checkNextAndPop("range");
		this.range = this.tokenizer.getNextAndPop();
	}

	evaluate(): void {

	}

}

export default Scale;