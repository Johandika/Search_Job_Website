export type inputType = "input" | "textarea";

export type nameApplyJobType =
	| "fullname"
	| "email"
	| "phone"
	| "previousJobTitle"
	| "linkedIn"
	| "portfolio"
	| "coverLetter"
	| "resume";

export type listFormFieldTypes = {
	name: string;
	label: string;
	placeholder: string;
	inputType?: inputType;
	type?: string;
};
