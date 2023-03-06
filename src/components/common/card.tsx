import { PropsWithChildren } from "react";
import styles from "./card.module.css";

const Card = (props: PropsWithChildren) => {
	return (
		<>
			<header className={styles.container}>{props.children}</header>
		</>
	);
};

export default Card;
