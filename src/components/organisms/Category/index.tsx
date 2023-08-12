"use client";

import { FC } from "react";

import TitleSection from "@/components/atoms/TitleSection";
import useCategories from "@/hooks/useCategories";
import CategoryItem from "./CategoryItem";

interface CategoryProps {}

const Category: FC<CategoryProps> = ({}) => {
	const { data, isLoading } = useCategories();

	return (
		<div className="px-32 mt-32 mb-8">
			<TitleSection word1="Explore by" word2="category" />
			<div className="grid grid-cols-5 gap-9 mt-12">
				{isLoading ? (
					<>
						{[0, 1, 2, 3, 4].map((item: number) => (
							<CategoryItem key={item} loading={true} />
						))}
					</>
				) : (
					<>
						{data?.map((item: any, i: number) => (
							<CategoryItem
								key={i + item.id}
								id={item.id}
								loading={false}
								name={item.name}
								totalJobs={item._count.Job}
							/>
						))}
					</>
				)}
			</div>
		</div>
	);
};

export default Category;
