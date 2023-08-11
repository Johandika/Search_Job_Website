import Image from "next/image";
import React, { FC } from "react";
import Tag from "../Tag";

interface FeaturedJobItemProps {
	image: string;
	jobType: string;
	name: string;
	type: string;
	location: string;
	desc: string;
	categories: string[];
}

const FeaturedJobItem: FC<FeaturedJobItemProps> = ({
	categories,
	desc,
	image,
	jobType,
	location,
	name,
	type,
}) => {
	return (
		<div className="border border-slate-200 p-6 cursor-pointer">
			<div className="flex flex-row justify-between items-start">
				<Image src={image} alt={image} width={48} height={48} />
				<span className="px-4 py-1 text-xs font-semibold text-blue-primary border border-blue-primary">
					{jobType}
				</span>
			</div>
			<div className="my-4">
				<div className="font-semibold text-lg">{name}</div>
				<div className="text-gray-500 mb-3">
					{type} · {location}
				</div>
				<div className="text-gray-400 h-12 line-clamp-2 text-ellipsis">
					{desc}
				</div>
			</div>
			<div className="space-x-2">
				{categories.map((item: string, i: number) => (
					<Tag key={i} text={item} />
				))}
			</div>
		</div>
	);
};

export default FeaturedJobItem;
