import Image from "next/image";
import { StaticImageData } from "next/image";
import I_clock from "../../images/cards_clock.svg";
import I_thumbs from "../../images/cards_thumbs.svg";
import styles from "./index.module.css";

export interface RecipeInfo {
	image: StaticImageData;
}

const AllRecipeCard = ({ image }: RecipeInfo) => {
	return (
		<div className={styles.container}>
			<Image src={image} alt='dish_img' className={styles.img} />
			<div className={styles.descWrapper}>
				<span className={styles.title}>Penne pasta tomato</span>
				<div className={styles.timeAndFavWrapper}>
					<span className={styles.time}>
						<I_clock className={styles.icon} />
						30분
					</span>
					<span className={styles.fav}>
						<I_thumbs className={styles.icon} />
						999
					</span>
				</div>
			</div>
		</div>
	);
};

export default AllRecipeCard;
