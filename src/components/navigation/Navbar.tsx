import { useState, useEffect } from "react";
import { Spin as Hamburger } from "hamburger-react";

import NavbarItems from "./NavbarItems/NavbarItems";
import NavbarButtons from "./NavbarButtons/NavbarButtons";
import NavbarHeader from "./NavbarHeader/NavbarHeader";
import styles from "./Navbar.module.scss";

const Navbar = () => {
	const [isOpen, setOpen] = useState(false);

	const [matchesSM, setMatchesSM] = useState(
		window.matchMedia("(min-width: 576px)").matches
	);
	const [matchesMD, setMatchesMD] = useState(
		window.matchMedia("(min-width: 768px)").matches
	);

	useEffect(() => {
		window
			.matchMedia("(min-width: 576px)")
			.addEventListener("change", (e) => setMatchesSM(e.matches));
		window
			.matchMedia("(min-width: 768px)")
			.addEventListener("change", (e) => setMatchesMD(e.matches));
	}, []);

	return (
		<nav className={styles.nav}>
			{!matchesMD && (
				<Hamburger toggled={isOpen} toggle={setOpen} color={"#9a9a9a"} />
			)}
			<NavbarItems handleNav={isOpen} />
			<NavbarHeader />
			{matchesSM && <NavbarButtons />}
		</nav>
	);
};

export default Navbar;
