import BannerSignUp from "@/components/atoms/BannerSignUp";
import Clients from "@/components/atoms/Clients";
import Hero from "@/components/atoms/Hero";
import Category from "@/components/organisms/Category";
import FeaturedJobs from "@/components/organisms/FeaturedJobs";
import LatestJobs from "@/components/organisms/LatestJobs";
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
