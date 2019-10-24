import ASTNode from "./Node";

class Compliment extends ASTNode {

	parse(): void {
		this.tokenizer.checkNextAndPop("compliment");
	}

	typeCheck(): void {
		// nothing to check
	}

	evaluate(): void {

	}

}

export default Compliment;