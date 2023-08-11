import { Skeleton } from "@/components/ui/skeleton";
import React, { FC } from "react";

interface LoadingProps {}

const Loading: FC<LoadingProps> = ({}) => {
	return (
		<>
			<Skeleton className="w-[80px] h-[80px] rounded-full" />

			<div className="mt-4">
				<Skeleton className="w-1/2 h-4 rounded-none" />
				{[0, 1].map((item: number) => (
					<div className="mt-3 space-y-3" key={item}>
						<Skeleton className="w-full h-4 rounded-none" />
					</div>
				))}
			</div>

			<div className="mt-4 inline-flex gap-3">
				{[0, 1].map((i: number) => (
					<Skeleton key={i} className="w-14 h-5 rounded-none" />
				))}
			</div>
		</>
	);
};

export default Loading;
