import styles from './GameCard.module.scss'

const productList = [
	{
		id: 'eldenring',
		title: 'Elden Ring',
		platform: 'PS4',
		price: 199,
		gallery: ['https://ecsmedia.pl/c/elden-ring-edycja-premierowa-b-iext121266583.jpg'],
	},
	{
		id: 'bloodborne',
		title: 'Bloodborne',
		platform: 'PS4',
		price: 39,
		gallery: ['https://gameon.pl/1231/bloodborne-ps4-uzywana-pl.jpg'],
	},
	{
		id: 'bloodborne',
		title: 'Bloodborne',
		platform: 'PS4',
		price: 39,
		gallery: ['https://gameon.pl/1231/bloodborne-ps4-uzywana-pl.jpg'],
	},
	{
		id: 'bloodborne',
		title: 'Bloodborne',
		platform: 'PS4',
		price: 39,
		gallery: ['https://gameon.pl/1231/bloodborne-ps4-uzywana-pl.jpg'],
	},
	{
		id: 'bloodborne',
		title: 'Bloodborne',
		platform: 'PS4',
		price: 39,
		gallery: ['https://gameon.pl/1231/bloodborne-ps4-uzywana-pl.jpg'],
	},
]

const GameCard = () => {
	return (
		<div className={styles['products__container']}>
			{productList.map(product => {
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
			})}
		</div>
	)
}

export default GameCard
