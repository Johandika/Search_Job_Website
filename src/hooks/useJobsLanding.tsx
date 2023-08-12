"use client";

import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";

import { parserJobs } from "@/lib/utils";
import { sortingParamsType } from "@/types";

const useJobsLanding = (limit: number = 6, sorting?: sortingParamsType) => {
	let apiUrl = "api/job";

	if (limit) {
		apiUrl += `?limit=${limit}`;
	}

	if (sorting) {
		apiUrl += `&sorting=${sorting.field},${sorting.orderType}`;
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

export default useJobsLanding;
