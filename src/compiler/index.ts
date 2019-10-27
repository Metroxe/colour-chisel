import Tokenizer from "./Tokenizer";
import Program from "./ast/Program";
import ColourChisel from "../ColourChisel";

function compile(input: string): ColourChisel[] {
	const tokenizer = new Tokenizer(input);
	const program = new Program(tokenizer);
	program.parse();
	program.typeCheck();
	return program.evaluate();
}

export default compile;