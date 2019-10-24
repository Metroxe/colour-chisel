import ASTNode from "./Node";

class Compliment extends ASTNode {

	parse(): void {
		this.tokenizer.checkNextAndPop("compliment");
	}

	evaluate(): void {

	}

}

export default Compliment;