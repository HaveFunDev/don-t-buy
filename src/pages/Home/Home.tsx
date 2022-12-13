import React, { useEffect, useRef, useState } from "react";
import ProductsPage from "../../components/layouts/ProductsPage/ProductsPage";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./Home.module.scss";

const Home = () => {
	const [toggleSidebar, setToggleSidebar] = useState(false);

	return (
		<div className={styles.container}>
			<Sidebar toggleSidebar={toggleSidebar} />
			<button
				onClick={() => setToggleSidebar((prev) => !prev)}
				className={styles["sort-btn"]}>
				Sort and filter
			</button>
			<ProductsPage />
		</div>
	);
};

export default Home;
