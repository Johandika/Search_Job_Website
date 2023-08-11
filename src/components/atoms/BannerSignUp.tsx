import React, { FC } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

interface BannerSignUpProps {}

const BannerSignUp: FC<BannerSignUpProps> = ({}) => {
	return (
		<div className="mx-32 mt-32 mb-10 bg-blue-primary text-white px-16 pt-16 flex flex-row justify-between items-start">
			<div>
				<div className="text-5xl font-semibold">
					Start posting <br /> jobs today
				</div>
				<div className="my-6">Start posting jobs for only $10.</div>
				<Button
					size={"lg"}
					className="bg-white text-blue-primary hover:bg-slate-200"
				>
					Sign Up For Free
				</Button>
			</div>
			<div>
				<Image
					src="/images/dashboard.png"
					alt="/images/dashboard.png"
					width={500}
					height={300}
					quality={100}
				/>
			</div>
		</div>
	);
};

export default BannerSignUp;
