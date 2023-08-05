import React, { FC } from "react";
import { Skeleton } from "../../../ui/skeleton";

interface CompanyCardSkeletonProps {}

const CompanyCardSkeleton: FC<CompanyCardSkeletonProps> = ({}) => {
	return (
		<div className="border border-gray-300 p-4">
			<div>
				<Skeleton className="w-20 h-20 rounded-full" />
				<Skeleton className="mt-5 w-[150px] h-3" />
			</div>
			<div className="mt-5">
				<Skeleton className="mt-1 w-full h-3" />
				<Skeleton className="mt-1 w-full h-3" />
				<Skeleton className="mt-1 w-full h-3" />
			</div>
		</div>
	);
};

export default CompanyCardSkeleton;
