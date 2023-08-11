import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { supabaseGetPublicURL } from "./supabase";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

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
			};
		})
	);
};
