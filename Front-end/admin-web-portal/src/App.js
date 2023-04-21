import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ReactModal from "react-modal";

// Componenents
import Navbar from "./Componenents/NavBar/Navbar";
import Login from "./Componenents/LogIn/Login";
import Home from "./Componenents/Home/Home";
import Employees from "./Componenents/Employees/Employees";
import EmployeeItem from "./Componenents/Employees/EmployeeItem";
import Users from "./Componenents/Users/Users";
import UserItem from "./Componenents/Users/UserItem";
import Options from "./Componenents/Options/Options";
import Rooms from "./Componenents/Rooms/Rooms";
import RoomItem from "./Componenents/Rooms/RoomItem";
import BusinessesRequests from "./Global/Components/Businesses Request/Requests";
import RequestItem from "./Global/Components/Businesses Request/RequestItem";
import PrivateRoute from "./Routes/PrivateRoutes";

ReactModal.setAppElement("#root");
function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route exact path='/' element={<PrivateRoute />}>
						<Route
							path='/'
							element={
								<>
									<Navbar />
									<Home />
								</>
							}
						/>
					</Route>
					<Route exact path='/' element={<PrivateRoute />}>
						<Route
							path='/options'
							element={
								<>
									<Navbar />
									<Options />
								</>
							}
						/>
					</Route>
					<Route exact path='/' element={<PrivateRoute />}>
						<Route
							path='/rooms'
							element={
								<>
									<Navbar />
									<Rooms />
								</>
							}
						/>
					</Route>
					<Route exact path='/' element={<PrivateRoute />}>
						<Route
							path='/room/profile'
							element={
								<>
									<Navbar />
									<RoomItem />
								</>
							}
						/>
					</Route>
					<Route exact path='/' element={<PrivateRoute />}>
						<Route
							path='/businesses/requests'
							element={
								<>
									<Navbar />
									<BusinessesRequests />
								</>
							}
						/>
					</Route>
					<Route exact path='/' element={<PrivateRoute />}>
						<Route
							path='/businesses/requests/info'
							element={
								<>
									<Navbar />
									<RequestItem />
								</>
							}
						/>
					</Route>
					<Route exact path='/' element={<PrivateRoute />}>
						<Route
							path='/users'
							element={
								<>
									<Navbar />
									<Users />
								</>
							}
						/>
					</Route>
					<Route exact path='/' element={<PrivateRoute />}>
						<Route
							path='/user/profile'
							element={
								<>
									<Navbar />
									<UserItem />
								</>
							}
						/>
					</Route>
					<Route exact path='/' element={<PrivateRoute />}>
						<Route
							path='/employees'
							element={
								<>
									<Navbar />
									<Employees />
								</>
							}
						/>
					</Route>
					<Route exact path='/' element={<PrivateRoute />}>
						<Route
							path='/employee/profile'
							element={
								<>
									<Navbar />
									<EmployeeItem />
								</>
							}
						/>
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
