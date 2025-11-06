import Table from "../components/Table";
import { Group } from "../types";

const columns = [
  "No",
  "Guruh nomi",
  "O'quvchilar soni",
  "Boshlangan vaqt",
  "Tugagan vaqt",
  "Amallar",
];

const renderRow = (group: Group,) => (
  <tr key={group._id}>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>{group._id}</td>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>
      {group.name}
    </td>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>
      {group.students.length}
    </td>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>
      {group.started_group}
    </td>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>
      {group.end_group}
    </td>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>
      {group.actions || "Edit/Delete"}
    </td>
  </tr>
);

export default function Groups() {
  return (
    <div>
      <h1>Guruhlar ro'yxati</h1>
      <Table<Group>
        endpoint="/group/get-all-group"
        columns={columns}
        renderRow={renderRow}
      />
      <button onClick={() => alert("Yangi guruh qo'shish formasi")}>
        + Guruh Qo'shish
      </button>
    </div>
  );
}
