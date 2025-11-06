// import Sidebar from "../components/Sidebar";
// import { Outlet } from "react-router-dom";
// import { useContext } from "react";
// import { ThemeContext } from "../contexts/ThemeContext";

// export default function DashboardLayout() {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <div className={theme} style={{ display: "flex", height: "100vh" }}>
//       <Sidebar />
//       <main style={{ flex: 1, padding: "20px" }}>
//         <Outlet />
//       </main>
//     </div>
//   );
// }

//////

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
        overflow: "hidden", // ✅ umumiy scrollni oldini oladi
      }}
    >
      {/* Chapdagi qotib turadigan sidebar */}
      <Sidebar />

      {/* O‘ngdagi asosiy kontent qismi */}
      <main
        style={{
          flex: 1,
          marginLeft: "240px", // ✅ Sidebar kengligi bilan joy bo‘shatildi
          padding: "20px",
          overflowY: "auto", // ✅ faqat kontent qismi skroll bo‘ladi
          height: "100vh",
          background: theme === "dark" ? "#121212" : "#f9f9f9", // ✅ theme bilan mos
          color: theme === "dark" ? "#fff" : "#000",
          transition: "0.3s ease",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}
