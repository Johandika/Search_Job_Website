"use client";

import { parserCategories } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";

const useCategories = (isParse: boolean = false) => {
	const { data, error, isLoading } = useSWR(`api/job/categories`);
	const [categories, setCategories] = useState<any[]>([]);

	useEffect(() => {
		if (isParse) {
			parserData();
		} else {
			setCategories(data);
		}
	}, [data, isLoading]);

	const parserData = useCallback(async () => {
		if (data && !isLoading) {
			const parseData = await parserCategories(data);
			setCategories(parseData);
		}
	}, [data, isLoading]);

	return {
		data: categories,
		isLoading,
		isError: error,
	};
};

export default useCategories;
