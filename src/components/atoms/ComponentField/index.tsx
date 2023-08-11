import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FC, ForwardedRef } from "react";

interface ComponentFieldProps {
	inputType: "input" | "textarea";
	ref: ForwardedRef<any>;
	[x: string]: any;
}

const ComponentField: FC<ComponentFieldProps> = ({
	inputType,
	ref,
	...props
}) => {
	const ComponentItem = {
		input: <Input ref={ref} {...props} />,
		textarea: <Textarea ref={ref} {...props} />,
	};

	return <>{ComponentItem[inputType]}</>;
};

export default ComponentField;
