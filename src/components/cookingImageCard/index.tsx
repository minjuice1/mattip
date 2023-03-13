import Image from "next/image";
import styles from "./index.module.css";
import ExitBtn from "../common/exitBtn";
import Thumbnail from "@/src/images/thumbnail.avif";

const CookingImageCard = () => {
	return (
		<>
			<div className={styles.imageWrapper}>
				<Image src={Thumbnail} alt='thumbnail' className={styles.img} />
			</div>
			<ExitBtn />
		</>
	);
};

export default CookingImageCard;
