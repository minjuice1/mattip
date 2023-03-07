import styles from "./index.module.css";
import I_fav from "../../images/nav_heart.svg";
import I_share from "../../images/cards_share.svg";
import I_clock from "../../images/cards_clock.svg";
import I_cal from "../../images/cards_cal.svg";
import I_type from "../../images/cards_type.svg";

const CookingDescCard = () => {
	return (
		<div className={styles.container}>
			<div className={styles.titleAndIcon}>
				<h1 className={styles.title}>Greek salad</h1>
				<div className={styles.iconWrapper}>
					<I_fav className={styles.featureIcon} />
					<I_share className={styles.featureIcon} />
				</div>
			</div>
			<h3 className={styles.serve}>1인분 기준</h3>
			<div className={styles.descWrapper}>
				<div className={styles.desc}>
					<I_clock className={styles.icon} />
					<span>30분</span>
				</div>
				<div className={styles.desc}>
					<I_cal className={styles.icon} />
					<span>234Cal</span>
				</div>
				<div className={styles.desc}>
					<I_type className={styles.icon} />
					<span>샐러드</span>
				</div>
			</div>
		</div>
	);
};

export default CookingDescCard;
