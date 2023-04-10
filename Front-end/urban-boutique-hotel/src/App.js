import "./Global/styles/styles.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactModal from "react-modal";

// Components
import Login from "./Components/Auth/Login";
import ForgotPassword from "./Components/Auth/ForgotPassword";

ReactModal.setAppElement("#root");
function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/reset' element={<ForgotPassword />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
