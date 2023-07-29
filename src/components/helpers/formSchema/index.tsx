import { z } from "zod";

export const formFilterSchema = z.object({
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
