"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import useSWR from "swr";

import { parserCompanies } from "@/lib/utils";
import useFilterStateCompany from "../useFilterStateCompany";

const useCompanies = () => {
	let apiUrl = "api/company";

	const { filterQuery, searchQuery } = useFilterStateCompany();

	const filterParams = useMemo(
		() => JSON.stringify(filterQuery),
		[filterQuery]
	);
	const searchParams = useMemo(
		() => JSON.stringify(searchQuery),
		[searchQuery]
	);

	const { data, error, isLoading } = useSWR(
		`${apiUrl}?filter=${filterParams}&search=${searchParams}`
	);
	const [companies, setCompanies] = useState<any[]>([]);

	useEffect(() => {
		parserData();
	}, [data, isLoading]);

	const parserData = useCallback(async () => {
		if (data && !isLoading) {
			const parseData = await parserCompanies(data);

			setCompanies(parseData);
		}
	}, [data, isLoading]);

	return {
		data: companies,
		isLoading,
		isError: error,
	};
};

export default useCompanies;
