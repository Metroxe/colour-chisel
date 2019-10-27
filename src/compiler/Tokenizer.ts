import literals from "./literals";
import ColourChisel from "../ColourChisel";

class Tokenizer {

	private static sep = "_";
	private static doubleSep = Tokenizer.sep + Tokenizer.sep;
	private readonly code: string;
	private tokens: string[];
	private index = -1;
	private symbolTable: {[key: string]: ColourChisel | null} = {};

	constructor(code: string) {
		this.code = code;
		this.tokenize();
	}

	private tokenize(): void {
		let code = this.code;

		// remove new lines
		code = code.replace(new RegExp("\n", "g"), Tokenizer.sep);

		// replace spaces
		code = code.replace(new RegExp(" ", "g"), Tokenizer.sep);

		// replace tabs
		code = code.replace(new RegExp("\t", "g"), Tokenizer.sep);

		// surround literals
		literals.forEach(([regex, literal]) => {
			code = code.replace(regex, Tokenizer.sep+literal+Tokenizer.sep);
		});

		// remove doubles seps
		while (code.includes(Tokenizer.doubleSep)) {
			code = code.replace(new RegExp(Tokenizer.doubleSep, "g"), Tokenizer.sep);
		}

		// split on sep
		this.tokens = code.split(Tokenizer.sep);
		this.tokens = this.tokens.filter(s => s.length > 0);
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
			throw new Error(`'${this.getNext()}' is not a valid token for this expression. Should be '${checkVal}'.`)
		}
	}

	public getNextAndPop(): string {
		const val = this.getNext();
		this.pop();
		return val;
	}

	public checkNextAndPop(checkVal: string): void {
		this.checkNext(checkVal);
		this.pop();
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