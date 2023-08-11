import useSWR from "swr";

const useCategories = () => {
	const { data, error, isLoading } = useSWR(`api/job/categories`);

	return {
		categories: data,
		isLoading,
		isError: error,
	};
};

export default useCategories;
