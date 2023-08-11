import ComponentField from "@/components/atoms/ComponentField";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { FC, InputHTMLAttributes } from "react";

interface InputFormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	form: any;
	name: string;
	label?: string;
	description?: string;
	inputType?: "input" | "textarea";
}

const InputFormField: FC<InputFormFieldProps> = ({
	form,
	name,
	label,
	description,
	inputType = "input",
	...props
}) => {
	return (
		<FormField
			control={form.control}
			name={name}
			render={({ field }) => (
				<FormItem>
					{label && <FormLabel>{label}</FormLabel>}
					<FormControl>
						<ComponentField
							inputType={inputType}
							{...props}
							{...field}
						/>
					</FormControl>
					{description && (
						<FormDescription>{description}</FormDescription>
					)}
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default InputFormField;
