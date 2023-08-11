import { FC } from "react";
import FeaturedJobItem from "./FeaturedJobItem";
import TitleSection from "@/components/atoms/TitleSection";

interface FeaturedJobsProps {}

const FeaturedJobs: FC<FeaturedJobsProps> = ({}) => {
	return (
		<div className="px-32 mt-32 mb-10">
			<TitleSection word1="Featured" word2="jobs" />
			<div className="grid grid-cols-4 gap-8 mt-12">
				{[0, 1, 2, 3].map((item: number, i: number) => (
					<FeaturedJobItem
						image="/images/company.png"
						jobType="Full Time"
						name="Email Marketing"
						type="Agency"
						location="Paris, France"
						desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Explicabo facere sint consequatur distinctio non.
					Consequuntur eveniet dolores iste eligendi nulla culpa
					adipisci, repudiandae pariatur accusantium autem nisi"
						categories={["Marketing", "Design"]}
						key={i}
					/>
				))}
			</div>
		</div>
	);
};

export default FeaturedJobs;
