import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDragon } from '@fortawesome/free-solid-svg-icons'

import styles from './NavbarHeader.module.scss'

const logo = <FontAwesomeIcon icon={faDragon} className={styles['header__icon']} />

const NavbarHeader = () => {
	return (
		<div className={styles.header}>
			<h2 className={styles['header__heading']}>Don't Buy</h2>
			{logo}
		</div>
	)
}

export default NavbarHeader
