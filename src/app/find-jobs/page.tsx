"use client";

import { FilterFormProps } from "@/components/FilterFormData";
import { formFilterSchema } from "@/components/helpers/formSchema";
import {
	CATEGORIES_OPTIONS_FILTER,
	JOB_LEVEL_OPTIONS_FILTER,
	JOB_TYPES_OPTIONS_FILTER,
	SALARY_RANGE_OPTIONS_FILTER,
} from "@/constants";
import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const filterForms: FilterFormProps[] = [
	{
		name: "jobTypes",
		title: "Type of Employment",
		options: JOB_TYPES_OPTIONS_FILTER,
	},
	{
		name: "categories",
		title: "Categories",
		options: CATEGORIES_OPTIONS_FILTER,
	},
	{
		name: "jobLevels",
		title: "Job Level",
		options: JOB_LEVEL_OPTIONS_FILTER,
	},
	{
		name: "salaryRange",
		title: "Salary Range",
		options: SALARY_RANGE_OPTIONS_FILTER,
	},
];

export default function FindJobsPage() {
	const formFilter = useForm<z.infer<typeof formFilterSchema>>({
		resolver: zodResolver(formFilterSchema),
		defaultValues: {
			jobTypes: [],
			categories: [],
			jobLevels: [],
			salaryRange: [],
		},
	});

	const onSubmitFilter = async (values: z.infer<typeof formFilterSchema>) => {
		console.log(values);
	};

	return (
		<ExploreDataContainer
			formFilter={formFilter}
			onSubmitFilter={onSubmitFilter}
			filterForms={filterForms}
		/>
	);
}
