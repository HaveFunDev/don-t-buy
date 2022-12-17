import styles from './GameCard.module.scss'


//Please check it, I am not sure that is correct
interface Props {
	game: Array<any>;
}

const GameCard = (props:Props) => {

	return (
		<div className={styles['products__container']}>
			
			{props.game.map(item => {
				return (
					<div key={item.id} className={styles['products__item']}>
						<img className={styles['products__item-img']} src={item.gallery[0]} alt={`${item.title}cover`} />
						<h3 className={styles['products__item-title']}>{item.title}</h3>
						<p className={styles['products__item-platform']}>{item.platform}</p>
						<div className={styles['products__item-box']}>
							<p className={styles['products__item-price']}>{item.price}zł</p>
							<button className={styles['products__item-btn']}>Buy</button>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default GameCard
