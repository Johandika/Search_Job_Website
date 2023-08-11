import { listFormFieldTypes } from "@/types";

export const LIST_FORM_FIELD_APPLYJOB_1: listFormFieldTypes[] = [
	{
		name: "fullname",
		label: "Full name",
		placeholder: "Enter your fullname",
	},
	{
		name: "email",
		label: "Email",
		placeholder: "Enter your email address",
	},
	{
		name: "phone",
		label: "Phone number",
		placeholder: "Enter your fullname",
		type: "number",
	},
	{
		name: "previousJobTitle",
		label: "Current of previous job title",
		placeholder: "What’s your current or previous job title?",
	},
];

export const LIST_FORM_FIELD_APPLYJOB_2: listFormFieldTypes[] = [
	{
		name: "linkedIn",
		label: "LinkedIn URL",
		placeholder: "Link to your LinkedIn URL",
	},
	{
		name: "portfolio",
		label: "Portfolio URL",
		placeholder: "Link to your portfolio URL",
	},
];

export const LIST_FORM_FIELD_SIGN_IN: listFormFieldTypes[] = [
	{
		name: "email",
		label: "Email",
		placeholder: "Enter email address",
	},
	{
		name: "password",
		label: "Password",
		placeholder: "Enter password",
	},
];

export const LIST_FORM_FIELD_SIGN_UP: listFormFieldTypes[] = [
	{
		name: "fullname",
		label: "Full name",
		placeholder: "Enter your full name",
	},
	{
		name: "email",
		label: "Email Address",
		placeholder: "Enter email address",
	},
	{
		name: "password",
		label: "Password",
		placeholder: "Enter password",
	},
];
