import ASTNode from "./Node";

class Scale extends ASTNode {

	private range: string;

	parse(): void {
		this.tokenizer.checkNextAndPop("range");
		this.range = this.tokenizer.getNextAndPop();
	}

	typeCheck(): void {
		if (!isNaN(this.range as any)) {
			throw new Error("range is not a valid number")
		}
	}

	evaluate(): void {

	}

}

export default Scale;