import LoginBtn from "@/src/components/loginBtn";
import styles from "./index.module.css";

const LoginPage = () => {
	return (
		<>
			<h1 className={styles.title}>MatTip</h1>
			<LoginBtn text={"카카오 로그인"} bottom={270} />
			<LoginBtn text={"구글 로그인"} bottom={210} />
		</>
	);
};

export default LoginPage;
