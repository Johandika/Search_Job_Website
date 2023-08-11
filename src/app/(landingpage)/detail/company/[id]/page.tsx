import BreadCrumbs from "@/components/atoms/BreadCrumbs";
import DetailDescription from "@/components/atoms/DetailDescription";
import IconSocmed from "@/components/atoms/IconSocmed";
import IconWithDetail from "@/components/atoms/IconWithDetail";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import Tag from "@/components/organisms/FeaturedJobs/Tag";
import LatestJobs from "@/components/organisms/LatestJobs";

export default function DetailCompanyPage() {
	return (
		<div>
			<div className="bg-white-background px-32 pt-16 pb-14">
				<BreadCrumbs
					routes={[{ name: "Nomad", path: "/detail/company/1" }]}
				/>

				<div className="mt-10 inline-flex gap-6 items-start">
					<div>
						<Image
							src="/images/company2.png"
							alt="/images/company2.png"
							width={150}
							height={150}
						/>
					</div>
					<div>
						<div className="inline-flex gap-4 items-center">
							<span className="text-4xl font-semibold">
								Pattern
							</span>
							<Badge className="rounded-none py-1 bg-transparent text-blue-primary border border-blue-primary">
								43 Jobs
							</Badge>
						</div>
						<div className="mt-2">
							<Link
								className="font-semibold text-blue-primary text-sm"
								href={"/"}
								target="_blank"
							>
								https://pattern.com
							</Link>
						</div>
						<div className="inline-flex items-center gap-10 mt-6">
							<IconWithDetail
								label="Founded"
								value="July 31, 2011"
								type="founded"
							/>
							<IconWithDetail
								label="Employees"
								value="4000+"
								type="employees"
							/>
							<IconWithDetail
								label="Location"
								value="20 countries"
								type="location"
							/>
							<IconWithDetail
								label="Industry"
								value="Payment Gateway"
								type="industry"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="px-32 py-16 flex flex-row items-start gap-10">
				<div className="w-3/4">
					<DetailDescription
						title="Company Profile"
						desc="<p>Stripe is looking for Social Media Marketingexpert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels.</p>"
					/>
					<div>
						<div className="text-3xl font-semibold mb-4">
							Contact
						</div>
						<div className="flex items-center gap-5 w-[400px] flex-wrap">
							<IconSocmed
								url="twitter.com/pattern"
								type="twitter"
							/>
							<IconSocmed
								url="twitter.com/pattern"
								type="linkedin"
							/>
							<IconSocmed
								url="twitter.com/pattern"
								type="facebook"
							/>
						</div>
					</div>
				</div>
				<div className="w-1/4">
					<div className="text-3xl font-semibold mb-4">
						Tech stack
					</div>
					<div className="text-gray-500 text-sm">
						Learn about the technology and tools that Pattern uses.
					</div>
					<div className="mt-5 inline-flex gap-4">
						<Tag text="Javascript" />
						<Tag text="HTML" />
					</div>
				</div>
			</div>

			<div className="px-32">
				<Separator />
				<div className="my-16">
					<div className="text-3xl font-semibold mb-4">Teams</div>
					<div className="grid grid-cols-5 gap-5 mt-5">
						{[0, 1, 2, 3, 4].map((item: number) => (
							<div
								key={item}
								className="border border-gray-200 px-3 py-5"
							>
								<div className="w-16 h-16 rounded-full mx-auto bg-gray-300"></div>
								<div className="text-center my-4">
									<div className="font-semibold text-sm">
										Célestin Gardinier
									</div>
									<div className="text-gray-500 text-xs">
										CEO & Co-Founder
									</div>
								</div>
								<div className="mx-auto w-max">
									<div className="inline-flex gap-2 text-gray-500">
										<InstagramLogoIcon />
										<LinkedInLogoIcon />
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<Separator />
			</div>
			<LatestJobs />
		</div>
	);
}
