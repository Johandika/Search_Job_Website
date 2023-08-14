"use client";

import { FC, useEffect } from "react";
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
import { JobType } from "@/types/job";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { supabaseUploadImg } from "@/lib/supabase";

interface DialogApplyProps {
	job: JobType;
	isApply: number | null;
}

const DialogApply: FC<DialogApplyProps> = ({ job, isApply }) => {
	const { data: session } = useSession();

	const { toast } = useToast();
	const router = useRouter();

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

	const onSubmit = async (values: z.infer<typeof formApplySchema>) => {
		try {
			const { filename, error } = await supabaseUploadImg(
				values.resume,
				"applicant"
			);

			const body = {
				userId: session?.user.id,
				jobId: job.id,
				resume: filename,
				coverLetter: values.coverLetter,
				linkedIn: values.linkedIn,
				phone: values.phone,
				portfolio: values.portfolio,
				previousJobTitle: values.previousJobTitle,
			};

			if (error) {
				throw "Error";
			}

			await fetch("/api/job/apply", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});

			await toast({
				title: "Success",
				description: "Apply job success",
			});
			router.replace("/");
		} catch (error) {
			console.log(error);
			toast({
				title: "Error",
				description: "Please try again",
			});
		}
	};

	useEffect(() => {
		if (session) {
			form.setValue("fullname", session.user.name);
			form.setValue("email", session.user.email);
		}
	}, [session]);

	return (
		<Dialog>
			<DialogTrigger asChild>
				{isApply ? (
					<Button
						disabled
						className="text-lg px-12 py-6 bg-green-500"
					>
						Applied
					</Button>
				) : session ? (
					
					<Button className="text-lg px-12 py-6">Apply</Button>
				
				) : (
					<Button variant="outline" disabled>Sign In First</Button>
				)}
			</DialogTrigger>
			<DialogContent className="sm:max-w-[600px]">
				<div>
					<div className="inline-flex items-center gap-4">
						<div>
							<Image
								src={job.image}
								alt={job.image}
								width={60}
								height={60}
							/>
						</div>
						<div>
							<div className="text-lg font-semibold">
								{job.roles}
							</div>
							<div className="text-gray-500">
								{job.category.name} · {job.location} ·{" "}
								{job.jobType}
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
