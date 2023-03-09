import TodayRecipeItem from "../todayRecipeItem";
import styles from "./index.module.css";

const TodayRecipeCard = () => {
	const list = Array.from({ length: 5 }, (_, i) => i);

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>오늘의 레시피</h2>
			<ul className={styles.recipeWrapper}>
				{list.map((_, i) => (
					<TodayRecipeItem key={i} />
				))}
			</ul>
		</div>
	);
};

export default TodayRecipeCard;
