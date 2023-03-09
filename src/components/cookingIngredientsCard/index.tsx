import styles from "./index.module.css";
import CookingIngredientsItem from "../cookingIngredientsItem";

const CookingIngredientsCard = () => {
	const list = Array.from({ length: 9 }, (_, i) => i);

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Ingredients</h1>
			<div className={styles.itemWrapper}>
				{list.map((_, i) => (
					<CookingIngredientsItem key={i} />
				))}
			</div>
		</div>
	);
};

export default CookingIngredientsCard;
