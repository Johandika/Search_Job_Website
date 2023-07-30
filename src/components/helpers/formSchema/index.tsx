import { z } from "zod";

export const formFilterJobSchema = z.object({
	jobTypes: z.array(z.string()).refine((value) => value.some((item) => item)),
	categories: z
		.array(z.string())
		.refine((value) => value.some((item) => item)),
	jobLevels: z
		.array(z.string())
		.refine((value) => value.some((item) => item)),
	salaryRange: z
		.array(z.string())
		.refine((value) => value.some((item) => item)),
});

export const formFilterCompanySchema = z.object({
	industry: z.array(z.string()).refine((value) => value.some((item) => item)),
	companySize: z
		.array(z.string())
		.refine((value) => value.some((item) => item)),
});

export const formSearchSchema = z.object({
	title: z
		.string({ required_error: "Job title is required" })
		.min(1, { message: "Job title is required" }),
	location: z.string({ required_error: "Location is required" }),
});
