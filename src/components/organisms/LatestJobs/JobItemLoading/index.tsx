import { Skeleton } from "@/components/ui/skeleton";
import React, { FC } from "react";

interface JobItemLoadingProps {}

const JobItemLoading: FC<JobItemLoadingProps> = ({}) => {
	return (
		<div className="bg-white shadow-xs p-8 flex flex-row items-start gap-6 cursor-pointer">
			<div>
				<Skeleton className="w-[64px] h-[64px] rounded-full" />
			</div>
			<div>
				<div className="mb-2 w-full">
					<Skeleton className="w-[100px] h-4 rounded-none" />
				</div>
				<div>
					<Skeleton className="w-[150px] h-3 rounded-none" />
				</div>
				<div className="mt-4 inline-flex gap-4">
					{[0, 1, 2].map((i: number) => (
						<Skeleton key={i} className="w-10 h-3 rounded-none" />
					))}
				</div>
			</div>
		</div>
	);
};

export default JobItemLoading;
