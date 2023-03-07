import AllRecipeCard from "@/src/components/allRecipesCard";
import Masonry from "react-masonry-css";
import Img1 from "@/src/images/img1.jpg";
import styles from "./index.module.css";

const AllRecipePage = () => {
	const list = Array.from({ length: 10 }, (_, i) => i);

	const breakpointColumnsObj = {
		default: 3,
		1100: 2,
		700: 1,
		500: 1,
	};

	return (
		<>
			<div className={styles.container}>
				<Masonry
					breakpointCols={breakpointColumnsObj}
					className='my-masonry-grid'
					columnClassName='my-masonry-grid_column'
				>
					{list.map((_, i) => (
						<AllRecipeCard key={i} image={Img1} />
					))}
				</Masonry>
			</div>
		</>
	);
};

export default AllRecipePage;
