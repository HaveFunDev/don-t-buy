import styles from './ProductsPage.module.scss'
import HeroImg from './HeroImg/HeroImg'
import Products from './Products/Products'



const ProductsPage = () => {
	return (
		<div className={styles.container}>
			<HeroImg />
			<Products/>
		</div>
	)
}

export default ProductsPage
