"use client";

import TitleSection from "@/components/atoms/TitleSection";
import { JobType } from "@/types/job";
import Image from "next/image";
import React, { FC } from "react";
import JobItem from "../LatestJobs/JobItem";

interface LatestJobsOpenProps {
	jobs: JobType[];
}

const LatestJobsOpen: FC<LatestJobsOpenProps> = ({ jobs }) => {
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
				{jobs.map((item: JobType, i: number) => (
					<JobItem
						key={i + item.id}
						id={item.id}
						image={item.image}
						name={item.roles}
						type={item.category.name}
						location={item.location}
						jobType={item.jobType}
						categories={item.requiredSkills.slice(0, 2)}
					/>
				))}
			</div>
		</div>
	);
};

export default LatestJobsOpen;
