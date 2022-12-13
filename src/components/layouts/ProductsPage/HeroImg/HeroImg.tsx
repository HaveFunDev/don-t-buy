import styles from './HeroImg.module.scss'
const heroImg = () => {
	return (
		<div className={styles['hero__box']} style={{ backgroundImage: "url(/image.png)" }}>
			<img className={styles['hero__img']} src="https://www.euro.com.pl/files/storage/article/photo/33/6a/2a/4384424089b47efd354db089d5/EldenRing_big.png" alt="heroImg" />

		</div>
	)
}

export default heroImg
