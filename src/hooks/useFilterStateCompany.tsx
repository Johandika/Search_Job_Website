import { useFilterStore } from "@/lib/stores/filter";
import { useSearchStore } from "@/lib/stores/search";
import { useEffect, useState } from "react";

const useFilterStateCompany = () => {
	const [filterQuery, setFilterQuery] = useState<{}>({});
	const [searchQuery, setSearchQuery] = useState<{}>({});

	const { filter } = useFilterStore((state) => state);
	const { search } = useSearchStore((state) => state);

	useEffect(() => {
		if (filter) {
			let query: any = {};

			if (filter.industry && filter.industry.length > 0) {
				query["Companyoverview"] = {
					every: {
						industry: {
							in: filter.industry,
						},
					},
				};
			}

			if (filter.companySize && filter.companySize.length > 0) {
				if (query?.Companyoverview?.every) {
					query.Companyoverview.every["employee"] = {
						in: filter.companySize,
					};
				} else {
					query["Companyoverview"] = {
						every: {
							employee: {
								in: filter.companySize,
							},
						},
					};
				}
			}

			setFilterQuery(query);
		}

		if (search) {
			let query: any = {};

			if (search.title !== "") {
				if (query?.Companyoverview?.every) {
					query.Companyoverview.every["name"] = {
						startsWith: search.title,
						mode: "insensitive",
					};
				} else {
					query["Companyoverview"] = {
						every: {
							name: {
								startsWith: search.title,
								mode: "insensitive",
							},
						},
					};
				}
			}

			if (search.location !== "") {
				if (query?.Companyoverview?.every) {
					query.Companyoverview.every["location"] = search.location;
				} else {
					query["Companyoverview"] = {
						every: {
							location: search.location,
						},
					};
				}
			}

			setSearchQuery(query);
		}
	}, [filter, search]);

	return {
		filterQuery,
		searchQuery,
	};
};

export default useFilterStateCompany;
