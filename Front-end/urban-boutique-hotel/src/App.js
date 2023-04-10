import "./Global/styles/styles.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactModal from "react-modal";

// Components
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";

ReactModal.setAppElement("#root");
function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
