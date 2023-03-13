import styles from "./index.module.css";
import Image from "next/image";
import Thumbnail from "@/src/images/thumbnail.avif";
import I_cal from "../../images/cards_cal.svg";
import I_clock from "../../images/cards_clock.svg";
import I_thumbs from "../../images/cards_thumbs.svg";

const PopularAndReviewItem = () => {
	return (
		<>
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
				<div className={styles.infoWrapper}>
					<span className={styles.title}>Muffines with cocoa cream</span>
					<div className={styles.descWrapper}>
						<div className={styles.descWrapper}>
							<span className={styles.iconWrapper}>
								<I_cal height={15} className={styles.icon} />
							</span>
							<span className={styles.desc}>400Cal</span>
						</div>
						<div className={styles.descWrapper}>
							<span className={styles.iconWrapper}>
								<I_clock height={15} className={styles.icon} />
							</span>
							<span className={styles.desc}>20분</span>
						</div>
					</div>
					<div className={styles.descWrapper}>
						<span className={styles.iconWrapper}>
							<I_thumbs height={15} className={styles.icon} />
						</span>
						<span className={styles.thumbs}>210</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default PopularAndReviewItem;
