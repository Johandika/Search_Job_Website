import { FC } from "react";
import FeaturedJobItem from "./FeaturedJobItem";
import TitleSection from "@/components/atoms/TitleSection";
import useJobs from "@/hooks/useJobs";

interface FeaturedJobsProps {}

const FeaturedJobs: FC<FeaturedJobsProps> = ({}) => {
	const { jobs, isLoading } = useJobs();

	console.log(jobs);

	return (
		<div className="px-32 mt-32 mb-10">
			<TitleSection word1="Featured" word2="jobs" />
			<div className="grid grid-cols-4 gap-8 mt-12">
				{isLoading ? (
					<>
						{[0, 1, 2, 3].map((item: number, i: number) => (
							<FeaturedJobItem loading={true} key={i} />
						))}
					</>
				) : (
					<>
						{jobs?.map((item: any, i: number) => (
							<FeaturedJobItem
								image={item.image}
								jobType={item.jobType}
								name={item.roles}
								type={item.companyType}
								location={item.location}
								desc={item.description}
								categories={item.requiredSkills}
								loading={false}
								key={i}
							/>
						))}
					</>
				)}
			</div>
		</div>
	);
};

export default FeaturedJobs;
