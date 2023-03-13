import { PropsWithChildren } from "react";
import styles from "./index.module.css";

const Card = (props: PropsWithChildren) => {
	return (
		<>
			<div className={styles.container}>{props.children}</div>
		</>
	);
};

export default Card;
