"use client";

import { FC } from "react";

import { useRouter } from "next/navigation";
import { BiCategory } from "react-icons/bi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Skeleton } from "@/components/ui/skeleton";

type CategoryItemProps = {} & (ItemLoadingType | ItemNonLoadingType);

type ItemLoadingType = {
	loading: true;
};

type ItemNonLoadingType = {
	loading: false;
	name: string;
	totalJobs: number;
	id: string;
};

const CategoryItem: FC<CategoryItemProps> = (props) => {
	const router = useRouter();

	const handleClickCategory = () => {
		if (!props.loading) {
			router.push(`/find-jobs?category=${props.id}`);
		}
	};

	return (
		<div
			onClick={handleClickCategory}
			className="border border-slate-200 p-8 cursor-pointer transition-colors group hover:border-blue-primary hover:bg-blue-primary hover:text-white"
		>
			<BiCategory className="w-12 h-12 text-blue-primary group-hover:text-white" />
			<div className="mt-7">
				<div className="text-2xl font-semibold">
					{props.loading ? (
						<Skeleton className="w-2/4 h-[15px] rounded-none" />
					) : (
						<>{props.name}</>
					)}
				</div>
				{props.loading ? (
					<div className="mt-4">
						<Skeleton className="w-3/4 h-[15px] rounded-none" />
					</div>
				) : (
					<div className="text-gray-500 inline-flex items-center gap-1 mt-1 group-hover:text-white">
						<span>{props.totalJobs} jobs available</span>
						<HiOutlineArrowNarrowRight className="text-black group-hover:text-white" />
					</div>
				)}
			</div>
		</div>
	);
};

export default CategoryItem;
