import ASTNode from "./Node";
import Expression from "./Expression";
import Variable from "./Variable";
import ColourChisel from "../../ColourChisel";

class Program extends ASTNode {

	private children: Array<[Variable | Expression, boolean]> = [];

	parse(): void {
		while (this.tokenizer.remainingTokens() > 0) {
			let starter = this.tokenizer.getNext();
			let isExport = false;
			let child: Variable | Expression;
			if (starter === "export") {
				isExport = true;
				this.tokenizer.pop();
				starter = this.tokenizer.getNext();
			}

			if (starter === "var") {
				child = new Variable(this.tokenizer);
			}
			else {
				child = new Expression(this.tokenizer);
			}

			child.parse();
			this.children.push([child, isExport]);

			this.tokenizer.checkNextAndPop(";");
		}
	}

	typeCheck(): void {
		this.children.forEach(([node]) => node.typeCheck());
	}

	evaluate(): ColourChisel[] {
		const exports: ColourChisel[] = [];
		this.children.forEach(([node, isExport]) => {
			const colourChisel = node.evaluate();
			if (isExport) {
				exports.push(colourChisel);
			}
		});
		return exports;
	}
}

export default Program;