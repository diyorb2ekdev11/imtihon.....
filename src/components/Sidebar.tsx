import React from "react";
import { Link, useLocation } from "react-router-dom";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import HomeIcon from "@mui/icons-material/Home";

const menuItems = [
  { label: "Asosy", icon: <HomeIcon />, path: "/dashboard" },
  { label: "Menegerlar", icon: <SupervisorAccountIcon />, path: "/managers" },
  { label: "Adminlar", icon: <SupervisorAccountIcon />, path: "/admins" },
  { label: "Ustozlar", path: "/teachers" },
  { label: "Studentlar", path: "/students" },
  { label: "Guruhlar", icon: <PeopleOutlineIcon />, path: "/groups" },
  { label: "Kurslar", path: "/courses" },
  { label: "Payment", path: "/payments" },
  { label: "Boshqalar", path: "/others" },
  { label: "Profil", path: "/profile" },
  { label: "Chiqish", path: "/logout" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        background: "#1e1e1e",
        color: "white",
        padding: "20px",
        position: "fixed", 
        top: 0,
        left: 0,
        overflowY: "auto", 
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Admin CRM</h2>

      <ul  style={{ listStyle: "none", padding: 0 }}>
        {menuItems.map((item) => (
          <li className="layouts_activ" key={item.path}>
            <Link
              to={item.path}
              style={{
                display: "flex",
                width:"170px",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                color: location.pathname === item.path ? "#90caf9" : "white",
                background:
                  location.pathname === item.path ? "#333" : "transparent",
                padding: "17px 12px",
                borderRadius: "8px",
                transition: "0.3s",
              }}
            >
              {item.icon && <span>{item.icon}</span>}
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
