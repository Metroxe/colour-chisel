import React, {createRef, CSSProperties, useEffect, useLayoutEffect, useState} from "react";
import chroma from "chroma-js"

interface IProps {
	inputs: Array<[number, number, number]>[]
	style?: CSSProperties;
}

const ColourWheel: React.FC<IProps> = ({inputs, style}) => {
	const canvas = createRef<HTMLCanvasElement>();
	useEffect(draw);

	function draw() {
		const current = canvas.current;
		let ctx  = null as any;

		function plot([h, s, l]: [number, number, number]) {

			// coordinate
			console.log(h, s, l);
			const degrees = (h / (Math.PI * 180));
			const theta = (h) * Math.PI/180;
			const maxRadius = (current as any).offsetWidth / 2;
			const r = s * maxRadius;
			const x = r * Math.cos(h) + maxRadius;
			const y = -r * Math.sin(h) + maxRadius;

			// drawing
			ctx.strokeStyle = 'rgb(255, 255, 255)';
			ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
			ctx.lineWidth = '3';
			ctx.beginPath();
			ctx.arc(x - 3, y + 3, 6, 0, Math.PI * 2, true);
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
			// ctx.fillText([h, s, l].toString(), x, y - 12)
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
				inputs.forEach(hArr => hArr.forEach(plot))
			}
		}
	}

	return (
		<canvas ref={canvas} style={{height: 500, width: 500}}/>
	)
};

export default ColourWheel;