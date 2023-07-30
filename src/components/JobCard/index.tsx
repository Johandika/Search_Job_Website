import Image from "next/image";
import { FC } from "react";
import Tag from "../FeaturedJobs/Tag";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export interface JobCardProps {
	image: string;
	name: string;
	type: string;
	location: string;
	jobType: string;
	categories: string[];
	needs: number;
	applicants: number;
}

const JobCard: FC<JobCardProps> = ({
	categories,
	image,
	jobType,
	location,
	name,
	type,
	applicants,
	needs,
}) => {
	return (
		<div className="w-full border mb-5 p-6 border-gray-300 flex flex-row justify-between items-center">
			<div className="flex flex-row items-start gap-6">
				<div>
					<Image src={image} alt={image} width={64} height={64} />
				</div>
				<div>
					<div className="text-lg font-semibold">{name}</div>
					<div className="text-sm text-gray-500 mb-2">
						{type} · {location}
					</div>
					<div className="h-5 inline-flex gap-2 items-center">
						<Badge variant="secondary">{jobType}</Badge>
						<Separator orientation="vertical" />
						{categories.map((item: string, i: number) => (
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
