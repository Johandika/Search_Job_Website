"use client";

import Image from "next/image";
import { FC } from "react";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Separator } from "../../ui/separator";
import Tag from "@/components/organisms/FeaturedJobs/Tag";
import { useRouter } from "next/navigation";

export interface JobCardProps {
	image: string;
	roles: string;
	category: string;
	location: string;
	jobType: string;
	requiredSkills: string[];
	needs: number;
	applicants: number;
	id: string;
}

const JobCard: FC<JobCardProps> = ({
	requiredSkills,
	image,
	jobType,
	location,
	roles,
	category,
	applicants,
	needs,
	id,
}) => {
	const router = useRouter();

	const handleClickJob = () => router.push(`/detail/job/${id}`);

	return (
		<div
			onClick={handleClickJob}
			className="w-full border mb-5 p-6 border-gray-300 flex flex-row justify-between items-center"
		>
			<div className="flex flex-row items-start gap-6">
				<div>
					<Image src={image} alt={image} width={64} height={64} />
				</div>
				<div>
					<div className="text-lg font-semibold">{roles}</div>
					<div className="text-sm text-gray-500 mb-2">
						{category} · {location}
					</div>
					<div className="h-5 inline-flex gap-2 items-center">
						<Badge variant="secondary">{jobType}</Badge>
						<Separator orientation="vertical" />
						{requiredSkills.map((item: string, i: number) => (
							<Tag key={i} text={item} />
						))}
					</div>
				</div>
			</div>
			<div className="w-[200px]">
				<Button className="w-full" size="lg">
					Apply
				</Button>
				<div className="w-full h-2 mt-2 relative bg-gray-300">
					<div
						style={{ width: `${(applicants / needs) * 100}%` }}
						className="absolute h-2 bg-green-500"
					></div>
				</div>
				<div className="text-gray-500 text-sm text-center mt-2">
					<span className="text-black font-semibold">
						{applicants} applied
					</span>{" "}
					of {needs} capacity
				</div>
			</div>
		</div>
	);
};

export default JobCard;
