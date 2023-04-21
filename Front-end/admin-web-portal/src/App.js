import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ReactModal from "react-modal";

// Componenents
import Navbar from "./Componenents/NavBar/Navbar";
import Login from "./Componenents/LogIn/Login";
import Home from "./Componenents/Home/Home";
import Employees from "./Componenents/Employees/Employees";
import EmployeeItem from "./Componenents/Employees/EmployeeItem";
import Users from "./Componenents/Users/Users";
import Support from "./Componenents/Support/Support";
import ReviewItem from "./Componenents/Support/ReviewItem";
import FeedbackItem from "./Componenents/Support/FeedbackItem";
import UserItem from "./Componenents/Users/UserItem";
import Options from "./Componenents/Options/Options";
import Finance from "./Componenents/Finance/Finance";
import Rooms from "./Componenents/Rooms/Rooms";
import RoomItem from "./Componenents/Rooms/RoomItem";
import MaintenanceRequest from "./Global/Components/Maintenance Request/Requests";
import RequestItem from "./Global/Components/Maintenance Request/RequestItem";
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
							path='/support'
							element={
								<>
									<Navbar />
									<Support />
								</>
							}
						/>
					</Route>
					<Route exact path='/' element={<PrivateRoute />}>
						<Route
							path='/support/review'
							element={
								<>
									<Navbar />
									<ReviewItem />
								</>
							}
						/>
					</Route>
					<Route exact path='/' element={<PrivateRoute />}>
						<Route
							path='/support/feedback'
							element={
								<>
									<Navbar />
									<FeedbackItem />
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
							path='/maintenance/requests'
							element={
								<>
									<Navbar />
									<MaintenanceRequest />
								</>
							}
						/>
					</Route>
					<Route exact path='/' element={<PrivateRoute />}>
						<Route
							path='/maintenance/requests/info'
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
					<Route exact path='/finance' element={<PrivateRoute />}>
						<Route
							path='/finance'
							element={
								<>
									<Navbar />
									<Finance />
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
