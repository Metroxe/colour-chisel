import React, {createRef, CSSProperties, useEffect, useState} from "react";

interface IProps {
	inputs: Array<[number, number, number]>[]
	style?: CSSProperties;
}

const ColourWheel: React.FC<IProps> = ({inputs, style}) => {

	const [key, updateKey] = useState(Math.random());
	const canvas = createRef<HTMLCanvasElement>();
	const requestRef = React.useRef();

	useEffect(() => {
		// @ts-ignore
		requestRef.current = requestAnimationFrame(draw);
		return () => cancelAnimationFrame(requestRef.current);
	}, [JSON.stringify(inputs)]);

	function draw() {
		const current = canvas.current;
		let ctx  = null as any;
		let lastCoord: [number, number] | undefined;

		function plot([h, s, l]: [number, number, number]) {

			// coordinate
			const theta = (h) * Math.PI/180;
			const maxRadius = (current as any).offsetWidth / 2;
			const r = s * maxRadius;
			const x = r * Math.cos(theta) + maxRadius;
			const y = -r * Math.sin(theta) + maxRadius;

			// drawing
			ctx.strokeStyle = 'rgb(255, 255, 255)';
			ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
			ctx.lineWidth = '3';
			ctx.beginPath();
			ctx.arc(x - 3, y + 3, 6, 0, Math.PI * 2, true);
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
			// draw line
			if (lastCoord) {
				ctx.beginPath();
				ctx.moveTo(x - 3, y + 3);
				ctx.lineTo(lastCoord[0] - 3,lastCoord[1] + 3);
				ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
				ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
				ctx.stroke();
			}
			ctx.fillText([h, s, l].toString(), x, y - 12);
			lastCoord = [x, y]
		}

		if (current) {
			const diameter = current.offsetWidth;
			current.height = diameter;
			current.width = diameter;
			ctx = current.getContext('2d');
			if (ctx) {

				const radius = current.width / 2;
				const toRad = (2 * Math.PI) / 360;
				const step = 1 / radius;

				ctx.clearRect(0, 0, current.width, current.height);

				const cx = radius;
				const cy = radius;

				for(let i = 0; i < 360; i += step) {
					const rad = i * toRad;
					const x = radius * Math.cos(rad),
						y = radius * Math.sin(rad);

					ctx.strokeStyle = 'hsl(' + i + ', 100%, 50%)';

					ctx.beginPath();
					ctx.moveTo(radius, radius);
					ctx.lineTo(cx + x, cy + y);
					ctx.stroke();
				}

				// draw saturation gradient
				const grd = ctx.createRadialGradient(cx,cy,0,cx,cx,radius);
				grd.addColorStop(0,"white");
				grd.addColorStop(1,'rgba(255, 255, 255, 0)');
				ctx.fillStyle = grd;
				//ctx.fillStyle = 'rgb(255, 255, 255)';
				ctx.beginPath();
				ctx.arc(cx, cy, radius, 0, Math.PI * 2, true);
				ctx.closePath();
				ctx.fill();
				inputs.forEach(hArr => {
					lastCoord = undefined;
					hArr.forEach(plot)
				});
			}
		}
	}

	if (!canvas.current) {
		setTimeout(() => {
			draw();
		}, 1000);
	}

	return (
		<canvas ref={canvas} style={{height: 300, width: 300}}/>
	)
};

function isEqual (prev: IProps, newProps: IProps): boolean {
	return JSON.stringify(prev) === JSON.stringify(newProps);
}

// export default React.memo(ColourWheel, isEqual);
export default ColourWheel;