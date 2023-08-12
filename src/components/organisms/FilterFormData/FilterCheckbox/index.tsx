"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import React, { FC } from "react";

export interface FilterCheckboxOptionsProps {
	id: string;
	label: string;
}

interface FilterCheckboxProps {
	options: FilterCheckboxOptionsProps[];
	form: any;
	name: string;
	title: string;
}

const FilterCheckbox: FC<FilterCheckboxProps> = ({
	form,
	options,
	name,
	title,
}) => {
	return (
		<Accordion
			type="single"
			collapsible
			defaultValue={name}
			className="mt-0 mb-5"
		>
			<AccordionItem value={name} className="border-none mt-0">
				<AccordionTrigger className="font-semibold first:pt-0">
					{title}
				</AccordionTrigger>
				<AccordionContent>
					<FormItem className="space-y-5 text-gray-600 mt-5">
						{options.map((item: any) => (
							<FormField
								key={item.id}
								control={form.control}
								name={name}
								render={({ field }) => (
									<FormItem
										key={item.id}
										className="flex flex-row items-center space-x-3 space-y-0"
									>
										<FormControl>
											<FormControl>
												<Checkbox
													checked={field.value?.includes(
														item.id
													)}
													onCheckedChange={(
														checked
													) => {
														return checked
															? field.onChange([
																	...field.value,
																	item.id,
															  ])
															: field.onChange(
																	field.value?.filter(
																		(
																			value: any
																		) =>
																			value !==
																			item.id
																	)
															  );
													}}
												/>
											</FormControl>
										</FormControl>
										<FormLabel className="font-normal">
											{item.label}
										</FormLabel>
									</FormItem>
								)}
							/>
						))}
					</FormItem>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};

export default FilterCheckbox;
