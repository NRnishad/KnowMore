import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./pages/students/Login";
import Home from "./pages/students/Home";
import Signup from "./pages/students/Signup";
import VerifyAccount from "./pages/VerifyAccount";
 
import { Toaster } from "react-hot-toast";

import { config } from "./config/config";


import Navbar from "./components/common/Navbar/Navbar";

import Footer from "./components/common/Footer/Footer";


const GOOGLE_CLIENT_ID = config.google.CLIENT_ID;

function App() {
  if (!GOOGLE_CLIENT_ID) {
    console.error("Google client id is not defined");
  }

  const Layout = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith("/admin");
    const isInstructorRoute = location.pathname.startsWith("/instructor")
    return (
      <>
        {!isAdminRoute && <Navbar />}
        {children}
        { !isAdminRoute &&  !isInstructorRoute && <Footer />}
      </>
    );
  };
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Router>

        <Layout>
          <Toaster />

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            <Route path="/verify-account" element={<VerifyAccount />} />
            
            <Route path="/" element={<Home />} />
           
          </Routes>
        </Layout>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
