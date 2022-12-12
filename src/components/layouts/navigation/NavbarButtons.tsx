import styles from './NavbarButtons.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faHeart,faGamepad,faFaceSmile} from '@fortawesome/free-solid-svg-icons'

const haveFunIcon = <FontAwesomeIcon icon={faGamepad} className={styles['btn__icon']} />
const cartIcon = <FontAwesomeIcon icon={faCartShopping} className={styles['btn__icon']} />
const favouriteIcon = <FontAwesomeIcon icon={faHeart} className={styles['btn__icon']} />
const profileIcon = <FontAwesomeIcon icon={faFaceSmile} className={styles['btn__icon']} />

const NavbarButtons = () => {
	return (
		<div className={styles.container} >
			<button className={styles['btn']}>{haveFunIcon}</button>
			<button className={styles['btn']}>{cartIcon}</button>
			<button className={styles['btn']}>{favouriteIcon}</button>
			<button className={styles['btn']}>{profileIcon}</button>
		</div>
	)
}

export default NavbarButtons
