import { PropsWithChildren } from "react";
import styles from "./index.module.css";

const Card = (props: PropsWithChildren) => {
	return (
		<>
			<header className={styles.container}>{props.children}</header>
		</>
	);
};

export default Card;
