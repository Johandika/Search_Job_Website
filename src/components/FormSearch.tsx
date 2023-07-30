import React, { FC } from "react";

import { HiOutlineSearch, HiOutlineLocationMarker } from "react-icons/hi";
import { Input } from "./ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";

interface FormSearchProps {
	form: any;
	onSubmitSearch: (val: any) => Promise<void>;
	description: string;
}

const FormSearch: FC<FormSearchProps> = ({
	form,
	onSubmitSearch,
	description,
}) => {
	return (
		<div className="mx-auto w-max">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmitSearch)}>
					<div className="p-4 bg-white shadow-sm flex justify-between items-center gap-4 relative w-max z-10 text-center">
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<div className="inline-flex gap-3 items-center">
											<HiOutlineSearch className="w-6 h-6" />
											<Input
												className="py-6 w-[350px] border-none"
												placeholder="Job title or keyword"
												{...field}
											/>
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Separator orientation="vertical" />
						<FormField
							control={form.control}
							name="location"
							render={({ field }) => (
								<FormItem>
									<div className="inline-flex gap-3 items-center">
										<HiOutlineLocationMarker className="w-6 h-6" />
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<FormControl>
												<SelectTrigger className="py-6 w-[350px] border-none  text-gray-600 outline-none">
													<SelectValue placeholder="Select a location" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="Indonesia">
													Indonesia
												</SelectItem>
											</SelectContent>
										</Select>
									</div>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div>
							<Button className="">Search</Button>
						</div>
					</div>
				</form>
			</Form>
			<div>
				<div className="text-gray-600 text-sm mt-3">{description}</div>
			</div>
		</div>
	);
};

export default FormSearch;
