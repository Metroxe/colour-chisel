import ASTNode from "./Node";

class VariableGet extends ASTNode {
	private name: string;

	parse(): void {
		this.name = this.tokenizer.getNextAndPop();
	}

	typeCheck(): void {
		this.tokenizer.existsInSymbolTable(this.name);
	}

	evaluate(): void {

	}
}

export default VariableGet;