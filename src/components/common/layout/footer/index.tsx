import I_Bars from "@/src/images/nav_bars.svg";
import I_House from "@/src/images/nav_house.svg";
import I_List from "@/src/images/nav_list.svg";
import I_mypage from "@/src/images/nav_mypage.svg";
import I_heart from "@/src/images/nav_heart.svg";
import styles from "./index.module.css";

const Footer = () => {
	return (
		<footer className={styles.container}>
			<div className={styles.icons}>
				<span className={styles.icon}>
					<I_Bars height={30} />
				</span>
				<span className={styles.icon}>
					<I_List height={30} />
				</span>
				<span className={styles.mid_icon}>
					<I_House height={30} />
				</span>
				<span className={styles.icon}>
					<I_heart height={30} />
				</span>
				<span className={styles.icon}>
					<I_mypage height={30} />
				</span>
			</div>
		</footer>
	);
};

export default Footer;
