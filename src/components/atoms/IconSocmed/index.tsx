import {
	InstagramLogoIcon,
	LinkedInLogoIcon,
	TwitterLogoIcon,
} from "@radix-ui/react-icons";
import React, { FC } from "react";
import { BiLogoFacebookSquare } from "react-icons/bi";

interface IconSocmedProps {
	url: string;
	type: "twitter" | "facebook" | "linkedin" | "instagram";
}

const Icon = {
	twitter: <TwitterLogoIcon />,
	facebook: <BiLogoFacebookSquare />,
	linkedin: <LinkedInLogoIcon />,
	instagram: <InstagramLogoIcon />,
};

const IconSocmed: FC<IconSocmedProps> = ({ url, type }) => {
	const CurrentIcon = Icon[type] ?? <></>;

	return (
		<div className="p-2 border border-blue-primary text-blue-primary w-max inline-flex items-center gap-3 font-semibold">
			{CurrentIcon}
			<span className="text-sm">{url}</span>
		</div>
	);
};

export default IconSocmed;
