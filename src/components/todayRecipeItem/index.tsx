import styles from "./index.module.css";
import Image from "next/image";

import Thumbnail from "../../images/thumbnail.avif";

const TodayRecipeItem = () => {
	return (
		<>
			<li className={styles.container}>
				<div className={styles.imageWrapper}>
					<Image src={Thumbnail} alt='thumbnail' className={styles.img} />
				</div>
				<div className={styles.info}>
					<span className={styles.title}>Penne pasta tomato</span>
					<div className={styles.descWrapper}>
						<span className={styles.desc}>30Cal</span>
						<span className={styles.desc}>30분</span>
					</div>
				</div>
			</li>
		</>
	);
};

export default TodayRecipeItem;
