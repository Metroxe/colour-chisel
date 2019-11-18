import {Alert, Button, Card, CardBody, CardHeader, CardText, Col, Row} from "reactstrap";
import React, {useEffect, useState} from "react";
import Editor from 'react-simple-code-editor';
import ColourChisel from "colour-chisel";
import ColourWheel from "./ColourWheel";
import download from "downloadjs";

export interface ISandboxProps {
	title?: string,
	child?: JSX.Element,
	description?: string,
	defaultCode?: string,
	onChangeMarkdown?: (md: string) => void,
}

const Sandbox: React.FC<ISandboxProps> = ({title, description, defaultCode, child, onChangeMarkdown}) => {
	const [code, updateCode] = useState("");
	const [hsls, updateHSLs] = useState<Array<[number, number, number]>[]>([]);
	const [error, updateError] = useState<string>();

	useEffect(() => {
		if (defaultCode) {
			onChange(defaultCode)
		}
		// eslint-disable-next-line
	}, [defaultCode]);

	useEffect(() => {
		let md = "";
		if (title) {md += `### ${title}\n`}
		if (description) {md += `${description}\n`}
		md += "```\n" + (code || "not attempted.") + "\n```\n";
		if (error) {md += "**" + error + "**\n"}
		if (onChangeMarkdown) { onChangeMarkdown(md) }
	}, [code, error, title, description]);

	function onChange(c: string): void {
		updateCode(c);
		try {
			const ccs: ColourChisel[] = ColourChisel.compile(c);
			updateError(undefined);
			updateHSLs(ccs.map(cc => cc.hsl()));
		} catch (err) {
			updateError(err.message);
			updateHSLs([]);
		}
	}

	function exportToJS(): void {
		const ccs: ColourChisel[] = ColourChisel.compile(code);
		const temp = new ColourChisel();
		const file = temp.js({
			appendedColourChisels: ccs,
			ignoreCurrent: true,
		});
		download(file, title ? title + ".js" : "colourChiselExport.js");
	}

	function exportToSCSS(): void {
		const ccs: ColourChisel[] = ColourChisel.compile(code);
		const temp = new ColourChisel();
		const file = temp.scss({
			appendedColourChisels: ccs,
			ignoreCurrent: true,
		});
		download(file, title ? title + ".scss" : "colourChiselExport.scss");
	}

	return (
		<Card className="my-3">
			{title && <CardHeader>{title}</CardHeader>}
			<CardBody>
				{description && <CardText>{description}</CardText>}
				{child && child}
				<Row>
					<Col className="my-3 d-flex justify-content-center" md={6} sm={12}>
						<ColourWheel
							inputs={hsls}
						/>
					</Col>

					<Col className="my-3" md={6} sm={12}>
						<Card>
							<Editor
								value={code}
								onValueChange={onChange}
								highlight={code => code}
								padding={10}
								style={{
									fontFamily: 'monospace',
									fontSize: 12,
								}}
							/>
						</Card>

						<Button disabled={error !== undefined && error !== null} className="mt-4" color="primary" onClick={exportToJS}>Export to JS</Button>
						<Button disabled={error !== undefined && error !== null} className="mt-4 ml-2" color="primary" onClick={exportToSCSS}>Export to SCSS</Button>
					</Col>

					{error &&
						<Col className="my-3" md={12}>
							<Alert color="danger">
								{error}
							</Alert>
						</Col>
					}
				</Row>
			</CardBody>
		</Card>
	)
};

export default Sandbox;