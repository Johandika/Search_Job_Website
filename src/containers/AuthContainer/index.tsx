"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import InputFormField from "@/components/helpers/InputFormField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { listFormFieldTypes } from "@/types";

interface AuthContainerProps {
	formSchema: any;
	title: string;
	listForm: listFormFieldTypes[];
	buttonText: string;
	submitAction: (val: any) => void;
}

const AuthContainer: FC<AuthContainerProps> = ({
	formSchema,
	title,
	listForm,
	submitAction,
	buttonText,
}) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	return (
		<div>
			<div className="text-3xl text-center font-semibold mb-7">
				{title}
			</div>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(submitAction)}
					className="space-y-5"
				>
					{listForm.map((field: listFormFieldTypes, i: number) => (
						<InputFormField key={i} form={form} {...field} />
					))}

					<Button type="submit" className="w-full">
						{buttonText}
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default AuthContainer;
