"use client";

import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";

import { parserJobs } from "@/lib/utils";
import { sortingParamsType } from "@/types";
import { useFilterStore } from "@/lib/stores/filter";
import { useSearchStore } from "@/lib/stores/search";

const useJobs = (limit: number = 6, sorting?: sortingParamsType) => {
	let apiUrl = "api/job";

	const { filter } = useFilterStore((state) => state);
	const { search } = useSearchStore((state) => state);

	if (limit) {
		apiUrl += `?limit=${limit}`;
	}

	if (sorting) {
		apiUrl += `&sorting=${sorting.field},${sorting.orderType}`;
	}

	if (filter) {
		let filterQuery: any = {};

		if (filter.categories.length > 0) {
			filterQuery["CategoryJob"] = {
				is: {
					id: {
						in: filter.categories,
					},
				},
			};
		}

		if (filter.jobTypes.length > 0) {
			filterQuery["jobType"] = {
				in: filter.jobTypes,
			};
		}

		apiUrl += `&filter=${JSON.stringify(filterQuery)}`;
	}

	if (search) {
		let searchQuery: any = {};

		if (search.title !== "") {
			searchQuery.roles = {
				startsWith: search.title,
				mode: "insensitive",
			};
		}

		if (search.location !== "") {
			searchQuery.Company = {
				Companyoverview: {
					every: {
						location: search.location,
					},
				},
			};
		}

		apiUrl += `&search=${JSON.stringify(searchQuery)}`;
	}

	const { data, error, isLoading } = useSWR(apiUrl);

	const [jobs, setJobs] = useState<any[]>([]);

	useEffect(() => {
		parserData();
	}, [data, isLoading]);

	const parserData = useCallback(async () => {
		if (data && !isLoading) {
			const parseData = await parserJobs(data);

			setJobs(parseData);
		}
	}, [data, isLoading]);

	return {
		jobs,
		isLoading,
		isError: error,
	};
};

export default useJobs;
