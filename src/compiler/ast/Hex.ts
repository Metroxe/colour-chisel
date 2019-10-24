import ASTNode from "./Node";

class Hex extends ASTNode {
	private hex: string;
	private static hexRegExp = RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$");

	parse(): void {
		this.tokenizer.checkNextAndPop("#");
		this.hex = this.tokenizer.getNextAndPop();
	}

	typeCheck(): void {
		Hex.hexRegExp.test(this.hex);
	}

	evaluate(): void {

	}
}

export default Hex;