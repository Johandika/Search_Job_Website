import TitleSection from "@/components/atoms/TitleSection";
import useJobsLanding from "@/hooks/api/useJobsLanding";
import { sortingParamsType } from "@/types";
import Image from "next/image";
import { FC } from "react";
import JobItem from "./JobItem";
import JobItemLoading from "./JobItemLoading";

interface LatestJobsProps {}

const TYPES_SORTING: sortingParamsType = {
	field: "roles",
	orderType: "asc",
};

const LatestJobs: FC<LatestJobsProps> = ({}) => {
	const { jobs, isLoading, isError } = useJobsLanding(
		undefined,
		TYPES_SORTING
	);

	return (
		<div className="px-32 py-16 mt-32 bg-white-background relative">
			<div className="absolute w-2/3 top-0 right-0 -z-10">
				<Image
					src="/images/pattern3.png"
					alt="/images/pattern3.png"
					fill
				/>
			</div>
			<TitleSection word1="Latest" word2="jobs open" />

			{isLoading ? (
				<div className="mt-12 grid grid-cols-3 gap-8">
					{[0, 1, 2].map((i: number) => (
						<JobItemLoading key={i} />
					))}
				</div>
			) : (
				<div className="mt-12 grid grid-cols-3 gap-8">
					{jobs?.map((item: any, i: number) => (
						<JobItem
							key={i + item.id}
							image={item.image}
							name={item.roles}
							type={item.companyType}
							location={item.location}
							jobType={item.jobType}
							categories={item.requiredSkills.slice(0, 2)}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default LatestJobs;
