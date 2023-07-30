"use client";

import CompanyCard from "@/components/CompanyCard";
import CompanyCardSkeleton from "@/components/CompanyCardSkeleton";
import FilterFormData, { FilterFormProps } from "@/components/FilterFormData";
import FormSearch from "@/components/FormSearch";
import JobCard, { JobCardProps } from "@/components/JobCard";
import JobCardSkeleton from "@/components/JobCardSkeleton";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

type ExploreDataContainerProps = {
	formFilter: any;
	onSubmitFilter: (value: any) => Promise<void>;
	formSearch: any;
	onSubmitSearch: (value: any) => Promise<void>;
	filterForms: FilterFormProps[];
	titleContent?: string;
	descriptionContent?: string;
} & (
	| {
			type: "jobs";
			data: JobCardProps[];
			loading: boolean;
	  }
	| {
			type: "companies";
			data: any;
			loading: boolean;
	  }
);

const ExploreDataContainer: FC<ExploreDataContainerProps> = ({
	formFilter,
	onSubmitFilter,
	filterForms,
	formSearch,
	onSubmitSearch,
	descriptionContent,
	titleContent,
	type = "jobs",
	...props
}) => {
	return (
		<>
			<div className="bg-white-background px-32 pt-16 pb-14">
				<div className="mb-10">
					<div className="mx-auto mb-11 text-center flex justify-center gap-2">
						<span className="text-5xl font-semibold">
							Find your
						</span>{" "}
						<div className="relative">
							<span className="text-5xl font-semibold text-blue-500">
								{titleContent}
							</span>
							<div className="absolute top-10 w-[220px] h-10">
								<Image
									src="/images/pattern2.png"
									alt="/images/pattern2.png"
									fill
									objectFit="contain"
								/>
							</div>
						</div>
					</div>
					<div className="text-center text-gray-500">
						{descriptionContent}
					</div>
				</div>
				<div>
					<FormSearch
						form={formSearch}
						onSubmitSearch={onSubmitSearch}
						description={
							type === "jobs"
								? "Popular : UI Designer, UX Researcher, Android, Admin"
								: "Popular : Twitter, Microsoft, Apple, Facebook"
						}
					/>
				</div>
			</div>
			<div className="mt-20 mb-16 px-32 flex flex-row items-start gap-10">
				<FilterFormData
					form={formFilter}
					onSubmit={onSubmitFilter}
					checkboxForm={filterForms}
				/>
				<div className="w-4/5">
					<div className="mb-8">
						<div className="text-3xl font-semibold">
							All {type === "jobs" ? "Jobs" : "Companies"}
						</div>
						<div className="text-gray-500">
							Showing {props.data.length} results
						</div>
					</div>
					{props.loading ? (
						<div
							className={cn(
								type === "jobs"
									? "grid grid-cols-1 gap-4"
									: "grid grid-cols-3 gap-4"
							)}
						>
							{type === "jobs" &&
								[0, 1, 3, 4].map((item: any, i: number) => (
									<JobCardSkeleton key={i} />
								))}
							{type === "companies" &&
								[0, 1, 3, 4].map((item: any, i: number) => (
									<CompanyCardSkeleton key={i} />
								))}
						</div>
					) : (
						<div
							className={cn(
								type === "jobs"
									? "grid grid-cols-1 gap-4"
									: "grid grid-cols-3 gap-4"
							)}
						>
							{type === "jobs" &&
								props.data.map(
									(item: JobCardProps, i: number) => (
										<JobCard key={i} {...item} />
									)
								)}
							{type === "companies" &&
								props.data.map((item: any, i: number) => (
									<CompanyCard
										key={i}
										name="Pattern"
										image="/images/company.png"
										totalJobs={8}
										description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores officia laudantium beatae possimus unde dicta similique perferendis voluptates corrupti, amet odio cum deleniti alias quo pariatur, numquam excepturi magni eos."
										categories={["Marketing", "Blockchain"]}
									/>
								))}
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default ExploreDataContainer;
