"use client";

import { FilterFormProps } from "@/components/organisms/FilterFormData";
import { formFilterJobSchema, formSearchSchema } from "@/lib/formSchema";
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

const dummyData: any = [
	{
		name: "Social Media Assistant",
		image: "/images/company.png",
		jobType: "Full-Time",
		location: "Paris, France",
		categories: ["Marketing", "Design"],
		type: "Agency",
		applicants: 5,
		needs: 10,
	},
];

export default function FindJobsPage() {
	const formFilter = useForm<z.infer<typeof formFilterJobSchema>>({
		resolver: zodResolver(formFilterJobSchema),
		defaultValues: {
			jobTypes: [],
			categories: [],
			jobLevels: [],
			salaryRange: [],
		},
	});

	const formSearch = useForm<z.infer<typeof formSearchSchema>>({
		resolver: zodResolver(formSearchSchema),
	});

	const onSubmitSearch = async (values: z.infer<typeof formSearchSchema>) => {
		console.log(values);
	};

	const onSubmitFilter = async (
		values: z.infer<typeof formFilterJobSchema>
	) => {
		console.log(values);
	};

	return (
		<ExploreDataContainer
			formFilter={formFilter}
			onSubmitFilter={onSubmitFilter}
			filterForms={filterForms}
			formSearch={formSearch}
			onSubmitSearch={onSubmitSearch}
			titleContent="dream job"
			descriptionContent="Find your next career at companies like HubSpot, Nike, and Dropbox"
			type="jobs"
			data={dummyData}
			loading={false}
		/>
	);
}
