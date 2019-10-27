import {ISandboxProps} from "../Sandbox";

export const sandBox: ISandboxProps = {
	title: "Sandbox",
	description: "Feel free to experiment with the language in the editor."
};

export const definingConstants: ISandboxProps = {
	title: "Defining Constants",
	description: "In Colour Chisel there always needs to be a starting point. You cannot perform an operation or make a path without first giving a colour. In Colour Chisel there are three types of constants: RGB, HSL and Hex. These can be passed into 'expressions' to create points on the colour wheel. In Colour Chisel, you will not see an output unless you specify you want to export.",
	defaultCode: "export (rgb(100, 50, 50));\n" +
		"export (hsl(50, 0.5, 0.5));\n" +
		"export (#FFFFFF);"
};

export const variables: ISandboxProps = {
	title: "Variables",
	description: "Variables can also be used to save any expression, constant or path. variables make it easier to use longer manipulations, or make a longer path more readable. Variables can also be exported.",
	defaultCode: "var A = (rgb(100, 50, 50));\n" +
		"export A;"
};

export const paths: ISandboxProps = {
	title: "Paths",
	description: "Paths are how shapes are formed and are a major building block of defining a colour scheme, paths can be used in any expression as with constants and variables. Paths can also be exported.",
	defaultCode:
		"export [\n" +
		"	(hsl(60, 0.5, 0.5)),\n" +
		"	(hsl(90, 0.5, 0.5)),\n" +
		"	(hsl(120, 0.5, 0.5)),\n" +
		"	(hsl(300, 0.5, 0.5)),\n" +
		"	(hsl(270, 0.5, 0.5)),\n" +
		"	(hsl(240, 0.5, 0.5))\n" +
		"];"
};

export const rotationAndAnalogous: ISandboxProps = {
	title: "Rotation & Analogous",
	description: "Manipulations can be used to transform any point or path into another positions or shape, without losing the relation between the path. The most basic type of manipulation is a rotation, or simply finding the analogous colours to a point/path. You can specify a rotation command or an analogous command to perform an operation with a passed in range.",
	defaultCode:
		"var sPath = [\n" +
		"	(hsl(60, 0.5, 0.5)),\n" +
		"	(hsl(90, 0.5, 0.5)),\n" +
		"	(hsl(120, 0.5, 0.5)),\n" +
		"	(hsl(300, 0.5, 0.5)),\n" +
		"	(hsl(270, 0.5, 0.5)),\n" +
		"	(hsl(240, 0.5, 0.5))\n" +
		"];\n" +
		"export sPath > rotate 45;\n" +
		"export sPath > analogous -45;"
};

export const compliments: ISandboxProps = {
	title: "Compliment",
	description: "A compliment is flipping the side of the colour wheel that you are on, this tends to create very favourable colours that look well and contrast with each other.",
	defaultCode:
		"export var primary = (hsl(50, 0.5, 0.5));\n" +
		"export primary > compliment;"
};

export const scale: ISandboxProps = {
	title: "Scale",
	description: "Scale allows adjusting the saturation of a colour. This is equivalent to moving inward and outward from the center of the colour wheel.",
	defaultCode:
		"var diamond = [\n" +
		"	(hsl(0, 0.5, 0.5)),\n" +
		"	(hsl(90, 0.5, 0.5)),\n" +
		"	(hsl(180, 0.5, 0.5)),\n" +
		"	(hsl(270, 0.5, 0.5))\n" +
		"];\n" +
		"export diamond;\n" +
		"export diamond > scale 0.5;\n" +
		"export diamond > scale 1.5;"
};

export const chaining: ISandboxProps = {
	title: "Chaining",
	description: "Multiple manipulations can be chained in a single command.",
	defaultCode:
		"var sPath = [\n" +
		"	(hsl(60, 0.5, 0.5)),\n" +
		"	(hsl(90, 0.5, 0.5)),\n" +
		"	(hsl(120, 0.5, 0.5)),\n" +
		"	(hsl(300, 0.5, 0.5)),\n" +
		"	(hsl(270, 0.5, 0.5)),\n" +
		"	(hsl(240, 0.5, 0.5))\n" +
		"];\n" +
		"export sPath > rotate 45 > compliment > scale 1.5 > analogous -45;"
};

export const inlineRecursion: ISandboxProps = {
	title: "Inline Recursion",
	description: "At any point where a variable, constant or path can be inputed you can also create an expression and recurse down a series of commands.",
	defaultCode:
		"var a = (hsl(60, 0.5, 0.5));\n"+
		"export [a > compliment, a];"
};