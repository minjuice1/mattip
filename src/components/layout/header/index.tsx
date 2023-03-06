import Link from "next/link";
import styles from "./index.module.css";

const Header = () => {
	return (
		<header className={styles.container}>
			<div className={styles.logoBox}>
				<Link href='/' className={styles.logo}>
					Mat Tip
				</Link>
			</div>
		</header>
	);
};

export default Header;
