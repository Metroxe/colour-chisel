import ASTNode from "./Node";

class VariableGet extends ASTNode {
	private name: string;

	parse(): void {
		this.name = this.tokenizer.getNextAndPop();
	}

	evaluate(): void {

	}
}

export default VariableGet;