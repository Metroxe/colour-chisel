import Tokenizer from "../Tokenizer";

abstract class ASTNode {
	protected tokenizer: Tokenizer;

	constructor(tokenizer: Tokenizer) {
		this.tokenizer = tokenizer;
	}

	abstract parse(): void;
	abstract typeCheck(): void;
	abstract evaluate(): void;

}

export default ASTNode;