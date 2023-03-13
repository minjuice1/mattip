import styles from "./index.module.css";
import I_exit from "../../../images/exit.svg";

const ExitBtn = () => {
	return (
		<div className={styles.container}>
			<I_exit className={styles.icon} />
		</div>
	);
};

export default ExitBtn;
