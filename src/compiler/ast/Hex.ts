import ASTNode from "./Node";

class Hex extends ASTNode {
	private hex: string;

	parse(): void {
		this.tokenizer.checkNextAndPop("#");
		this.hex = this.tokenizer.getNextAndPop();
	}

	evaluate(): void {

	}
}

export default Hex;