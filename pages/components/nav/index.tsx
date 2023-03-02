import I_Bars from "../../../public/nav_bars.svg";
import I_House from "../../../public/nav_house.svg";
import I_List from "../../../public/nav_list.svg";
import I_mypage from "../../../public/nav_mypage.svg";
import I_heart from "../../../public/nav_heart.svg";
import styles from "./index.module.css";

const Nav = () => {
	return (
		<div className={styles.container}>
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
		</div>
	);
};

export default Nav;
