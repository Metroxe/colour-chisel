import ASTNode from "./Node";
import Expression from "./Expression";
import ColourChisel from "../../ColourChisel";

class Path extends ASTNode {
	public expressions: Expression[] = [];

	parse(): void {
		this.tokenizer.checkNextAndPop("[");
		let first = true;
		let next = this.tokenizer.getNext();
		while (next === "," || first === true) {
			const expression = new Expression(this.tokenizer);
			expression.parse();
			this.expressions.push(expression);
			next = this.tokenizer.getNextAndPop();
			first = false;
		}
		if (next !== "]") {
			throw new Error("Invalid closing of path.");
		}
	}

	typeCheck(): void {
		this.expressions.forEach(e => e.typeCheck());
	}

	evaluate(): ColourChisel {
		return new ColourChisel(this.expressions.map(e => e.evaluate()));
	}
}

export default Path;