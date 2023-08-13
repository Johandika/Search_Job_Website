import { useFilterStore } from "@/lib/stores/filter";
import { useSearchStore } from "@/lib/stores/search";
import { useEffect, useState } from "react";

const useFilterStateJob = () => {
	const [filterQuery, setFilterQuery] = useState<{}>({});
	const [searchQuery, setSearchQuery] = useState<{}>({});

	const { filter } = useFilterStore((state) => state);
	const { search } = useSearchStore((state) => state);

	useEffect(() => {
		if (filter) {
			let query: any = {};

			if (filter?.categories && filter.categories.length > 0) {
				query["CategoryJob"] = {
					is: {
						id: {
							in: filter.categories,
						},
					},
				};
			}

			if (filter?.jobTypes && filter.jobTypes.length > 0) {
				query["jobType"] = {
					in: filter.jobTypes,
				};
			}

			setFilterQuery(query);
		}

		if (search) {
			let query: any = {};

			if (search.title !== "") {
				query.roles = {
					startsWith: search.title,
					mode: "insensitive",
				};
			}

			if (search.location !== "") {
				query.Company = {
					Companyoverview: {
						every: {
							location: search.location,
						},
					},
				};
			}

			setSearchQuery(query);
		}
	}, [filter, search]);

	return {
		filterQuery,
		searchQuery,
	};
};

export default useFilterStateJob;
