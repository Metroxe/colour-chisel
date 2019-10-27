const literals: Array<[RegExp, string]> =  [
	[new RegExp("rgb", "g"), "rgb"],
	[new RegExp("translate", "g"), "translate"],
	[new RegExp("scale", "g"), "scale"],
	[new RegExp("rotate", "g"), "rotate"],
	[new RegExp("analogous", "g"), "analogous"],
	[new RegExp("compliment", "g"), "compliment"],
	[new RegExp("export", "g"), "export"],
	[new RegExp("=", "g"), "="],
	[new RegExp(",", "g"), ","],
	[new RegExp("\\)", "g"), ")"],
	[new RegExp("\\(", "g"), "("],
	[new RegExp("#", "g"), "#"],
	[new RegExp("\\[", "g"), "["],
	[new RegExp("]", "g"), "]"],
	[new RegExp(";", "g"), ";"],
	[new RegExp(">", "g"), ">"],
];

export default literals;