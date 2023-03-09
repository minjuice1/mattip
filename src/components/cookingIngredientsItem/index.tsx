import styles from "./index.module.css";
import Img2 from "../../images/img2.webp";
import Image from "next/image";

const CookingIngredientsItem = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgWrapper}>
				<Image src={Img2} alt='ingredients' className={styles.img} />
			</div>
			<div className={styles.descWrapper}>
				<span className={styles.title}>토마토</span>
				<span className={styles.desc}>1 토마토</span>
			</div>
		</div>
	);
};

export default CookingIngredientsItem;
