import styles from './NavbarItems.module.scss'
import NavbarButtons from '../NavbarButtons/NavbarButtons'

// This categories have to be dynamic
const categories = ['Streams', 'Game Store', 'News', 'Other']

// change this props to tsx standard
const NavbarItems = props => {
	return (
		<div className={`${styles.items} ${props.handleNav ? styles.active : ''}`}>
			<div className={styles.btns}>
				<NavbarButtons />
			</div>
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
