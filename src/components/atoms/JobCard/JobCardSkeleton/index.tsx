import React, { FC } from "react";
import { Skeleton } from "../../../ui/skeleton";

interface JobCardSkeletonProps {}

const JobCardSkeleton: FC<JobCardSkeletonProps> = ({}) => {
	return (
		<div className="w-full border mb-5 p-6 border-gray-300 flex flex-row justify-between items-center">
			<div className="inline-flex items-start gap-4">
				<Skeleton className="w-20 h-20 rounded-full" />
				<div>
					<Skeleton className="w-[120px] h-3" />
					<div className="mt-4 space-y-2">
						<Skeleton className="w-[250px] h-3" />
						<Skeleton className="w-[250px] h-3" />
						<Skeleton className="w-[250px] h-3" />
					</div>
				</div>
			</div>
			<div>
				<Skeleton className="w-[150px] h-[50px]" />
			</div>
		</div>
	);
};

export default JobCardSkeleton;
