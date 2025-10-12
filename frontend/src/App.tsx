import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";




function App() {

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
   
      <Router>

        <Layout>
          <Toaster />

          <Routes>
            
            
          </Routes>
        </Layout>
      </Router>
   
  );
}

export default App;
