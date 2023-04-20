import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = () => {
	// const auth = localStorage.getItem("token");
	return true ? <Outlet /> : <Navigate to='/login' replace={true} />;
};

export default PrivateRoute;
