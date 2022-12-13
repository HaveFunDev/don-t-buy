import { useEffect, useState } from "react";
import ProductsPage from "../../components/layouts/ProductsPage/ProductsPage";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./Home.module.scss";

const Home = () => {
	const [showSidebar, setShowSidebar] = useState(false);

	useEffect(() => {
		if (window.innerWidth > 768) {
			setShowSidebar(true);
		}
	}, []);

	const applyFilters = () => {
		if (window.innerWidth < 768) {
			setShowSidebar(false);
		}
	};
	return (
		<div className={styles.container}>
			<Sidebar showSidebar={showSidebar} applyFilters={applyFilters} />
			<button
				onClick={() => setShowSidebar(true)}
				className={styles["sort-btn"]}>
				Sort and filter
			</button>
			<ProductsPage />
		</div>
	);
};

export default Home;
