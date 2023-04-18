import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ReactModal from "react-modal";
import { useState, useEffect } from "react";

// Components
import Login from "./Components/Auth/Login";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import Home from "./Components/Home/Home";
import Rooms from "./Components/Rooms/Rooms";
import RoomsItem from "./Components/Rooms/RoomsItem";
import Services from "./Components/Services/Services";
import FindUs from "./Components/FindUs/FindUs";
import Discover from "./Components/Discover/Discover";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import PrivateRoute from "./Routes/PrivateRoutes";

import ScrollToTop from "./Global/Function/ScrollToTop";

ReactModal.setAppElement("#root");
function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/reset' element={<ForgotPassword />} />

					 <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/rooms"
            element={
              <>
                <Navbar />
                <Rooms />
              </>
            }
          />
          <Route
            path="/rooms/:id"
            element={
              <>
                <RoomsItem />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Navbar />
                <Services />
              </>
            }
          />
          <Route
            path="/findus"
            element={
              <>
                <Navbar />
                <FindUs />
              </>
            }
          />
          <Route
            path="/discover"
            element={
              <>
                <Navbar />
                <Discover />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
