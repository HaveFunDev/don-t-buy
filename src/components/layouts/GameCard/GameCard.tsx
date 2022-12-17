import styles from './GameCard.module.scss'
import { useState, useEffect } from 'react'
import { db } from '../../../firebase'
import { collection, getDocs } from 'firebase/firestore'

// const productList = [
// 	{
// 		id: 'eldenring',
// 		title: 'Elden Ring',
// 		platform: 'PS4',
// 		price: 199,
// 		gallery: ['https://ecsmedia.pl/c/elden-ring-edycja-premierowa-b-iext121266583.jpg'],
// 	},
// 	{
// 		id: 'bloodborne',
// 		title: 'Bloodborne',
// 		platform: 'PS4',
// 		price: 39,
// 		gallery: ['https://gameon.pl/1231/bloodborne-ps4-uzywana-pl.jpg'],
// 	},
// 	{
// 		id: 'bloodborne',
// 		title: 'Bloodborne',
// 		platform: 'PS4',
// 		price: 39,
// 		gallery: ['https://gameon.pl/1231/bloodborne-ps4-uzywana-pl.jpg'],
// 	},
// 	{
// 		id: 'bloodborne',
// 		title: 'Bloodborne',
// 		platform: 'PS4',
// 		price: 39,
// 		gallery: ['https://gameon.pl/1231/bloodborne-ps4-uzywana-pl.jpg'],
// 	},
// 	{
// 		id: 'bloodborne',
// 		title: 'Bloodborne',
// 		platform: 'PS4',
// 		price: 39,
// 		gallery: ['https://gameon.pl/1231/bloodborne-ps4-uzywana-pl.jpg'],
// 	},
// ]

const GameCard = () => {
	const [games, setGames] = useState([])

	const gamesCollectionRef = collection(db, 'games')

	useEffect(() => {
		const getGames = async () => {
			const data = await getDocs(gamesCollectionRef)
			setGames(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
		}

		getGames()
	}, [])

	return (
		<div className={styles['products__container']}>
			{/* {productList.map(product => {
				return (
					<div key={product.id} className={styles['products__item']}>
						<img className={styles['products__item-img']} src={product.gallery[0]} alt={`${product.title} cover`} />
						<h3 className={styles['products__item-title']}>{product.title}</h3>
						<p className={styles['products__item-platform']}>{product.platform}</p>
						<div className={styles['products__item-box']}>
							<p className={styles['products__item-price']}>{product.price}zł</p>
							<button className={styles['products__item-btn']}>Buy</button>
						</div>
					</div>
				)
			})} */}

			{games.map(game => {
				return (
					<div key={game.id} className={styles['products__item']}>
						<img className={styles['products__item-img']} src={game.gallery[0]} alt={`${game.title}cover`} />
						<h3 className={styles['products__item-title']}>{game.title}</h3>
						<p className={styles['products__item-platform']}>{game.platform}</p>
						<div className={styles['products__item-box']}>
							<p className={styles['products__item-price']}>{game.price}zł</p>
							<button className={styles['products__item-btn']}>Buy</button>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default GameCard
