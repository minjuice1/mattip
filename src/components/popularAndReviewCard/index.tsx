import PopularAndReviewItem from "../popularAndReviewItem";
import styles from "./index.module.css";

const PopularAndReviewCard = () => {
	const list = Array.from({ length: 5 }, (_, i) => i);

	return (
		<>
			<div className={styles.subtitleWrapper}>
				<h2 className={styles.subtitle}>인기 레시피</h2>
				<button className={styles.see_all}>see all</button>
			</div>
			<ul className={styles.recipeWrapper}>
				{list.map((_, i) => (
					<PopularAndReviewItem key={i} />
				))}
			</ul>
		</>
	);
};

export default PopularAndReviewCard;
