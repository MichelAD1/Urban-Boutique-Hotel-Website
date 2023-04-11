import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactModal from "react-modal";

// Components
import Login from "./Components/Auth/Login";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

ReactModal.setAppElement("#root");
function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Navbar />
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/reset' element={<ForgotPassword />} />
					<Route path='/' element={<Home />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
