import {Card, CardBody, CardHeader, Container} from "reactstrap";
import React from "react";
import ColourWheel from "./ColourWheel";
import chroma from "chroma-js";

// Standard 'S'
// export const s0 = chroma("#c63939").hex();
const radian = Math.PI/180;
const s0 = chroma.hsl(0, 0.5, 0.5).hsl();
const [h, s, l]: [number, number, number] = s0;
const s1: [number, number, number] = [h + 45 * radian, s, l];
const s2: [number, number, number] = [h - 45 * radian, s, l];
const s3: [number, number, number] = [h + 180 * radian, s, l];
const s4: [number, number, number] = [h + 225 * radian, s, l];
const s5: [number, number, number] = [h + 135 * radian, s, l];
const sPath: Array<[number, number, number]> = [s0, s1, s2, s3, s4, s5];

const App: React.FC = () => {
	return (
		<Container className="py-4">
			<Card>
				<CardHeader>Colour-Chisel</CardHeader>
				<CardBody className="justify-content-center align-items-center d-flex">
				<ColourWheel
					inputs={[
						sPath
					]}
				/>
				</CardBody>
			</Card>
		</Container>
	);
};

export default App;
