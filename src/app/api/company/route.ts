import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { getPrismaQuery } from "@/lib/utils";

export async function GET(request: Request) {
	const { filterWhere, searchWhere } = getPrismaQuery(request.url);

	const jobs = await prisma.company.findMany({
		where: {
			...filterWhere,
			...searchWhere,
		},
		include: {
			Companyoverview: true,
			_count: {
				select: { Job: true },
			},
		},
	});

	return NextResponse.json(jobs);
}
