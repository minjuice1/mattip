import RecipeSearch from "../components/recipeSearch";
import RecommendRecipe from "../components/recommendRecipe";
import TodayRecipe from "../components/todayRecipe";
import styles from "./index.module.css";

const HomePage = () => {
	return (
		<>
			<h1 className={styles.title}>
				맛팁과 함께 <span className={styles.strong}>맛있는 레시피</span>를
				만들어보세요!
			</h1>
			<RecipeSearch />
			<TodayRecipe />
			<RecommendRecipe />
		</>
	);
};

export default HomePage;
