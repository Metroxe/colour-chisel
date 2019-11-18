import {Button, Card, CardBody, CardHeader, CardText, FormGroup, Input, Label, TabPane} from "reactstrap";
import React, {useState} from "react";
import Sandbox from "./Sandbox";
import {
	analogousPath,
	combine2Paths,
	differentConstants, drawAPicture,
	findACompliment,
	makeAPath, makingTheS,
	scaledPath
} from "./Sections/UserTests";
import download from "downloadjs";
import axios from "axios";

const UserTest: React.FC = () => {

	const [submitted, updateSubmitted] = useState(false);
	const [name, updateName] = useState();
	const [programming, updateProgramming] = useState();
	const [uiux, updateUIUX] = useState();
	const [languages, updateLanguages] = useState();
	const [feedback, updateFeedback] = useState();
	const [useful, updateUseful] = useState();
	const [functionality, updateFunctionality] = useState();
	const [test1, updateTest1] = useState();
	const [test2, updateTest2] = useState();
	const [test3, updateTest3] = useState();
	const [test4, updateTest4] = useState();
	const [test5, updateTest5] = useState();
	const [test6, updateTest6] = useState();
	const [test7, updateTest7] = useState();
	const [test8, updateTest8] = useState();

	function createInputOnChange(update: (v: string) => void): (e: any) => void {
		return (e) => {
			update(e.target.value)
		}
	}

	async function anonymousSubmit(): Promise<void> {
		const data = {
			service_id: 'default_service',
			template_id: 'colour_chisel',
			user_id: 'user_1aphRYzSA0xvVbC0Cvqu0',
			template_params: {
				'markdown': generateMarkdown(),
			}
		};

		try {
			updateSubmitted(true);
			await axios.post( 'https://api.emailjs.com/api/v1.0/email/send', data);
		} catch {
			updateSubmitted(false);
		}

	}

	function generateMarkdown(): string {
		let md = "# Colour Chisel User Test\n";
		md += "## User Information\n";
		if (name) { md += "**Name:** " + name + "\n"}
		if (programming) { md += "**Programming Experience:** " + programming + "\n"}
		if (uiux) { md += "**UI/UX Experience:** " + uiux + "\n"}
		if (languages) { md += "**Languages Known:** " + languages + "\n"}
		if (useful) { md += "**Is the language useful?:** " + useful + "\n"}
		if (functionality) { md += "**what further functionality would you like to see?:** " + functionality + "\n"}
		if (feedback) { md += "**Feedback:** " + feedback + "\n"}
		md += "## Tests\n";
		if (test1) {md += test1 + "\n"}
		if (test2) {md += test2 + "\n"}
		if (test3) {md += test3 + "\n"}
		if (test4) {md += test4 + "\n"}
		if (test5) {md += test5 + "\n"}
		if (test6) {md += test6 + "\n"}
		if (test7) {md += test7 + "\n"}
		if (test8) {md += test8 + "\n"}
		return md;
	}

	function downloadButton(): void {
		download(generateMarkdown(), "colour_chisel_user_test.md");
	}

	return (
		<React.Fragment>
			<Card className="my-3">
				<CardHeader>
					User Test Instructions
				</CardHeader>
				<CardBody>
					<CardText>
						The following is a user test to get an understanding on Colour-Chisel and make improvements
						for its next iterations. It would appreciated if you take the following test. It will take
						around 15 minutes to complete. There will be questions and results, the result can then be posted
						as an issue on <a href="https://github.com/Metroxe/colour-chisel/issues/new">Github</a> or anonymously to me at <a href="mailto:chrispow96@gmail.com"> chrispow96@gmail.com</a>.
						To save your results for submission, simply press on the button below to export into markdown,
						this file can be copy and pasted into a Github issue or emailed to me directly. All information here
						is optional. <br/><br/>
						<b>You are allowed to refer to the examples or any other sources on the internet, it is strongly encouraged</b>.
					</CardText>
					<Button color="primary" onClick={downloadButton}>Compile Results</Button>
				</CardBody>
			</Card>

			<Card className="my-3">
				<CardHeader>
					User Information
				</CardHeader>
				<CardBody>
					<CardText>
						The following are a handful or preliminary questions, in order to get a better idea of who you
						are and your experience. All of these are optional, feel free to leave blank if you'd like.
					</CardText>
					<FormGroup>
						<Label for="name">What is your name?</Label>
						<Input type="text" name="name" id="name" placeholder="e.g. Christopher Powroznik" value={name} onChange={createInputOnChange(updateName)}/>
					</FormGroup>
					<FormGroup>
						<Label for="programming">How long have you been programming?</Label>
						<Input type="text" name="programming" id="programming" placeholder="e.g. 10 years" value={programming} onChange={createInputOnChange(updateProgramming)}/>
					</FormGroup>
					<FormGroup>
						<Label for="uiux">Do you have any experience with UI/UX design?</Label>
						<Input type="textarea" name="uiux" id="uiux" placeholder="e.g. Yes, I have developed several apps and made their designs." value={uiux} onChange={createInputOnChange(updateUIUX)}/>
					</FormGroup>
					<FormGroup>
						<Label for="languages">What programming languages are you comfortable using?</Label>
						<Input type="text" name="languages" id="languages" placeholder="e.g. Javascript, Java, C, Python" value={languages} onChange={createInputOnChange(updateLanguages)}/>
					</FormGroup>
				</CardBody>
			</Card>

			<Sandbox {...differentConstants} onChangeMarkdown={updateTest1}/>
			<Sandbox {...findACompliment} onChangeMarkdown={updateTest2}/>
			<Sandbox {...makeAPath} onChangeMarkdown={updateTest3}/>
			<Sandbox {...analogousPath} onChangeMarkdown={updateTest4}/>
			<Sandbox {...scaledPath} onChangeMarkdown={updateTest5}/>
			<Sandbox {...combine2Paths} onChangeMarkdown={updateTest6}/>
			<Sandbox {...makingTheS} onChangeMarkdown={updateTest7}/>
			<Sandbox {...drawAPicture} onChangeMarkdown={updateTest8}/>

			<Card className="my-3">
				<CardHeader>
					Final Remarks
				</CardHeader>
				<CardBody>
					<FormGroup>
						<Label for="useful">Do you find this language useful or not useful? Why?</Label>
						<Input type="textarea" name="useful" id="useful" placeholder="e.g. No, I think its overly complicated to define my colour scheme in a domain specific language and then integrate into my work flow." value={useful} onChange={createInputOnChange(updateUseful)}/>
					</FormGroup>
					<FormGroup>
						<Label for="functionality">What further functionality would you like to see?</Label>
						<Input type="textarea" name="functionality" id="functionality" placeholder="e.g. I would like the ability to have transformations along luminance, not just saturation and hue." value={functionality} onChange={createInputOnChange(updateFunctionality)}/>
					</FormGroup>
					<FormGroup>
						<Label for="feedback">Do you have any additional feedback?</Label>
						<Input type="textarea" name="feedback" id="feedback" placeholder="e.g. I think the importing of constants is overly-complicated, why do I need to wrap it in so many brackets, what is this lisp? Also please use 'color' not 'colour', I'm not Canadian." value={feedback} onChange={createInputOnChange(updateFeedback)}/>
					</FormGroup>
					<Button color="primary" onClick={downloadButton}>Compile Results</Button>
					<Button disabled={submitted} className="ml-2" color="primary" onClick={anonymousSubmit}>Send Results Anonymously</Button>
				</CardBody>
			</Card>
		</React.Fragment>
	)
};

export default UserTest