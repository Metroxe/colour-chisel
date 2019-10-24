import ASTNode from "./Node";
import Const from "./Const";
import Path from "./Path";
import Expression from "./Expression";

class Variable extends ASTNode {
	private name: string;
	private starter: Expression | Path | Const;

	parse(): void {
		this.tokenizer.checkNextAndPop("var");
		this.name = this.tokenizer.getNextAndPop();
		this.tokenizer.checkNextAndPop("=");
		const starter = this.tokenizer.getNext();
		if (starter === "(") {
			this.starter = new Const(this.tokenizer);
		}
		else if (starter === "[") {
			this.starter = new Path(this.tokenizer);
		} else {
			this.starter = new Expression(this.tokenizer);
		}
		this.starter.parse();
	}

	evaluate(): void {

	}
}

export default Variable;