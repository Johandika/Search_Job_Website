"use client";

import { FilterFormProps } from "@/components/FilterFormData";
import {
	formFilterCompanySchema,
	formSearchSchema,
} from "@/components/helpers/formSchema";
import {
	COMPANYSIZE_OPTIONS_FILTER,
	INDUSTRY_OPTIONS_FILTER,
} from "@/constants";
import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const filterForms: FilterFormProps[] = [
	{
		name: "industry",
		title: "Industry",
		options: INDUSTRY_OPTIONS_FILTER,
	},
	{
		name: "companySize",
		title: "Company Size",
		options: COMPANYSIZE_OPTIONS_FILTER,
	},
];

const dummyData: any = [0, 1, 3];

export default function FindCompaniesPage() {
	const formFilter = useForm<z.infer<typeof formFilterCompanySchema>>({
		resolver: zodResolver(formFilterCompanySchema),
		defaultValues: {
			industry: [],
			companySize: [],
		},
	});

	const formSearch = useForm<z.infer<typeof formSearchSchema>>({
		resolver: zodResolver(formSearchSchema),
	});

	const onSubmitSearch = async (values: z.infer<typeof formSearchSchema>) => {
		console.log(values);
	};

	const onSubmitFilter = async (
		values: z.infer<typeof formFilterCompanySchema>
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
			titleContent="dream companies"
			descriptionContent="Find the dream companies you dream work for"
			type="companies"
			data={dummyData}
			loading={true}
		/>
	);
}
