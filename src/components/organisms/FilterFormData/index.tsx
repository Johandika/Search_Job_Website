"use client";

import { FC } from "react";
import { Form } from "../../ui/form";
import FilterCheckbox, { FilterCheckboxOptionsProps } from "./FilterCheckbox";
import useCategories from "@/hooks/api/useCategories";
import { Button } from "@/components/ui/button";
import { useFilterStore } from "@/lib/stores/filter";

export interface FilterFormProps {
	title: string;
	name: string;
	options: FilterCheckboxOptionsProps[];
}

interface FilterFormDataProps {
	form: any;
	onSubmit: (value: any) => Promise<void>;
	checkboxForm: FilterFormProps[];
	type?: "jobs" | "companies";
}

const FilterFormData: FC<FilterFormDataProps> = ({
	form,
	onSubmit,
	checkboxForm,
	type = "jobs",
}) => {
	const { data, isLoading } = useCategories(true);

	const { resetFilter } = useFilterStore((state) => state);

	const handleReset = () => {
		resetFilter();
		form.reset();
	};

	return (
		<div className="w-1/5">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					{type === "jobs" && (
						<FilterCheckbox
							key={"categoriy1"}
							title="Categories"
							form={form}
							name="categories"
							options={isLoading ? [] : data}
						/>
					)}

					{checkboxForm.map((item: FilterFormProps, i: number) => (
						<FilterCheckbox
							key={i}
							title={item.title}
							form={form}
							name={item.name}
							options={item.options}
						/>
					))}

					<Button className="w-full">Apply Filter</Button>
					<Button
						onClick={handleReset}
						className="w-full text-blue-primary mt-3"
						variant="outline"
					>
						Reset Filter
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default FilterFormData;
