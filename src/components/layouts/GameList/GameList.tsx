import styles from './GameList.module.scss'
import HeroImg from './HeroImg/HeroImg'
import GameCard from './GameCard/GameCard'
import Test from '../../test/Test'

const GameList = () => {
	return (
		<div className={styles.container}>
			<HeroImg />
			<GameCard />
			<Test/>
		</div>
	)
}

export default GameList
