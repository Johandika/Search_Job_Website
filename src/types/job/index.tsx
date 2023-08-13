import { companyType } from "../company";

export type categoryJobType = {
	id: string;
	name: string;
};

export type benefitJobType = {
	benefit: string;
	description: string;
};

export type JobType = {
	id: string;
	roles: string;
	datePosted: Date;
	dueDate: Date;
	jobType: string;
	applicants: number;
	needs: number;
	salaryFrom: string;
	salaryTo: string;
	category: categoryJobType;
	requiredSkills: string[];
	description: string;
	responsibility: string;
	whoYouAre: string;
	niceToHaves: string;
	benefits: benefitJobType[];
	companyId: string;
	categoryId: string;
	location: string;
	type: string;
	image: string;
	company: companyType;
};
