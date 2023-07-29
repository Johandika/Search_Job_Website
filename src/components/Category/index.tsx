import { FC } from "react";

import TitleSection from "../TitleSection";
import CategoryItem from "./CategoryItem";

interface CategoryProps {}

const Category: FC<CategoryProps> = ({}) => {
	return (
		<div className="px-32 mt-32 mb-8">
			<TitleSection word1="Explore by" word2="category" />
			<div className="grid grid-cols-5 gap-9 mt-12">
				{[0, 1, 2, 3, 4].map((item: number, i: number) => (
					<CategoryItem key={i} name="Design" totalJobs={235} />
				))}
			</div>
		</div>
	);
};

export default Category;
