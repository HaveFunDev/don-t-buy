import { useState, useEffect } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import NavbarItems from './NavbarItems'
import styles from './Navbar.module.scss'
import NavbarButtons from './NavbarButtons'

const Navbar = () => {
	const [isOpen, setOpen] = useState(false)
	const [matches, setMatches] = useState(window.matchMedia('(min-width: 576px)').matches)

	useEffect(() => {
		window.matchMedia('(min-width: 768px)').addEventListener('change', e => setMatches(e.matches))
	}, [])

	return (
		<nav className={styles.nav}>
			{!matches && <Hamburger toggled={isOpen} toggle={setOpen} color={'#9a9a9a'} />}
			<NavbarItems handleNav={isOpen} />
			<NavbarButtons/>
		</nav>
	)
}

export default Navbar
