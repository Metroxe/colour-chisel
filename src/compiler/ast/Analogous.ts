import ASTNode from "./Node";

class Analogous extends ASTNode {

	private range: string;

	parse(): void {
		this.tokenizer.checkNextAndPop("analogous");
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

export default Analogous;