"use client";

import { FC } from "react";
import Image from "next/image";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import InputFormField from "@/components/helpers/InputFormField";
import { listFormFieldTypes } from "@/types";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { formApplySchema } from "@/lib/formSchema";
import UploadFormField from "@/components/helpers/UploadFormField";
import {
	LIST_FORM_FIELD_APPLYJOB_1,
	LIST_FORM_FIELD_APPLYJOB_2,
} from "@/constants/form";

interface DialogApplyProps {}

const DialogApply: FC<DialogApplyProps> = ({}) => {
	const form = useForm<z.infer<typeof formApplySchema>>({
		resolver: zodResolver(formApplySchema),
		defaultValues: {
			fullname: "",
			email: "",
			phone: "",
			coverLetter: "",
			linkedIn: "",
			portfolio: "",
			previousJobTitle: "",
		},
	});

	const onSubmit = (values: z.infer<typeof formApplySchema>) => {
		console.log(values);
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="text-lg px-12 py-6">Apply</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[600px]">
				<div>
					<div className="inline-flex items-center gap-4">
						<div>
							<Image
								src="/images/company.png"
								alt="/images/company.png"
								width={60}
								height={60}
							/>
						</div>
						<div>
							<div className="text-lg font-semibold">
								Social Media Assistant
							</div>
							<div className="text-gray-500">
								Agency · Paris, France · Full-Time
							</div>
						</div>
					</div>

					<div className="my-5">
						<Separator />
					</div>

					<div className="mb-6">
						<div className="font-semibold text-lg">
							Submit your application
						</div>
						<div className="text-gray-500 text-sm mt-2">
							The following is required and will only be shared
							with Nomad
						</div>
					</div>

					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-6"
						>
							<div className="grid grid-cols-2 gap-6">
								{LIST_FORM_FIELD_APPLYJOB_1.map(
									(field: listFormFieldTypes, i: number) => (
										<InputFormField
											key={i}
											form={form}
											{...field}
										/>
									)
								)}
							</div>

							<Separator />

							<h2 className="font-semibold">LINKS</h2>

							<div className="grid grid-cols-2 gap-6">
								{LIST_FORM_FIELD_APPLYJOB_2.map(
									(field: listFormFieldTypes, i: number) => (
										<InputFormField
											key={i}
											form={form}
											{...field}
										/>
									)
								)}
							</div>

							<InputFormField
								form={form}
								name="coverLetter"
								label="Additional information"
								placeholder="Add a cover letter or anything else you want to share"
								inputType="textarea"
							/>

							<UploadFormField form={form} name="resume" />

							<Button className="w-full">
								Submit Application
							</Button>
						</form>
					</Form>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default DialogApply;
