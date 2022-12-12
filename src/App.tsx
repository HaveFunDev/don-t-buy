import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/filter/sidebar/Sidebar";
import NavbarDesktop from './components/layouts/navigation/NavbarDesktop'
import Navbar from "./components/layouts/navigation/Navbar";
function App() {
	return (
		<div>
			{/* <NavbarDesktop /> */}
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
