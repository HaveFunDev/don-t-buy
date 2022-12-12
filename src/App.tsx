import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/filter/sidebar/Sidebar";
import Navbar from "./components/layouts/navigation/Navbar";
import styles from "./app.module.scss";
import { useEffect, useState } from "react";
function App() {
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
		<div>
			<Navbar />
			<BrowserRouter>
				{/* Please change it later to styles.container */}
				<div className="container">
					<Sidebar showSidebar={showSidebar} applyFilters={applyFilters} />
					<button
						onClick={() => setShowSidebar(true)}
						className={styles["sort-btn"]}>
						Sort and filter
					</button>
					{/* Content */}
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
