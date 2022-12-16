import styles from './GameList.module.scss'
import HeroImg from './HeroImg/HeroImg'
import GameCard from './GameCard/GameCard'

const GameList = () => {
	return (
		<div className={styles.container}>
			<HeroImg />
			<GameCard />
		</div>
	)
}

export default GameList
