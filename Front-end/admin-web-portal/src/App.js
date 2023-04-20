import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import Businesses from "./Componenents/Businesses/Businesses";
import BusinessItem from "./Componenents/Businesses/BusinessItem";
import BusinessesRequests from "./Global/Components/Businesses Request/Requests";
import RequestItem from "./Global/Components/Businesses Request/RequestItem";
import PrivateRoute from "./Routes/PrivateRoutes";
ReactModal.setAppElement("#root");
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<PrivateRoute />}>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Home />
                </>
              }
            />
          </Route>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route
              path="/options"
              element={
                <>
                  <Navbar />
                  <Options />
                </>
              }
            />
          </Route>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route
              path="/businesses"
              element={
                <>
                  <Navbar />
                  <Businesses />
                </>
              }
            />
          </Route>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route
              path="/business/profile"
              element={
                <>
                  <Navbar />
                  <BusinessItem />
                </>
              }
            />
          </Route>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route
              path="/businesses/requests"
              element={
                <>
                  <Navbar />
                  <BusinessesRequests />
                </>
              }
            />
          </Route>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route
              path="/businesses/requests/info"
              element={
                <>
                  <Navbar />
                  <RequestItem />
                </>
              }
            />
          </Route>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route
              path="/users"
              element={
                <>
                  <Navbar />
                  <Users />
                </>
              }
            />
          </Route>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route
              path="/user/profile"
              element={
                <>
                  <Navbar />
                  <UserItem />
                </>
              }
            />
          </Route>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route
              path="/employees"
              element={
                <>
                  <Navbar />
                  <Employees />
                </>
              }
            />
          </Route>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route
              path="/employee/profile"
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
