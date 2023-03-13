import CookingDescCard from "@/src/components/cookingDescCard";
import CookingImageCard from "@/src/components/cookingImageCard";
import CookingIngredientsCard from "@/src/components/cookingIngredientsCard";
import CookingInstructionCard from "@/src/components/cookingInstructionCard";
import styles from "./index.module.css";

const RecipeDetailPage = () => {
	return (
		<div className={styles.container}>
			<CookingImageCard />
			<CookingDescCard />
			<CookingIngredientsCard />
			<CookingInstructionCard />
		</div>
	);
};

export default RecipeDetailPage;
