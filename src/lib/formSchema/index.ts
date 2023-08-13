import { z } from "zod";

export const formFilterJobSchema = z.object({
	jobTypes: z.array(z.string()),
	categories: z.array(z.string()),
	salaryRange: z.array(z.string()),
});

export const formFilterCompanySchema = z.object({
	industry: z.array(z.string()),
	companySize: z.array(z.string()),
});

export const formSearchSchema = z.object({
	title: z.string({ required_error: "Job title is required" }),
	location: z.string({ required_error: "Location is required" }),
});

export const formApplySchema = z.object({
	resume: z.any().refine((file: any) => file?.name, "Please upload resume"),
	fullname: z.string().min(1, { message: "Full name is required" }),
	email: z.string().email({ message: "Email not valid" }),
	phone: z.string().min(6, { message: "Phone have min 6 characters" }),
	previousJobTitle: z.string(),
	linkedIn: z.string(),
	portfolio: z.string(),
	coverLetter: z.string(),
});

export const formSignInSchema = z.object({
	email: z
		.string({ required_error: "Email is required" })
		.min(1, { message: "Email is required" })
		.email({ message: "Email not valid" }),
	password: z.string({ required_error: "Password is required" }),
});

export const formSignUpSchema = z.object({
	fullname: z.string({ required_error: "Full name is required" }),
	email: z
		.string({ required_error: "Email is required" })
		.min(1, { message: "Email is required" })
		.email({ message: "Email not valid" }),
	password: z.string({ required_error: "Password is required" }),
});
