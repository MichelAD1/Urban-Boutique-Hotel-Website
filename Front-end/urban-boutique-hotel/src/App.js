import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactModal from "react-modal";
import React, { useState } from "react";

// Components
import Login from "./Components/Auth/Login";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import Home from "./Components/Home/Home";
import Rooms from "./Components/Rooms/Rooms";
import Services from "./Components/Services/Services";
import FindUs from "./Components/FindUs/FindUs";

import Navbar from "./Components/Navbar/Navbar";
import PrivateRoute from "./Routes/PrivateRoutes";

ReactModal.setAppElement("#root");
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<ForgotPassword />} />

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
