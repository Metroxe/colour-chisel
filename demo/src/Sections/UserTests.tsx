import {ISandboxProps} from "../Sandbox";

export const differentConstants: ISandboxProps = {
	title: "Exporting the different constants.",
	description: "Please input and export a blue hex (#0000FF), a red hsl value (hsl(0,0.5,0.5)) and a green rgb (rgb(0,255,0))."
};

export const findACompliment: ISandboxProps = {
	title: "Finding compliments",
	description: "Export your favourite colour and its compliment."
};

export const makeAPath: ISandboxProps = {
	title: "Making a path",
	description: "Make a path consisting of your favourite colour and its compliment."
};

export const analogousPath: ISandboxProps = {
	title: "Find the analogous a path",
	description: "Create a path and find an analogous path that is 45 degrees over. Export both paths."
};

export const scaledPath: ISandboxProps = {
	title: "Scale a path",
	description: "Create a path and make 2 versions of the path. One version of the path should be larger (closer to edge of the colour wheel), and the other should be smaller (closer to the middle of the path). Export all the paths."
};

export const combine2Paths: ISandboxProps = {
	title: "Combine 2 paths",
	description: "Create 2 paths, with no overlapping values. Combine these 2 paths and export the new path."
};

export const makingTheS: ISandboxProps = {
	title: "Make the 'S'",
	description: "Using only a single hex, rgb or hsl value, use transformations to make the S shape (An example of the S shape is on the 'Paths' example on the other page, this used 6 inputs, try and do it with 1 input)."
};

export const drawAPicture: ISandboxProps = {
	title: "Draw a picture",
	description: "Can you draw a picture on the colour wheel? Let me see your creativity. This one is for fun."
};