import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { stringToObject } from "@/lib/utils";

const DEFAULT_LIMIT = 6;

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const limit = searchParams.get("limit") ?? DEFAULT_LIMIT;
	const sorting = stringToObject(searchParams.get("sorting")) ?? null;
	const isFilter = searchParams.get("filter");
	const filtering =
		JSON.parse(isFilter === null ? "{}" : isFilter) ?? undefined;

	const isSearch = searchParams.get("search");
	const searching =
		JSON.parse(isSearch === null ? "{}" : isSearch) ?? undefined;

	const filterWhere = isFilter === "{}" ? {} : { ...filtering };
	const searchWhere = isSearch === "{}" ? {} : { ...searching };

	const jobs = await prisma.job.findMany({
		take: parseInt(limit.toString()),
		where: {
			...filterWhere,
			...searchWhere,
		},
		orderBy: [{ ...sorting }],
		include: {
			CategoryJob: true,
			Company: {
				include: {
					Companyoverview: true,
				},
			},
		},
	});

	return NextResponse.json(jobs);
}
