import styles from "./index.module.css";

type PropsType = {
	text: string;
	bottom: number;
};

const LoginBtn = ({ text, bottom }: PropsType) => {
	return (
		<div
			className={styles.container}
			style={{ top: `calc(100% - ${bottom}px)` }}
		>
			<button className={styles.button}>{text}</button>
		</div>
	);
};

export default LoginBtn;
