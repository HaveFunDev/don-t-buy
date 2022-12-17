import styles from "./GameList.module.scss";
import { useState,useEffect } from "react";
import GameCard from "../game-card/GameCard";
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'



const GameList = () => {
	const [games, setGames] = useState([])

	const gamesCollectionRef = collection(db, 'games')

	useEffect(() => {
		const getGames = async () => {
			const data= await getDocs(gamesCollectionRef)
			setGames(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
		}

		getGames()
	}, [])


	return (
		<div className={styles.container}>
			{games.map((game) => (
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
