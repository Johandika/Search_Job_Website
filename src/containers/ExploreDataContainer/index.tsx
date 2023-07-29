"use client";

import FilterFormData, { FilterFormProps } from "@/components/FilterFormData";
import FormSearch from "@/components/FormSearch";
import JobCard from "@/components/JobCard";
import Image from "next/image";
import { FC } from "react";

interface ExploreDataContainerProps {
	formFilter: any;
	onSubmitFilter: (value: any) => Promise<void>;
	filterForms: FilterFormProps[];
}

const ExploreDataContainer: FC<ExploreDataContainerProps> = ({
	formFilter,
	onSubmitFilter,
	filterForms,
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
								dream job
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
						Find your next career at companies like HubSpot, Nike,
						and Dropbox
					</div>
				</div>
				<div>
					<FormSearch />
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
						<div className="text-3xl font-semibold">All Jobs</div>
						<div className="text-gray-500">Showing 73 results</div>
					</div>
					<JobCard
						name="Social Media Assistant"
						image="/images/company.png"
						jobType="Full-Time"
						location="Paris, France"
						categories={["Marketing", "Design"]}
						type="Agency"
						applicants={5}
						needs={10}
					/>
				</div>
			</div>
		</>
	);
};

export default ExploreDataContainer;
