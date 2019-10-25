import ASTNode from "./Node";
import ColourChisel from "../../ColourChisel";

class VariableGet extends ASTNode {
	private name: string;

	parse(): void {
		this.name = this.tokenizer.getNextAndPop();
	}

	typeCheck(): void {
		this.tokenizer.existsInSymbolTable(this.name);
	}

	evaluate(): ColourChisel {
		return this.tokenizer.getFromSymbolTable(this.name).clone()
	}
}

export default VariableGet;