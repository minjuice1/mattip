import { PropsWithChildren } from "react";
import Header from "./header/index";
import Nav from "./nav/index";
import styles from "./index.module.css";

const Layout = (props: PropsWithChildren) => {
	return (
		<>
			<Header />
			<main className={styles.container}>{props.children}</main>
			<Nav />
		</>
	);
};

export default Layout;
