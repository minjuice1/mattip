import CookingInstructionItem from "../cookingInstructionItem";
import styles from "./index.module.css";

const CookingInstructionCard = () => {
	const list = Array.from({ length: 9 }, (_, i) => i);

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Cooking instruction</h1>

			{list.map((_, i) => (
				<CookingInstructionItem key={i} />
			))}
		</div>
	);
};

export default CookingInstructionCard;
