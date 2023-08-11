import { Epilogue } from "next/font/google";
import Image from "next/image";

import "../globals.css";

const epilogue = Epilogue({ subsets: ["latin"] });

export default function AuthPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${epilogue.className} relative overflow-x-hidden`}
			>
				<main className="grid grid-cols-2">
					<div className="relative h-screen">
						<div className="absolute w-full h-full">
							<Image
								src="/images/bg-auth.png"
								alt="/images/bg-auth.png"
								fill
								objectFit="cover"
								objectPosition="top"
							/>
						</div>
					</div>
					<div className="w-full relative">
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
							{children}
						</div>
					</div>
				</main>
			</body>
		</html>
	);
}
