import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Wrapper from "./components/UI/Wrapper/Wrapper";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
function App() {
	return (
		<Wrapper>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</Wrapper>
	);
}

export default App;
