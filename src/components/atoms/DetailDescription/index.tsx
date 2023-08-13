import { FC } from "react";

interface DetailDescriptionProps {
	title: string;
	desc: string | undefined;
}

const DetailDescription: FC<DetailDescriptionProps> = ({ desc, title }) => {
	return (
		<div className="mb-10">
			<div className="mb-4 text-3xl font-semibold">{title}</div>
			<div
				className="text-gray-500 text-sm"
				dangerouslySetInnerHTML={{ __html: desc ? desc : "" }}
			></div>
		</div>
	);
};

export default DetailDescription;
