import Footer from "@/components/atoms/Footer";
import Header from "@/components/atoms/Header";
import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "../globals.css";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Job Hunt | Home",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${epilogue.className} relative overflow-x-hidden`}
			>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
