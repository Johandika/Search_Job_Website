"use client";

import { Badge } from "@/components/ui/badge";
import { FC } from "react";

interface TagProps {
	text: string;
}

const Tag: FC<TagProps> = ({ text }) => {
	return (
		<Badge
			className="text-blue-500 bg-blue-50 border-blue-500"
			variant="outline"
		>
			{text}
		</Badge>
	);
};

export default Tag;
