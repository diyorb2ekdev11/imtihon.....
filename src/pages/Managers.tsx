import Table from "../components/Table";


export interface User {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  status: string;
  actions?: string;
}

const columns = ["Ism", "Familiya", "Email", "Rol", "Holat", "Amallar"];


const renderRow = (user: User,) => (
  <tr key={user._id}>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.first_name}</td>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.last_name}</td>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.email}</td>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.role}</td>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.status}</td>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>
      {user.actions || "Edit/Delete"}
    </td>
  </tr>
);

export default function Managers() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Foydalanuvchilar ro'yxati (Menegerlar)</h1>

      <Table<User>
        endpoint="/staff/all-managers" 
        columns={columns}
        renderRow={renderRow} 
      />

      <button
        onClick={() => alert("Yangi meneger qo'shish formasi")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#007bff",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        + Meneger Qo'shish
      </button>
    </div>
  );
}
