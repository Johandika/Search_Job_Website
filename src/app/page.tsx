import BannerSignUp from "@/components/BannerSignUp";
import Category from "@/components/Category";
import Clients from "@/components/Clients";
import FeaturedJobs from "@/components/FeaturedJobs";
import Hero from "@/components/Hero";

export default function Home() {
	return (
		<section className="">
			<Hero />
			<Clients />
			<Category />
			<BannerSignUp />
			<FeaturedJobs />
		</section>
	);
}
