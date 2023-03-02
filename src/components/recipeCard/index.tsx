import Image from "next/image";
import Thumbnail from "../../images/thumbnail.avif";
import I_cal from "../../images/cards_cal.svg";
import I_clock from "../../images/cards_clock.svg";
import styles from "./index.module.css";

const RecipeCard = () => {
	return (
		<div className={styles.container}>
			<div className={styles.pic}>
				<Image
					className={styles.image}
					src={Thumbnail}
					alt='thumbnail'
					width={150}
					height={150}
				/>
			</div>
			<div className={styles.infos}>
				<span className={styles.title}>Muffines with cocoa cream</span>
				<div>
					<div className={styles.desc}>
						<span className={styles.icon}>
							<I_cal height={18} />
						</span>
						<span className={styles.desc_number}>400</span>Cal
					</div>
					<div className={styles.desc}>
						<span className={styles.icon}>
							<I_clock height={18} />
						</span>
						<span className={styles.desc_number}>20</span>Min
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecipeCard;
