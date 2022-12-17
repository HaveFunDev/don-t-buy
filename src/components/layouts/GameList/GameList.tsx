import styles from './GameList.module.scss'
import HeroImg from '../HeroImg/HeroImg'
import GameCard from '../GameCard/GameCard'

import { useState,useEffect } from 'react'
const GameList = () => {

	const [matchesLG, setMatchesLG] = useState(window.matchMedia('(min-width: 768px)').matches)
	useEffect(() => {
		window.matchMedia('(min-width: 992px)').addEventListener('change', e => setMatchesLG(e.matches))
	}, [])
	return (
	


		<div className={styles.container}>
			{matchesLG &&<HeroImg />}
			<GameCard />
		</div>
	)
}

export default GameList
