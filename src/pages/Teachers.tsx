import Table from "../components/Table";


export interface User {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  status: string;
  actions?: string;
}

const columns = ["Ism", "Familiya", "Email", "Holat", "Amallar"];


const renderRow = (user: User,) => (
  <tr key={user._id}>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.first_name}</td>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.last_name}</td>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.email}</td>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.status}</td>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>
      {user.actions || "Edit/Delete"}
    </td>
  </tr>
);

export default function Teachers() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Ustozlar ro'yxati</h1>

      <Table<User>
        endpoint="/teacher/get-all-teachers" 
        columns={columns}
        renderRow={renderRow} 
      />

      <button
        onClick={() => alert("Yangi ustoz qo'shish formasi")}
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
        + Ustoz Qo'shish
      </button>
    </div>
  );
}
