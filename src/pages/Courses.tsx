import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../components/Table";

export interface Course {
  _id: string;
  name: any;
  description: string;
  duration: string;
  price: number;
  is_freeze: boolean;
  createdAt: string;
  updatedAt: string;
}

const columns = ["Kurs nomi", "Tavsif", "Davomiyligi", "Narxi", "Holat", "Amallar"];

const renderRow = (course: Course) => (
  <tr key={course._id}>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>{course.name.name}</td>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>{course.description}</td>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>{course.duration}</td>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>{course.price} UZS</td>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>
      {course.is_freeze ? "Muzlatilgan" : "Faol"}
    </td>
    <td style={{ border: "1px solid #ccc", padding: "8px" }}>
      Edit / Delete / Muzlatish
    </td>
  </tr>
);

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "https://admin-crm.onrender.com/api/course/get-courses",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setCourses(response.data.data); 
      } catch (err) {
        console.error("Course fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <p>Yuklanmoqda...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Kurslar ro'yxati</h1>

      <Table<Course>
        endpoint="/course/get-courses" 
        columns={columns}
        renderRow={renderRow}
      />

      <button
        onClick={() => alert("Yangi kurs qo'shish formasi")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#28a745",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        + Kurs Qo'shish
      </button>
    </div>
  );
}
