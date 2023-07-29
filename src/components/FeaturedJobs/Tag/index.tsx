import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface TagProps {
	text: string;
}

const colors = [
	"text-green-500 bg-green-50 border-green-500",
	"text-red-500 bg-red-50 border-red-500",
	"text-yellow-500 bg-yellow-50 border-yellow-500",
	"text-blue-500 bg-blue-50 border-blue-500",
];

const Tag: FC<TagProps> = ({ text }) => {
	const randomNumber = (max: number) => {
		return Math.floor(Math.random() * max);
	};

	return (
		<Badge
			className={cn(colors[randomNumber(colors.length)])}
			variant="outline"
		>
			{text}
		</Badge>
	);
};

export default Tag;
