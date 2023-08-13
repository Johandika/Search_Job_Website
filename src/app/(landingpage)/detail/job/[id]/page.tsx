import BreadCrumbs from "@/components/atoms/BreadCrumbs";
import DetailDescription from "@/components/atoms/DetailDescription";
import DialogApply from "@/components/organisms/DialogApply";
import Tag from "@/components/organisms/FeaturedJobs/Tag";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import Image from "next/image";
import prisma from "../../../../../../lib/prisma";
import { dateFormat, parseJob } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const revalidate = 0;

export const metadata: Metadata = {
	title: "Dashboard | Detail Job",
};

async function getDetailJob(id: string) {
	const data = await prisma.job.findFirst({
		where: {
			id,
		},
		include: {
			Company: {
				include: {
					Companyoverview: true,
				},
			},
			CategoryJob: true,
		},
	});

	return parseJob(data);
}

async function getApplicantById() {
	const session = await getServerSession(authOptions);

	if (!session) {
		return {
			isApply: null,
			totalApplicants: 0,
		};
	}

	const isApply = await prisma.applicant.count({
		where: {
			userId: session?.user.id,
		},
	});

	const applicants = await prisma.applicant.count();

	return {
		isApply,
		totalApplicants: applicants,
	};
}

export default async function DetailJobPage({
	params,
}: {
	params: { id: string };
}) {
	const data = await getDetailJob(params.id);
	const { isApply, totalApplicants } = await getApplicantById();

	return (
		<>
			<div className="bg-white-background px-32 pt-10 pb-14">
				<BreadCrumbs
					routes={[
						{
							name: data.company.name,
							path: `/detail/company/${data.company.id}`,
						},
						{
							name: "Social Media Assistant",
							path: `/detail/job/${data.id}`,
						},
					]}
				/>

				<div className="bg-white shadow mt-10 p-5 w-11/12 mx-auto flex flex-row justify-between items-center">
					<div className="inline-flex items-center gap-5">
						<div>
							<Image
								src={data.image}
								alt={data.image}
								width={88}
								height={88}
							/>
						</div>
						<div>
							<div className="text-2xl font-semibold">
								{data.roles}
							</div>
							<div className="text-gray-600">
								{data.category.name} · {data.location} ·{" "}
								{data.jobType}
							</div>
						</div>
					</div>
					<DialogApply job={data} isApply={isApply} />
				</div>
			</div>
			<div className="px-32 py-16 flex flex-row items-start gap-10">
				<div className="w-3/4">
					<DetailDescription
						title="Description"
						desc={data.description}
					/>
					<DetailDescription
						title="Responsibilities"
						desc={data.responsibility}
					/>
					<DetailDescription
						title="Who You Are"
						desc={data.whoYouAre}
					/>
					<DetailDescription
						title="Nice-To-Haves"
						desc={data.niceToHaves}
					/>
				</div>
				<div className="w-1/4">
					<div>
						<div className="text-3xl font-semibold">
							About this role
						</div>

						<div className="mt-6 p-4 bg-[#F8F8FD]">
							<div className="mb-2">
								<span className="font-semibold">
									{totalApplicants} applied
								</span>{" "}
								<span className="text-gray-600">
									of {data.needs} capacity
								</span>
							</div>
							<Progress
								value={
									((totalApplicants * data.needs) / 100) * 100
								}
							/>
						</div>

						<div className="mt-6 space-y-4">
							<div className="flex flex-row justify-between">
								<div className="text-gray-500">
									Apply Before
								</div>
								<div className="font-semibold">
									{dateFormat(data.dueDate)}
								</div>
							</div>
							<div className="flex flex-row justify-between">
								<div className="text-gray-500">
									Job Posted On
								</div>
								<div className="font-semibold">
									{dateFormat(data.datePosted)}
								</div>
							</div>
							<div className="flex flex-row justify-between">
								<div className="text-gray-500">Job Type</div>
								<div className="font-semibold">
									{data.jobType}
								</div>
							</div>
							<div className="flex flex-row justify-between">
								<div className="text-gray-500">Salary</div>
								<div className="font-semibold">
									${data.salaryFrom}-${data.salaryTo} USD
								</div>
							</div>
						</div>
					</div>

					<Separator className="my-10" />

					<div>
						<div className="text-3xl font-semibold">Categories</div>

						<div className="my-10 inline-flex gap-4">
							<Tag text={data.category.name} />
						</div>
					</div>

					<Separator className="my-10" />

					<div>
						<div className="text-3xl font-semibold">
							Required Skills
						</div>

						<div className="my-5 inline-flex gap-4">
							{data.requiredSkills.map(
								(item: string, i: number) => (
									<Badge
										key={i}
										className="rounded-none bg-blue-50 py-2 text-blue-primary hover:bg-blue-50"
									>
										{item}
									</Badge>
								)
							)}
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
					{data.benefits.map((item: any, i: number) => (
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
								{item.benefit}
							</div>
							<div className="mt-3 text-sm text-gray-500">
								{item.description}
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
