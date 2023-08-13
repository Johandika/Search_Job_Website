import { JobType } from "../job";

export type detailCompanyType = {
	id: string;
	image: string;
	name: string;
	website: string;
	location: string;
	employee: string;
	industry: string;
	dateFounded: Date;
	techStack: string[];
	description: string;
	companyId: string;
};

export type socialMediaCompanyType = {
	id: string;
	instagram: string;
	twitter: string;
	facebook: string;
	linkedin: string;
	youtube: string;
	companyId: string;
};

export type teamCompanyType = {
	id: string;
	name: string;
	position: string;
	instagram: string;
	linkedin: string;
	companyId: string;
};

export type companyType = {
	id: string;
	name: string;
	email: string;
	totalJobs: number;
	detail: detailCompanyType | null;
	socialMedia: socialMediaCompanyType | null;
	teams: teamCompanyType[] | [];
	latestJobs: JobType[];
};
