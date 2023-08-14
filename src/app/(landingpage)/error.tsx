"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	useEffect(() => {
		console.log(error);
	}, [error]);

	return (
		<div className="px-60 py-20 text-center">
			<Image
				src="/images/nodata.png"
				alt="/images/nodata.png"
				width={500}
				height={500}
				className="block mx-auto"
			/>
			<div className="text-3xl font-semibold">Something went wrong</div>
			<div className="text-gray-500 font-semibold mt-2">
				We try to fix this, please try again
			</div>
			<Button onClick={() => reset()} className="mt-5">
				Try Again
			</Button>
		</div>
	);
}
