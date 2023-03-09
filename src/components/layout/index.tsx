import { PropsWithChildren } from "react";
import { useRouter } from "next/router";
import Nav from "./nav/index";
import Container from "../common/container/index";

import Bg from "../../images/login_bg.jpg";
import Image from "next/image";
import styles from "./index.module.css";

const Layout = (props: PropsWithChildren) => {
	const router = useRouter();

	return (
		<>
			{router.asPath === "/login" ? (
				<>
					<main className={styles.container}>
						<Image
							src={Bg}
							alt='login_bg'
							className={styles.bg}
							placeholder='blur'
						/>
						{props.children}
					</main>
				</>
			) : (
				<>
					<main className={styles.container}>
						<Container>{props.children}</Container>
					</main>
					<Nav />
				</>
			)}
		</>
	);
};

export default Layout;
