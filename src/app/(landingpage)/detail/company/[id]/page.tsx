import BreadCrumbs from "@/components/atoms/BreadCrumbs";
import DetailDescription from "@/components/atoms/DetailDescription";
import IconSocmed from "@/components/atoms/IconSocmed";
import IconWithDetail from "@/components/atoms/IconWithDetail";
import Tag from "@/components/organisms/FeaturedJobs/Tag";
import LatestJobsOpen from "@/components/organisms/LatestJobsOpen";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { dateFormat, parseCompany } from "@/lib/utils";
import { teamCompanyType } from "@/types/company";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import prisma from "../../../../../../lib/prisma";

export const revalidate = 0;

export const metadata: Metadata = {
	title: "Dashboard | Detail Company",
};

async function getDetailCompany(id: string) {
	const data = await prisma.company.findFirst({
		where: {
			id,
		},
		include: {
			Companyoverview: true,
			CompanySocialMedia: true,
			CompanyTeam: true,
			Job: {
				include: {
					CategoryJob: true,
				},
			},
			_count: {
				select: {
					Job: true,
				},
			},
		},
	});

	return parseCompany(data);
}

export default async function DetailCompanyPage({
	params,
}: {
	params: { id: string };
}) {
	const data = await getDetailCompany(params.id);

	return (
		<div>
			<div className="bg-white-background px-32 pt-16 pb-14">
				<BreadCrumbs
					routes={[
						{
							name: data.detail?.name!!,
							path: `/detail/company/${data.id}`,
						},
					]}
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
								{data.detail?.name}
							</span>
							<Badge className="rounded-none py-1 bg-transparent text-blue-primary border border-blue-primary">
								{data.totalJobs} Jobs
							</Badge>
						</div>
						<div className="mt-2">
							<Link
								className="font-semibold text-blue-primary text-sm"
								href={data.detail?.website!!}
								target="_blank"
							>
								{data.detail?.website}
							</Link>
						</div>
						<div className="inline-flex items-center gap-10 mt-6">
							<IconWithDetail
								label="Founded"
								value={dateFormat(
									data.detail?.dateFounded,
									"MMMM, DD YYYY"
								)}
								type="founded"
							/>
							<IconWithDetail
								label="Employees"
								value={data.detail?.employee}
								type="employees"
							/>
							<IconWithDetail
								label="Location"
								value={data.detail?.location}
								type="location"
							/>
							<IconWithDetail
								label="Industry"
								value={data.detail?.industry}
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
						desc={data.detail?.description}
					/>
					<div>
						<div className="text-3xl font-semibold mb-4">
							Contact
						</div>
						<div className="flex items-center gap-5 w-[400px] flex-wrap">
							<IconSocmed
								url={data.socialMedia?.twitter}
								type="twitter"
							/>
							<IconSocmed
								url={data.socialMedia?.linkedin}
								type="linkedin"
							/>
							<IconSocmed
								url={data.socialMedia?.facebook}
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
					<div className="mt-5 flex flex-row flex-wrap gap-4">
						{data.detail?.techStack.map(
							(tech: string, i: number) => (
								<Tag key={i} text={tech} />
							)
						)}
					</div>
				</div>
			</div>

			<div className="px-32">
				<Separator />
				<div className="my-16">
					<div className="text-3xl font-semibold mb-4">Teams</div>
					<div className="grid grid-cols-5 gap-5 mt-5">
						{data.teams.map((team: teamCompanyType, i: number) => (
							<div
								key={i + team.id}
								className="border border-gray-200 px-3 py-5"
							>
								<div className="w-16 h-16 rounded-full mx-auto bg-gray-300"></div>
								<div className="text-center my-4">
									<div className="font-semibold text-sm">
										{team.name}
									</div>
									<div className="text-gray-500 text-xs">
										{team.position}
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
			<LatestJobsOpen jobs={data.latestJobs} />
		</div>
	);
}
