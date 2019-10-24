import ASTNode from "./Node";
import HSL from "./HSL";
import RGB from "./RGB";
import Hex from "./Hex";

class Const extends ASTNode {
	private child: RGB | HSL | Hex;

	parse(): void {
		this.tokenizer.checkNextAndPop("(");
		const starter = this.tokenizer.getNext();
		let child: RGB | HSL | Hex;
		if (starter === "rgb") {
			child = new RGB(this.tokenizer);
		}
		else if (starter === "#") {
			child = new Hex(this.tokenizer);
		}
		else {
			child = new HSL(this.tokenizer);
		}
		child.parse();
		this.child = child;
		this.tokenizer.checkNextAndPop(")");
	}

	typeCheck(): void {
		this.child.typeCheck();
	}

	evaluate(): void {

	}
}

export default Const;