import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/filter/sidebar/Sidebar";

function App() {
	return (
		<div>
			{/* Navbar here */}
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
