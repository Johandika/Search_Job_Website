"use client";

import Image from "next/image";
import React, { FC } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
	const router = useRouter();

	return (
		<header className="px-32 py-5 flex flex-row items-start justify-between">
			<div className="inline-flex items-center gap-12">
				<div>
					<Image
						onClick={() => router.push("/")}
						className="cursor-pointer"
						src="/images/logo2.png"
						alt="/images/logo2.png"
						width={160}
						height={36}
					/>
				</div>
				<div>
					<Link
						href="/find-jobs"
						className="font-medium text-gray-600 mr-4 cursor-pointer"
					>
						Find Jobs
					</Link>
					<Link
						href="/find-companies"
						className="font-medium text-gray-600 cursor-pointer"
					>
						Browse Companies
					</Link>
				</div>
			</div>
			<div className="inline-flex items-center gap-4 h-8">
				<Button
					onClick={() => router.push("/auth/signin")}
					variant="link"
				>
					Login
				</Button>
				<Separator orientation="vertical" />
				<Button onClick={() => router.push("/auth/signup")}>
					Sign Up
				</Button>
			</div>
		</header>
	);
};

export default Header;
