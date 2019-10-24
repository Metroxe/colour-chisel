import ASTNode from "./Node";
import Analogous from "./Analogous";
import Compliment from "./Compliment";
import Rotate from "./Rotate";
import Scale from "./Scale";

class Manipulation extends ASTNode {

	private child: Analogous | Compliment | Rotate | Scale;

	parse(): void {
		const starter = this.tokenizer.getNext();
		if (starter === "analogous") {
			this.child = new Analogous(this.tokenizer);
		}
		else if (starter === "compliment") {
			this.child = new Compliment(this.tokenizer);
		}
		else if (starter === "rotate") {
			this.child = new Rotate(this.tokenizer);
		}
		else if (starter === "scale") {
			this.child = new Scale(this.tokenizer);
		}

		if (!this.child) {
			throw new Error(`${starter} is an invalid manipulation command`);
		}

		this.child.parse();
	}

	typeCheck(): void {
		this.child.typeCheck();
	}

	evaluate(): void {

	}
}

export default Manipulation;