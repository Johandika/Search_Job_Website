"use client";

import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";

import { parserJobs } from "@/lib/utils";
import useFilterStateJob from "../useFilterStateJob";

const useJobs = () => {
	let apiUrl = "api/job";

	const { filterQuery, searchQuery } = useFilterStateJob();

	apiUrl += `?filter=${JSON.stringify(filterQuery)}`;
	apiUrl += `&search=${JSON.stringify(searchQuery)}`;

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
