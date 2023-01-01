import styles from './GameList.module.scss'
import { useState, useEffect } from 'react'
import GameCard from '../game-card/GameCard'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'

interface Game {
	id: string
	title: string
	platform: string
	price: number
	gallery: string
}

const GameList = () => {
	const [games, setGames] = useState<Game[]>([])

	const gamesCollectionRef = collection(db, 'games')

	// useEffect(() => {
	// 	const getGames = async () => {
	// 		const data= await getDocs(gamesCollectionRef)
	// 		setGames(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
	// 	}

	// 	getGames()
	// }, [])
	useEffect(() => {
		const getGames = async () => {
			const data = await getDocs(gamesCollectionRef)
			setGames(
				data.docs.map(doc => ({
					id: doc.id,
					title: doc.data().title,
					platform: doc.data().platform,
					price: doc.data().price,
					gallery: doc.data().gallery,
				}))
			)
		}

		getGames()
	}, [])

	return (
		<div className={styles.container}>
			{games.map((game: Game) => (
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
	)
}

export default GameList
