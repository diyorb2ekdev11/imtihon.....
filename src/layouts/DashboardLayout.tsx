import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function DashboardLayout() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={theme}
      style={{
        display: "flex",
        height: "100vh",
        overflow: "hidden", 
      }}
    >
      
      <Sidebar />

      <main
        style={{
          flex: 1,
          marginLeft: "240px", 
          padding: "20px",
          overflowY: "auto", 
          height: "100vh",
          background: theme === "dark" ? "#121212" : "#f9f9f9",
          color: theme === "dark" ? "#fff" : "#000",
          transition: "0.3s ease",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}
