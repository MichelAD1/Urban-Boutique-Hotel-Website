import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactModal from "react-modal";

// Components
import Login from "./Components/Auth/Login";

ReactModal.setAppElement("#root");
function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Routes>
					<Route path='/' element={<Login />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
