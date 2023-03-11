import LoginBtn from "@/src/components/loginBtn";
import styles from "./index.module.css";

const LoginPage = () => {
	return (
		<>
			<h1 className={styles.title}>MatTip</h1>

			<h2 className={styles.subTitle}>
				<span> 맛팁과 함께</span>
				<span>
					<span className={styles.strong}>맛있는 레시피</span>를
				</span>
				<span> 만들어보세요!</span>
			</h2>
			<LoginBtn text={"카카오 로그인"} bottom={235} />
			<LoginBtn text={"구글 로그인"} bottom={165} />
		</>
	);
};

export default LoginPage;
