import styles from "./GameList.module.scss";
import GameCard from "../game-card/GameCard";
import { collection, getDocs } from 'firebase/firestore'
const productList = [
	{
		id: "eldenring",
		title: "Elden Ring",
		platform: "PS4",
		price: 199,
		gallery: [
			"https://ecsmedia.pl/c/elden-ring-edycja-premierowa-b-iext121266583.jpg",
		],
	},
	{
		id: "bloodborne",
		title: "Bloodborne",
		platform: "PS4",
		price: 39,
		gallery: ["https://gameon.pl/1231/bloodborne-ps4-uzywana-pl.jpg"],
	},
	{
		id: "bloodborne",
		title: "Bloodborne",
		platform: "PS4",
		price: 39,
		gallery: ["https://gameon.pl/1231/bloodborne-ps4-uzywana-pl.jpg"],
	},
	{
		id: "bloodborne",
		title: "Bloodborne",
		platform: "PS4",
		price: 39,
		gallery: ["https://gameon.pl/1231/bloodborne-ps4-uzywana-pl.jpg"],
	},
	{
		id: "bloodborne",
		title: "Bloodborne",
		platform: "PS4",
		price: 39,
		gallery: ["https://gameon.pl/1231/bloodborne-ps4-uzywana-pl.jpg"],
	},
];

const GameList = () => {
	





	return (
		<div className={styles.container}>
			{productList.map((product) => (
				<GameCard
					key={product.id}
					id={product.id}
					title={product.title}
					platform={product.platform}
					price={product.price}
				/>
			))}
		</div>
	);
};

export default GameList;
