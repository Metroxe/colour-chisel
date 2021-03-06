import ASTNode from "./Node";
import Const from "./Const";
import VariableGet from "./VariableGet";
import Path from "./Path";
import Manipulation from "./Manipulation";
import ColourChisel from "../../ColourChisel";

class Expression extends ASTNode {
	private starter: Const | Path | VariableGet;
	private manipulations: Manipulation[] = [];

	parse(): void {
		const starter = this.tokenizer.getNext();
		if (starter === "(") {
			this.starter = new Const(this.tokenizer);
		}
		else if (starter === "[") {
			this.starter = new Path(this.tokenizer);
		} else {
			this.starter = new VariableGet(this.tokenizer);
		}

		this.starter.parse();

		let next = this.tokenizer.getNext();
		while (next === ">") {
			this.tokenizer.pop();
			const manipulation = new Manipulation(this.tokenizer);
			manipulation.parse();
			this.manipulations.push(manipulation);
			next = this.tokenizer.getNext();
		}
	}

	typeCheck(): void {
		this.starter.typeCheck();
		this.manipulations.forEach(m => m.typeCheck());
	}

	evaluate(): ColourChisel {
		let colourChisel: ColourChisel = this.starter.evaluate();
		this.manipulations.forEach(m => {
			m.setParam(colourChisel);
			colourChisel = m.evaluate();
		});
		return colourChisel;
	};
}

export default Expression;