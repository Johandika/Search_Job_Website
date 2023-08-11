import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";

import { parserJobs } from "@/lib/utils";

const useJobs = () => {
	const { data, error, isLoading } = useSWR(`api/job`);

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
