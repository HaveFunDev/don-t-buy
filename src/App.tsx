import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/filter/sidebar/Sidebar";
import Navbar from "./components/layouts/navigation/Navbar";
function App() {
	return (
		<div>
			<Navbar/>
			<BrowserRouter>
				{/* Please change it later to styles.container */}
				<div className="container">
					<Sidebar />
					{/* Content */}
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
