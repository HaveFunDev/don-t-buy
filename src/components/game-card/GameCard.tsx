import styles from "./GameCard.module.scss";

interface Props {
	id: string;
	title: string;
	platform: string;
	price: number;
}

const dummImg = "https://gameon.pl/1231/bloodborne-ps4-uzywana-pl.jpg";

const GameCard = (props: Props) => (
	<div key={props.id} className={styles["products__item"]}>
		<img
			className={styles["products__item-img"]}
			src={dummImg}
			alt={`${props.title} cover`}
		/>
		<h3 className={styles["products__item-title"]}>{props.title}</h3>
		<p className={styles["products__item-platform"]}>{props.platform}</p>
		<div className={styles["products__item-box"]}>
			<p className={styles["products__item-price"]}>{props.price}zł</p>
			<button className={styles["products__item-btn"]}>Buy</button>
		</div>
	</div>
);

export default GameCard;
