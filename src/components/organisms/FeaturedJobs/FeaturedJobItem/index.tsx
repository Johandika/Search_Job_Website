import Image from "next/image";
import { FC } from "react";
import Tag from "../Tag";
import Loading from "./Loading";

type FeaturedJobItemProps = {} & (ItemLoadingProps | ItemNonLoadingProps);

type ItemLoadingProps = {
	loading: true;
};

type ItemNonLoadingProps = {
	loading: false;
	image: string;
	jobType: string;
	name: string;
	type: string;
	location: string;
	desc: string;
	categories: string[];
};

const FeaturedJobItem: FC<FeaturedJobItemProps> = (props) => {
	return (
		<div className="border border-slate-200 p-6 cursor-pointer">
			{props.loading ? (
				<Loading />
			) : (
				<>
					<div className="flex flex-row justify-between items-start">
						<Image
							src={props.image}
							alt={props.image}
							width={62}
							height={62}
						/>
						<span className="px-4 py-1 text-xs font-semibold text-blue-primary border border-blue-primary">
							{props.jobType}
						</span>
					</div>
					<div className="my-4">
						<div className="font-semibold text-lg">
							{props.name}
						</div>
						<div className="text-gray-500 mb-3">
							{props.type} · {props.location}
						</div>
						<div
							className="text-gray-400 h-12 line-clamp-2 text-ellipsis"
							dangerouslySetInnerHTML={{ __html: props.desc }}
						></div>
					</div>
					<div className="space-x-2">
						{props.categories.map((item: string, i: number) => (
							<Tag key={i} text={item} />
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default FeaturedJobItem;
