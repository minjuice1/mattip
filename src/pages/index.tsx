import RecipeSearch from "../components/recipeSearch";
import TodayCard from "../components/common/todayCard";
import PopularAndReviewCard from "../components/popularAndReviewCard";
import styles from "./index.module.css";

const HomePage = () => {
	const list = Array.from({ length: 5 }, (_, i) => i);

	return (
		<>
			<h1 className={styles.title}>
				맛팁과 함께 <span className={styles.strong}>맛있는 레시피</span>를
				만들어보세요!
			</h1>
			<RecipeSearch />
			<h2 className={styles.subtitle}>오늘의 레시피</h2>
			<ul className={styles.recipeWrapper}>
				{list.map((_, i) => (
					<TodayCard key={i} />
				))}
			</ul>
			<div className={styles.subtitleWrapper}>
				<h2 className={styles.subtitle}>인기 레시피</h2>
				<button className={styles.see_all}>see all</button>
			</div>
			<ul className={styles.recipeWrapper}>
				{list.map((_, i) => (
					<PopularAndReviewCard key={i} />
				))}
			</ul>
		</>
	);
};

export default HomePage;
