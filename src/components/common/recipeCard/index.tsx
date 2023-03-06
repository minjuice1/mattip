import Image from "next/image";
import Thumbnail from "@/src/images/thumbnail.avif";
import I_cal from "../../../images/cards_cal.svg";
import I_clock from "../../../images/cards_clock.svg";
import styles from "./index.module.css";

const RecipeCard = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imageWrapper}>
				<Image
					className={styles.img}
					src={Thumbnail}
					alt='thumbnail'
					width={150}
					height={150}
				/>
			</div>
			<div className={styles.info}>
				<span className={styles.title}>Muffines with cocoa cream</span>
				<div>
					<div className={styles.descWrapper}>
						<span className={styles.icon}>
							<I_cal height={17} />
						</span>
						<span className={styles.desc}>400</span>cal
					</div>
					<div className={styles.descWrapper}>
						<span className={styles.icon}>
							<I_clock height={17} />
						</span>
						<span className={styles.desc}>20</span>Min
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecipeCard;
