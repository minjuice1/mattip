import styles from "./index.module.css";
import I_Filter from "../../images/filter.svg";
import I_Search from "../../images/search.svg";

const RecipeSearch = () => {
	return (
		<>
			<div className={styles.container}>
				<I_Search className={styles.search} />
				<input className={styles.input} placeholder='레시피를 검색해주세요' />
				<span className={styles.filterWrapper}>
					<I_Filter className={styles.filter} />
				</span>
			</div>
		</>
	);
};

export default RecipeSearch;
