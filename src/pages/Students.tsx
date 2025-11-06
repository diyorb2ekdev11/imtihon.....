import Table from "../components/Table";


export interface Student {
  _id: string;
  first_name: string;
  last_name: string;
  phone: string;
  groups: number[];
  status: string;
  actions?: string;
}

const columns = [
  "Ism",
  "Familiya",
  "Telefon raqam",
  "Guruh soni",
  "Holat",
  "Amallar",
];


const renderRow = (student: Student, ) => (
  <tr key={student._id}>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>
      {student.first_name}
    </td>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>
      {student.last_name}
    </td>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>
      {student.phone}
    </td>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>
      {student.groups.length}
    </td>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>
      {student.status}
    </td>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>
      {student.actions || "Edit/Delete"}
    </td>
  </tr>
);

export default function Students() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Studentlar ro'yxati</h1>

      <Table<Student>
        endpoint="/student/get-all-students" 
        columns={columns}
        renderRow={renderRow} 
      />

      <button
        onClick={() => alert("Yangi student qo'shish formasi")}
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
        + Student Qo'shish
      </button>
    </div>
  );
}
