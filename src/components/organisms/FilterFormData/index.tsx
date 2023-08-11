"use client";

import { FC } from "react";
import { Form } from "../../ui/form";
import FilterCheckbox, { FilterCheckboxOptionsProps } from "./FilterCheckbox";

export interface FilterFormProps {
	title: string;
	name: string;
	options: FilterCheckboxOptionsProps[];
}

interface FilterFormDataProps {
	form: any;
	onSubmit: (value: any) => Promise<void>;
	checkboxForm: FilterFormProps[];
}

const FilterFormData: FC<FilterFormDataProps> = ({
	form,
	onSubmit,
	checkboxForm,
}) => {
	return (
		<div className="w-1/5">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					{checkboxForm.map((item: FilterFormProps, i: number) => (
						<FilterCheckbox
							key={i}
							title={item.title}
							form={form}
							name={item.name}
							options={item.options}
						/>
					))}
				</form>
			</Form>
		</div>
	);
};

export default FilterFormData;
