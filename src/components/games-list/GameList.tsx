import styles from "./GameList.module.scss";
import GameCard from "../game-card/GameCard";
import { useGetCollectionData } from "../../hooks/useGetCollectionData";

interface Game {
	id: string;
	title: string;
	platform: string;
	price: number;
	gallery: string;
}

const GameList = () => {
	const { data: games } = useGetCollectionData("games");

	return (
		<div className={styles.container}>
			{games &&
				games.map((game: Game) => (
					<GameCard
						key={game.id}
						id={game.id}
						title={game.title}
						platform={game.platform}
						price={game.price}
						gallery={game.gallery[0]}
					/>
				))}
		</div>
	);
};

export default GameList;
