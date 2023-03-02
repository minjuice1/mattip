import styles from "./index.module.css";

const Layout = (props: any) => {
	return <div className={styles.container}>{props.children}</div>;
};

export default Layout;
