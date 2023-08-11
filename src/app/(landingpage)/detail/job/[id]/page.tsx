"use client";

import BreadCrumbs from "@/components/atoms/BreadCrumbs";
import DetailDescription from "@/components/atoms/DetailDescription";
import DialogApply from "@/components/organisms/DialogApply";
import Tag from "@/components/organisms/FeaturedJobs/Tag";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function DetailJobPage() {
	return (
		<>
			<div className="bg-white-background px-32 pt-10 pb-14">
				<BreadCrumbs
					routes={[
						{ name: "Nomad", path: "/detail/company/1" },
						{
							name: "Social Media Assistant",
							path: "/detail/job/1",
						},
					]}
				/>

				<div className="bg-white shadow mt-10 p-5 w-11/12 mx-auto flex flex-row justify-between items-center">
					<div className="inline-flex items-center gap-5">
						<div>
							<Image
								src="/images/company.png"
								alt="/images/company.png"
								width={88}
								height={88}
							/>
						</div>
						<div>
							<div className="text-2xl font-semibold">
								Social Media Assistant
							</div>
							<div className="text-gray-600">
								Agency · Paris, France · Full-Time
							</div>
						</div>
					</div>
					<DialogApply />
				</div>
			</div>
			<div className="px-32 py-16 flex flex-row items-start gap-10">
				<div className="w-3/4">
					<DetailDescription
						title="Description"
						desc={
							"<p>Stripe is looking for Social Media Marketingexpert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels.</p>"
						}
					/>
					<DetailDescription
						title="Responsibilities"
						desc={
							"<p>Stripe is looking for Social Media Marketingexpert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels.</p>"
						}
					/>
					<DetailDescription
						title="Who You Are"
						desc={
							"<p>Stripe is looking for Social Media Marketingexpert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels.</p>"
						}
					/>
					<DetailDescription
						title="Nice-To-Haves"
						desc={
							"<p>Stripe is looking for Social Media Marketingexpert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels.</p>"
						}
					/>
				</div>
				<div className="w-1/4">
					<div>
						<div className="text-3xl font-semibold">
							About this role
						</div>

						<div className="mt-6 p-4 bg-[#F8F8FD]">
							<div className="mb-2">
								<span className="font-semibold">5 applied</span>{" "}
								<span className="text-gray-600">
									of 10 capacity
								</span>
							</div>
							<Progress value={50} />
						</div>

						<div className="mt-6 space-y-4">
							<div className="flex flex-row justify-between">
								<div className="text-gray-500">
									Apply Before
								</div>
								<div className="font-semibold">
									July 31, 2021
								</div>
							</div>
							<div className="flex flex-row justify-between">
								<div className="text-gray-500">
									Job Posted On
								</div>
								<div className="font-semibold">
									July 1, 2021
								</div>
							</div>
							<div className="flex flex-row justify-between">
								<div className="text-gray-500">Job Type</div>
								<div className="font-semibold">Full-Time</div>
							</div>
							<div className="flex flex-row justify-between">
								<div className="text-gray-500">Salary</div>
								<div className="font-semibold">
									$75k-$85k USD
								</div>
							</div>
						</div>
					</div>

					<Separator className="my-10" />

					<div>
						<div className="text-3xl font-semibold">Categories</div>

						<div className="my-10 inline-flex gap-4">
							<Tag text="Marketing" key={1} />
							<Tag text="Design" key={2} />
						</div>
					</div>

					<Separator className="my-10" />

					<div>
						<div className="text-3xl font-semibold">
							Required Skills
						</div>

						<div className="my-5 inline-flex gap-4">
							<Badge className="rounded-none bg-blue-50 py-2 text-blue-primary hover:bg-blue-50">
								Project Management
							</Badge>
							<Badge className="rounded-none bg-blue-50 py-2 text-blue-primary  hover:bg-blue-50">
								Copywriting
							</Badge>
						</div>
					</div>
				</div>
			</div>

			<div className="px-32 py-16">
				<Separator className="mb-14" />

				<div className="mb-6">
					<div className="font-semibold text-3xl">
						Perks & Benefits
					</div>
					<div className="text-gray-500 mt-1">
						This job comes with several perks and benefits
					</div>
				</div>

				<div className="grid grid-cols-5 gap-5">
					{[0, 1, 2, 3, 4].map((item: number, i: number) => (
						<div key={i}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-12 h-12 text-blue-primary"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
								/>
							</svg>
							<div className="font-semibold text-xl mt-6">
								Full Healthcare
							</div>
							<div className="mt-3 text-sm text-gray-500">
								We believe in thriving communities and that
								starts with our team being happy and healthy.
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
