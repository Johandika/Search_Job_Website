import React, { FC } from "react";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BiCategory } from "react-icons/bi";

interface CategoryItemProps {
	name: string;
	totalJobs: number;
}

const CategoryItem: FC<CategoryItemProps> = ({ name, totalJobs }) => {
	return (
		<div className="border border-slate-200 p-8 cursor-pointer transition-colors group hover:border-blue-primary hover:bg-blue-primary hover:text-white">
			<BiCategory className="w-12 h-12 text-blue-primary group-hover:text-white" />
			<div className="mt-7">
				<div className="text-2xl font-semibold">{name}</div>
				<div className="text-gray-500 inline-flex items-center gap-1 mt-1 group-hover:text-white">
					<span>{totalJobs} jobs available</span>
					<HiOutlineArrowNarrowRight className="text-black group-hover:text-white" />
				</div>
			</div>
		</div>
	);
};

export default CategoryItem;
