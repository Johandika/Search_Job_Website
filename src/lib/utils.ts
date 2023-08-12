import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { supabaseGetPublicURL } from "./supabase";

import dayjs from "dayjs";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const dateFormat = (date: Date, format: string = "DD MMM YYYY") => {
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

	return {
		...data,
		companyType: data.Company?.Companyoverview[0]?.industry,
		location: data.Company?.Companyoverview[0]?.location,
		image: supabaseImageUrl,
		category: data.CategoryJob?.name,
	};
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
