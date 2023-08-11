import { ChangeEvent, FC, useRef, useState } from "react";
import { UseFormReturn } from "react-hook-form";

import { nameApplyJobType } from "@/types";
import { formApplySchema } from "@/lib/formSchema";
import { z } from "zod";
import { FormField, FormItem, FormMessage } from "@/components/ui/form";

interface UploadFormFieldProps {
	form: UseFormReturn<z.infer<typeof formApplySchema>>;
	name: nameApplyJobType;
}

const UploadFormField: FC<UploadFormFieldProps> = ({ form, name }) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [nameFile, setNameFile] = useState<string>("Attach your resume");

	const handleSelectFile = () => {
		inputRef.current?.click();
	};

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setNameFile(e.target.files[0].name);
			form.setValue(name, e.target.files[0]);
		}
	};

	return (
		<div className="flex flex-row justify-between items-center">
			<div className="font-semibold">Attach Resume/CV</div>
			<div>
				<div>
					<div
						onClick={handleSelectFile}
						className="text-xs text-blue-primary font-semibold p-3 cursor-pointer border-2 border-dashed border-blue-primary"
					>
						{nameFile}
					</div>
				</div>
				<FormField
					name={name}
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormMessage className="mt-2" />
						</FormItem>
					)}
				/>
				<input
					type="file"
					className="hidden"
					ref={inputRef}
					onChange={handleFileChange}
					accept="application/pdf"
				/>
			</div>
		</div>
	);
};

export default UploadFormField;
