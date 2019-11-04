import {Alert, Card, CardBody, CardHeader, CardText, Col, Row} from "reactstrap";
import React, {useEffect, useState} from "react";
import Editor from 'react-simple-code-editor';
import ColourChisel from "colour-chisel";
import ColourWheel from "./ColourWheel";

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