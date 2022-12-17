import React, { useEffect, useRef, useState } from 'react'
import GameList from '../../components/layouts/GameList/GameList'
import Sidebar from '../../components/sidebar/Sidebar'
import styles from './Home.module.scss'
import HeroImg from '../../components/layouts/HeroImg/HeroImg'

const Home = () => {
	const [toggleSidebar, setToggleSidebar] = useState(false)

	const [matchesLG, setMatchesLG] = useState(window.matchMedia('(min-width: 768px)').matches)
	useEffect(() => {
		window.matchMedia('(min-width: 992px)').addEventListener('change', e => setMatchesLG(e.matches))
	}, [])

	return (
		<div className={styles.container}>
			{!matchesLG && <HeroImg />}
			<Sidebar toggleSidebar={toggleSidebar} />
			<button onClick={() => setToggleSidebar(prev => !prev)} className={styles['sort-btn']}>
				Sort and filter
			</button>
			<GameList />
		</div>
	)
}

export default Home
