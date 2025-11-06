import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Managers from "./pages/Managers";
import Admins from "./pages/Admins";
import Teachers from "./pages/Teachers";
import Students from "./pages/Students";
import Groups from "./pages/Groups";
import Courses from "./pages/Courses";
import Payments from "./pages/Payments";
import Profile from "./pages/Profile";
import { useEffect, useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!localStorage.getItem("token")
  );

  useEffect(() => {
    
    const checkAuth = () => setIsAuthenticated(!!localStorage.getItem("token"));
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            !isAuthenticated ? (
              <Login setAuth={setIsAuthenticated} />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />
        <Route
          path="/"
          element={
            isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" />
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="managers" element={<Managers />} />
          <Route path="admins" element={<Admins />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="students" element={<Students />} />
          <Route path="groups" element={<Groups />} />
          <Route path="courses" element={<Courses />} />
          <Route path="payments" element={<Payments />} />
          <Route path="profile" element={<Profile />} />
          <Route
            path="logout"
            element={<Logout setAuth={setIsAuthenticated} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

function Logout({ setAuth }: { setAuth: (auth: boolean) => void }) {
  useEffect(() => {
    localStorage.removeItem("token");
    setAuth(false);
  }, [setAuth]);
  return <Navigate to="/login" />;
}

export default App;
