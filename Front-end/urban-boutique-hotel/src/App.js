import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ReactModal from "react-modal";
import { useState, useEffect } from "react";

// Components
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import Home from "./Components/Home/Home";
import Rooms from "./Components/Rooms/Rooms";
import RoomsItem from "./Components/Rooms/RoomsItem";
import Book from "./Components/Rooms/Book";
import Services from "./Components/Services/Services";
import FindUs from "./Components/FindUs/FindUs";
import Discover from "./Components/Discover/Discover";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Account from "./Components/Account/Account";
import AccountNav from "./Components/Navbar/AccountNav";

import Profile from "./Components/Account/Profile";
import Preferences from "./Components/Account/Preferences";
import Security from "./Components/Account/Security";

import ScrollToTop from "./Global/Function/ScrollToTop";
import PageNotFound from "./Global/Components/PageNotFound";

ReactModal.setAppElement("#root");
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset" element={<ForgotPassword />} />

          <Route
            path="/"
            element={
              <>
                <ScrollToTop />
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/rooms"
            element={
              <>
                <ScrollToTop />
                <Navbar />
                <Rooms />
              </>
            }
          />
          <Route
            path="/rooms/:roomname"
            element={
              <>
                <ScrollToTop />
                <RoomsItem />
              </>
            }
          />
          <Route
            path="/rooms/booking"
            element={
              <>
                <ScrollToTop />
                <Book />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <ScrollToTop />
                <Navbar />
                <Services />
              </>
            }
          />
          <Route
            path="/findus"
            element={
              <>
                <ScrollToTop />
                <Navbar />
                <FindUs />
              </>
            }
          />
          <Route
            path="/discover"
            element={
              <>
                <ScrollToTop />
                <Navbar />
                <Discover />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <ScrollToTop />
                <Navbar />
                <Contact />
              </>
            }
          />
          <Route
            path="/account"
            element={
              <>
                <ScrollToTop />
                <AccountNav />
                <Account />
              </>
            }
          />
          <Route
            path="/account/profile"
            element={
              <>
                <ScrollToTop />
                <AccountNav />
                <Profile />
              </>
            }
          />
          <Route
            path="/account/preferences"
            element={
              <>
                <ScrollToTop />
                <AccountNav />
                <Preferences />
              </>
            }
          />
          <Route
            path="/account/security"
            element={
              <>
                <ScrollToTop />
                <AccountNav />
                <Security />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <ScrollToTop />
                <PageNotFound />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
