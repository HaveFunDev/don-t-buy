import React, { useEffect, useRef, useState } from 'react'
import GameList from '../../components/layouts/GameList/GameList'
import Sidebar from '../../components/sidebar/Sidebar'
import styles from './Home.module.scss'

const Home = () => {
	const [toggleSidebar, setToggleSidebar] = useState(false)

	return (
		<div className={styles.container}>
			<Sidebar toggleSidebar={toggleSidebar} />
			<button onClick={() => setToggleSidebar(prev => !prev)} className={styles['sort-btn']}>
				Sort and filter
			</button>
			<GameList />
		</div>
	)
}

export default Home
