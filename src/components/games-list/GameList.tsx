import styles from "./GameList.module.scss";
import GameCard from "../game-card/GameCard";
import { useGetCollectionData } from "../../hooks/useGetCollectionData";
import { store } from "../../store/index";
import { useEffect, useRef, useState } from "react";

interface Game {
	id: string;
	title: string;
	platform: string;
	price: number;
	gallery: string;
}

const GameList = () => {
	const [filters, setFilters] = useState<any>();
	useEffect(() => {
		store.subscribe(() => setFilters(store.getState().filters));
	}, []);

	const { data: games } = useGetCollectionData("games", [
		"PlayStation 5",
		"PlayStation 4",
	]);

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
