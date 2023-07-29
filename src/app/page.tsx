import BannerSignUp from "@/components/BannerSignUp";
import Category from "@/components/Category";
import Clients from "@/components/Clients";
import FeaturedJobs from "@/components/FeaturedJobs";
import Hero from "@/components/Hero";
import LatestJobs from "@/components/LatestJobs";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<div className="bg-white-background w-full h-screen absolute top-0 -z-10" />
			<div className="absolute w-2/3 h-screen top-0 right-0 -z-10">
				<Image
					src="/images/pattern.png"
					alt="/images/pattern.png"
					fill
				/>
			</div>
			<section>
				<Hero />
				<Clients />
				<Category />
				<BannerSignUp />
				<FeaturedJobs />
				<LatestJobs />
			</section>
		</>
	);
}
