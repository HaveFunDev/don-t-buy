import styles from './GameList.module.scss'
import HeroImg from '../HeroImg/HeroImg'
import GameCard from '../GameCard/GameCard'

import { useState,useEffect } from 'react'

import { db } from '../../../firebase'
import { collection, getDocs } from 'firebase/firestore'




const GameList = () => {

	const [matchesLG, setMatchesLG] = useState(window.matchMedia('(min-width: 768px)').matches)
	useEffect(() => {
		window.matchMedia('(min-width: 992px)').addEventListener('change', e => setMatchesLG(e.matches))
	}, [])


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
			{matchesLG &&<HeroImg />}
			<GameCard game={games}/>
		</div>
	)
}

export default GameList
