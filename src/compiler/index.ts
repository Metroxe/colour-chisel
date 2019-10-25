import {IColourChisel} from "../interface";
import Tokenizer from "./Tokenizer";
import Program from "./ast/Program";

function compile(input: string): IColourChisel[] {
	const tokenizer = new Tokenizer(input);
	const program = new Program(tokenizer);
	program.parse();
	program.typeCheck();
	return program.evaluate();
}

export default compile;