import Image from "next/image";
import { FC } from "react";
import TitleSection from "../TitleSection";
import JobItem from "./JobItem";

interface LatestJobsProps {}

const LatestJobs: FC<LatestJobsProps> = ({}) => {
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

			<div className="mt-12 grid grid-cols-3 gap-8">
				{[0, 1, 2, 3, 4, 5].map((item: number, i: number) => (
					<JobItem
						key={i}
						image="/images/company2.png"
						name="Social Media Assistant"
						type="Agency"
						location="Paris, France"
						jobType="Full Time"
						categories={["Marketing", "Design"]}
					/>
				))}
			</div>
		</div>
	);
};

export default LatestJobs;
