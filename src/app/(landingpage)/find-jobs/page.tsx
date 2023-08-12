"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { FilterFormProps } from "@/components/organisms/FilterFormData";
import {
	JOB_TYPES_OPTIONS_FILTER,
	SALARY_RANGE_OPTIONS_FILTER,
} from "@/constants";
import ExploreDataContainer from "@/containers/ExploreDataContainer";
import useJobs from "@/hooks/useJobs";
import { formFilterJobSchema, formSearchSchema } from "@/lib/formSchema";
import { useFilterStore } from "@/lib/stores/filter";
import { useSearchStore } from "@/lib/stores/search";

const filterForms: FilterFormProps[] = [
	{
		name: "jobTypes",
		title: "Type of Employment",
		options: JOB_TYPES_OPTIONS_FILTER,
	},
	{
		name: "salaryRange",
		title: "Salary Range",
		options: SALARY_RANGE_OPTIONS_FILTER,
	},
];

export default function FindJobsPage() {
	const { jobs, isLoading } = useJobs();

	const searchParams = useSearchParams();
	const category = searchParams.get("category");

	const { setFilter } = useFilterStore((state) => state);
	const { setSearch } = useSearchStore((state) => state);

	const formFilter = useForm<z.infer<typeof formFilterJobSchema>>({
		resolver: zodResolver(formFilterJobSchema),
		defaultValues: {
			jobTypes: [],
			categories: [],
			salaryRange: [],
		},
	});

	const formSearch = useForm<z.infer<typeof formSearchSchema>>({
		resolver: zodResolver(formSearchSchema),
		defaultValues: {
			title: "",
			location: "Indonesia",
		},
	});

	const onSubmitSearch = async (values: z.infer<typeof formSearchSchema>) =>
		setSearch(values);

	const onSubmitFilter = async (
		values: z.infer<typeof formFilterJobSchema>
	) => setFilter(values);

	useEffect(() => {
		if (category) {
			formFilter.setValue("categories", [category]);
			setFilter(formFilter.getValues());
		}
	}, [category]);

	return (
		<>
			<ExploreDataContainer
				formFilter={formFilter}
				onSubmitFilter={onSubmitFilter}
				filterForms={filterForms}
				formSearch={formSearch}
				onSubmitSearch={onSubmitSearch}
				titleContent="dream job"
				descriptionContent="Find your next career at companies like HubSpot, Nike, and Dropbox"
				type="jobs"
				data={jobs}
				loading={isLoading}
			/>
		</>
	);
}
