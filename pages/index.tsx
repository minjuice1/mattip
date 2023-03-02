import Footer from "../src/components/common/layout/footer";
import Header from "../src/components/common/layout/header";
import styles from "../styles/homepage.module.css";

const HomePage = () => {
	return (
		<>
			<Header />
			<main className={styles.container}>
				<div className={styles.warpper}></div>
			</main>
			<Footer />
		</>
	);
};

export default HomePage;
