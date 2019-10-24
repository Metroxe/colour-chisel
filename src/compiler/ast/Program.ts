import ASTNode from "./Node";
import Expression from "./Expression";
import Variable from "./Variable";

class Program extends ASTNode {

	private children: Array<[ASTNode, boolean]> = [];

	parse(): void {
		while (this.tokenizer.remainingTokens() > 0) {
			let starter = this.tokenizer.getNext();
			let isExport = false;
			let child: ASTNode;
			if (starter === "export") {
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

	evaluate(): void {

	}
}

export default Program;