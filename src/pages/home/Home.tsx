import React, { useEffect, useRef, useState } from "react";
import GameList from "../../components/games-list/GameList";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./Home.module.scss";
import MainCard from "../../components/main-game-card/MainCard";

const Home = () => {
	const [toggleSidebar, setToggleSidebar] = useState(false);

	return (
		<div className={styles.container}>
			<Sidebar toggleSidebar={toggleSidebar} />
			<div className={styles["main-content"]}>
				<MainCard />
				<button
					onClick={() => setToggleSidebar((prev) => !prev)}
					className={styles["sort-btn"]}>
					Sort and filter
				</button>
				<GameList />
			</div>
		</div>
	);
};

export default Home;
