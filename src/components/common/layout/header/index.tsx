import styles from "./index.module.css";

const Header = () => {
	return (
		<header className={styles.container}>
			<div className={styles.logoBox}>
				<span className={styles.logo}>Mat Tip</span>
			</div>
		</header>
	);
};

export default Header;
