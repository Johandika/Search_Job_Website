"use client";

import Link from "next/link";
import React, { FC, useEffect, useState } from "react";

type routeProp = {
	name: string;
	path: string;
};

interface BreadCrumbsProps {
	routes?: routeProp[];
}

const BreadCrumbs: FC<BreadCrumbsProps> = ({ routes = [] }) => {
	const [paths, setPaths] = useState<routeProp[]>([
		{
			name: "Home",
			path: "/",
		},
		{
			name: "Companies",
			path: "/find-companies",
		},
	]);

	useEffect(() => {
		setPaths([...paths, ...routes!!]);
	}, []);

	return (
		<div className="text-gray-500 text-sm">
			{paths.map((item: routeProp, i: number) => (
				<span
					key={i}
					className="inline-flex gap-2 text-gray-500 last:text-black"
				>
					<span> </span>
					<Link className="hover:underline" href={item.path}>
						{item.name}
					</Link>{" "}
					{i + 1 < paths.length && <>/ </>}
				</span>
			))}
		</div>
	);
};

export default BreadCrumbs;
