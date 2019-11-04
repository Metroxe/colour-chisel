import {Card, CardBody, CardText} from "reactstrap";
import Editor from "react-simple-code-editor";
import React from "react";

const Intro: React.FC = () => {
	return (
		<Card>
			<CardBody>
				<img
					className="w-25"
					src={process.env.PUBLIC_URL + "/colour_chisel_logo.png"}
					alt="colour chisel logo"
				/>
				<CardText>
					Colour Chisel is a language and javascript library for creating shapes and
					performing geometrical operations on a colour wheel. The library can be compiled
					from the domain specific language or used as a recursive programmatic javascript language.
					To install the library simply run...
				</CardText>
				<Card>
					<Editor
						value="npm install --save colour-chisel"
						onValueChange={(c) => {}}
						highlight={code => code}
						padding={10}
						style={{
							fontFamily: 'monospace',
							fontSize: 12,
						}}
					/>
				</Card>
				<CardText>
					To Compile the domain specific language, then simply run...
				</CardText>
				<Card>
					<Editor
						value="ColourChisel.compile(/*code*/)"
						onValueChange={(c) => {}}
						highlight={code => code}
						padding={10}
						style={{
							fontFamily: 'monospace',
							fontSize: 12,
						}}
					/>
				</Card>
			</CardBody>
		</Card>
	)
};

export default Intro;