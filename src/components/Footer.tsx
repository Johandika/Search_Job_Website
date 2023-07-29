import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

interface FooterProps {}

const aboutList = ["Companies", "Pricing", "Terms", "Advice", "Privacy Policy"];
const resources = ["Help Docs", "Guide", "Updates", "Contact Us"];
const socialMedias = [
	"/images/soc-Facebook.png",
	"/images/soc-Instagram.png",
	"/images/soc-Twitter.png",
	"/images/soc-LinkedIn.png",
	"/images/soc-Dribbble.png",
];

const Footer: FC<FooterProps> = ({}) => {
	return (
		<footer className="bg-[#202430] text-white px-32 pt-16 pb-11">
			<div className="flex flex-row items-start justify-between">
				<div>
					<Image
						src="/images/logo.png"
						alt="/images/logo.png"
						width={160}
						height={36}
					/>
					<div className="text-slate-300 mt-8">
						Great platform for the job seeker that <br /> passionate
						about startups. Find your dream job <br /> easier.
					</div>
				</div>
				<div>
					<div className="text-lg font-semibold mb-5">About</div>
					<div className="space-y-4">
						{aboutList.map((item: string, i: number) => (
							<Link
								className="block text-slate-300"
								key={i}
								href="/"
							>
								{item}
							</Link>
						))}
					</div>
				</div>
				<div>
					<div className="text-lg font-semibold mb-5">Resources</div>
					<div className="space-y-4">
						{resources.map((item: string, i: number) => (
							<Link
								className="block text-slate-300"
								key={i}
								href="/"
							>
								{item}
							</Link>
						))}
					</div>
				</div>
				<div>
					<div className="text-lg font-semibold mb-5">
						Get job notifications
					</div>
					<div className="text-slate-300">
						The latest job news, articles, sent to <br /> your inbox
						weekly.
					</div>
					<div className="mt-10 inline-flex items-center gap-3">
						<Input placeholder="Email Address" className="py-5" />
						<Button className="py-5">Subscribe</Button>
					</div>
				</div>
			</div>
			<Separator className="mt-20 mb-11 bg-slate-700" />
			<div className="flex flex-row items-center justify-between">
				<div className="text-slate-600">
					2021 @ JobHuntly. All rights reserved.
				</div>
				<div className="space-x-3">
					{socialMedias.map((item: string, i: number) => (
						<Image
							className="inline"
							src={item}
							alt={item}
							width={32}
							height={32}
							key={i}
						/>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
