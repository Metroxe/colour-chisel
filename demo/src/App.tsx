import {Card, CardBody, CardHeader, Container} from "reactstrap";
import React from "react";
import ColourWheel from "./ColourWheel";

// Standard 'S'
// export const s0 = chroma("#c63939").hex();
const radian = Math.PI/180;
const s0: [number, number, number] = [radian * 90, 0.5, 0.5];
const [h, s, l]: [number, number, number] = s0;
const s1: [number, number, number] = [h + 30 * radian, s, l];
const s2: [number, number, number] = [h - 30 * radian, s, l];
const s3: [number, number, number] = [h + 145 * radian, s, l];
const s4: [number, number, number] = [h + 180 * radian, s, l];
const s5: [number, number, number] = [h + 215 * radian, s, l];
const sPath: Array<[number, number, number]> = [s2, s0, s1, s5, s4, s3];
const sPath2: Array<[number, number, number]> = sPath.map(([h, s, l]) => [h - radian * 90, s, l]);

const App: React.FC = () => {
	return (
		<Container className="py-4">
			<Card>
				<CardHeader>Colour-Chisel</CardHeader>
				<CardBody className="justify-content-center align-items-center d-flex">
				<ColourWheel
					inputs={[
						sPath,
						sPath2,
					]}
				/>
				</CardBody>
			</Card>
		</Container>
	);
};

export default App;
