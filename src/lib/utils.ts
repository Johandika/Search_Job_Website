import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { supabaseGetPublicURL } from "./supabase";
import bcrypt from "bcryptjs";

import dayjs from "dayjs";
import {
	companyType,
	detailCompanyType,
	socialMediaCompanyType,
	teamCompanyType,
} from "@/types/company";
import { JobType } from "@/types/job";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const dateFormat = (
	date: Date | undefined,
	format: string = "DD MMM YYYY"
) => {
	if (!date) {
		return dayjs().format(format);
	}

	return dayjs(date).format(format);
};

export const parseJob = async (data: any) => {
	let imageName = data.Company?.Companyoverview[0]?.image;
	let supabaseImageUrl;

	if (imageName) {
		supabaseImageUrl = await supabaseGetPublicURL(imageName, "company");
	} else {
		supabaseImageUrl = "/images/company.png";
	}

	const job: JobType = {
		...data,
		image: supabaseImageUrl,
		location: data.Company?.Companyoverview[0].location,
		type: data.Company?.Companyoverview[0].industry,
		category: {
			id: data.CategoryJob.id,
			name: data.CategoryJob.name,
		},
		company: data.Company,
	};

	return job;
};

export const parserJobs = async (data: any[]) => {
	return await Promise.all(
		data.map(async (item: any) => {
			let imageName = item.Company?.Companyoverview[0]?.image;
			let supabaseImageUrl;

			if (imageName) {
				supabaseImageUrl = await supabaseGetPublicURL(
					imageName,
					"company"
				);
			} else {
				supabaseImageUrl = "/images/company.png";
			}

			return {
				...item,
				companyType: item.Company?.Companyoverview[0]?.industry,
				location: item.Company?.Companyoverview[0]?.location,
				image: supabaseImageUrl,
				category: item.CategoryJob?.name,
			};
		})
	);
};

export const parseCompany = async (data: any) => {
	let imageCompanyName = data.Companyoverview[0]?.image;
	let imageCompanyUrl: string;

	if (imageCompanyName) {
		imageCompanyUrl = await supabaseGetPublicURL(
			imageCompanyName,
			"company"
		);
	} else {
		imageCompanyUrl = "/images/company.png";
	}

	const companyOverview: detailCompanyType = data.Companyoverview[0];
	const companySocialMedia: socialMediaCompanyType =
		data.CompanySocialMedia[0];
	const companyTeams: teamCompanyType[] = data.CompanyTeam;

	const jobs = data.Job.map((item: any) => {
		const val: JobType = {
			...item,
			image: imageCompanyUrl,
			location: companyOverview.location,
			type: companyOverview.industry,
			category: {
				id: item.CategoryJob.id,
				name: item.CategoryJob.name,
			},
		};

		return val;
	});

	const company: companyType = {
		id: data.id,
		name: data.name,
		email: data.email,
		totalJobs: data._count?.Job,
		detail: {
			...companyOverview,
			image: imageCompanyUrl,
		},
		socialMedia: companySocialMedia,
		teams: companyTeams,
		latestJobs: jobs,
	};

	return company;
};

export const parserCompanies = async (data: any[]) => {
	return await Promise.all(
		data.map(async (item: any) => {
			let imageName = item.Companyoverview[0]?.image;
			let supabaseImageUrl;

			if (imageName) {
				supabaseImageUrl = await supabaseGetPublicURL(
					imageName,
					"company"
				);
			} else {
				supabaseImageUrl = "/images/company.png";
			}

			return {
				id: item.id,
				name: item.name,
				email: item.email,
				detail: item.Companyoverview[0],
				image: supabaseImageUrl,
				totalJobs: item._count?.Job,
			};
		})
	);
};

export const stringToObject = (val?: string | null) => {
	if (!val) {
		return val;
	}

	const temp: string[] = val.split(",");
	const obj: any = {};
	let i = 0;
	while (i < temp.length) {
		obj[temp[i]] = temp[i + 1];
		i += 2;
	}

	return obj;
};

export const parserCategories = (data: any[]) => {
	return data.map((item: any) => {
		return {
			id: item.id,
			label: item.name,
		};
	});
};

export const getPrismaQuery = (url: string) => {
	const { searchParams } = new URL(url);

	const isFilter = searchParams.get("filter");
	const filtering =
		JSON.parse(isFilter === null ? "{}" : isFilter) ?? undefined;

	const isSearch = searchParams.get("search");
	const searching =
		JSON.parse(isSearch === null ? "{}" : isSearch) ?? undefined;

	const filterWhere = isFilter === "{}" ? {} : { ...filtering };
	const searchWhere = isSearch === "{}" ? {} : { ...searching };

	return {
		filterWhere,
		searchWhere,
	};
};

export const hashPassword = async (password: string) => {
	const hashedPassword = await bcrypt.hash(password, 8);

	return hashedPassword;
};

export const comparePassword = async (
	password: string,
	hashedPassword: string
) => {
	const isMatch = await bcrypt.compare(password, hashedPassword);

	return isMatch;
};
