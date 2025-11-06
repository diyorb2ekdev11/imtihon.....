import { useState } from "react";
import axios from "axios";
import { Payment } from "../types";

export default function Payments() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<Payment>({
    student: "",
    group: "",
    client: "",
    month: "",
    method: "",
    date: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("https://admin-crm.onrender.com/payments", form, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setShowModal(false);
      
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>To'lovlar</h1>
      <button onClick={() => setShowModal(true)}>+ To'lov qo'shish</button>
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "white",
            padding: "20px",
            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          }}
        >
          <h2>Yangi to'lov qo'shish</h2>
          <input
            name="student"
            placeholder="Talaba ismi bilan qidirng..."
            onChange={handleChange}
            style={{ display: "block", margin: "10px 0" }}
          />
          <input
            name="group"
            placeholder="Guruh nomi bilan qidirng..."
            onChange={handleChange}
            style={{ display: "block", margin: "10px 0" }}
          />
          <input
            name="client"
            placeholder="To'lov mijozori"
            onChange={handleChange}
            style={{ display: "block", margin: "10px 0" }}
          />
          <input
            name="month"
            type="month"
            onChange={handleChange}
            style={{ display: "block", margin: "10px 0" }}
          />
          <select
            name="method"
            onChange={handleChange}
            style={{ display: "block", margin: "10px 0" }}
          >
            <option>Naqd</option>
            <option>Click</option>
            <option>Payme</option>
            <option>Bank orqali</option>
          </select>
          <input
            name="date"
            type="date"
            onChange={handleChange}
            style={{ display: "block", margin: "10px 0" }}
          />
          <button onClick={() => setShowModal(false)}>Bekor qilish</button>
          <button onClick={handleSubmit}>Saqlash</button>
        </div>
      )}
      
    </div>
  );
}
