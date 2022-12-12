import styles from './NavbarItems.module.scss'

const categories = ['Streams', 'Game Store', 'News', 'Other']

const NavbarItems = props => {
	return (
		<div className={`${styles.items} ${props.handleNav ? styles.active : ''}`}>
			<ul className={styles['items__list']}>
				{/* This categories have to be dynamic  */}
				{categories.map(item => (
					<li className={styles['items__list-item']}>{item}</li>
				))}
			</ul>
		</div>
	)
}

export default NavbarItems
