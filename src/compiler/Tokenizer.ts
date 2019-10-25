import literals from "./literals";
import ASTNode from "./ast/Node";
import ColourChisel from "../ColourChisel";

class Tokenizer {

	private static sep = "![#_SEP_#]!";
	private static doubleSep = Tokenizer.sep + Tokenizer.sep;
	private readonly code: string;
	private tokens: string[];
	private index = 0;
	private symbolTable: {[key: string]: ColourChisel | null} = {};

	constructor(code: string) {
		this.code = code;
		this.tokenize();
	}

	private tokenize(): void {
		let code = this.code;

		// remove new lines
		code = code.replace("\n", Tokenizer.sep);

		// replace spaces
		code = code.replace(" ", Tokenizer.sep);

		// surround literals
		literals.forEach(l => {
			code = code.replace(l, Tokenizer.sep+l+Tokenizer.sep);
		});

		// remove doubles seps
		while(code.includes(Tokenizer.doubleSep)) {
			code = code.replace(Tokenizer.doubleSep, Tokenizer.sep);
		}

		// split on sep
		this.tokens = code.split(Tokenizer.sep);
	}

	public pop(): void {
		this.index++;
	}

	public getNext(): string {
		if (this.index + 1 > this.tokens.length - 1) {
			return undefined;
		}
		return this.tokens[this.index + 1];
	}

	public checkNext(checkVal: string): void {
		if (checkVal !== this.getNext()) {
			throw new Error(`'${checkVal}' is not a valid token for this expression.`)
		}
	}

	public getNextAndPop(): string {
		const val = this.getNext();
		this.pop();
		return val;
	}

	public checkNextAndPop(checkVal: string): void {
		const val = this.checkNext(checkVal);
		this.pop();
		return val;
	}

	public declareToSymbolTable(key: string,): void {
		this.symbolTable[key] = null;
	}

	public defineInSymbolTable(key: string, node: ColourChisel): void {
		this.existsInSymbolTable(key);
		this.symbolTable[key] = node;
	}

	public existsInSymbolTable(key: string): void {
		if (this.symbolTable[key] === undefined) {
			throw new Error(`'${key}' does not exist in symbolTable.`);
		}
	}

	public getFromSymbolTable(key: string): ColourChisel {
		this.existsInSymbolTable(key);
		return this.symbolTable[key];
	}

	public remainingTokens(): number {
		return this.tokens.length - 1 - this.index;
	}
}

export default Tokenizer;