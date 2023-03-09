import AllRecipeCard from "@/src/components/allRecipesCard";
import Masonry from "react-responsive-masonry";
import Img1 from "@/src/images/img1.jpg";
import styles from "./index.module.css";

const AllRecipePage = () => {
	const list = Array.from({ length: 10 }, (_, i) => i);

	return (
		<>
			<div className={styles.container}>
				<Masonry columnsCount={3}>
					{list.map((_, i) => (
						<AllRecipeCard key={i} image={Img1} />
					))}
				</Masonry>
			</div>
		</>
	);
};

export default AllRecipePage;
