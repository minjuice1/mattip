import styles from "./index.module.css";

type PropsType = {
	text: string;
};

const LoginBtn = ({ text }: PropsType) => {
	return (
		<div className={styles.container}>
			<button className={styles.button}>{text}</button>
		</div>
	);
};

export default LoginBtn;
