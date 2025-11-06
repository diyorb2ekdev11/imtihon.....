import React, { useState, useEffect } from "react";
import axios from "axios";

interface TableProps<T> {
  endpoint: string;
  columns: string[];
  renderRow: (item: T) => React.ReactElement;
};

export default function Table<T>({ endpoint, columns, renderRow }: TableProps<T>) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://admin-crm.onrender.com/api${endpoint}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data)

        setData(response.data.data);
      } catch (err) {
        console.error("Data fetch error", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  if (loading) return <p>Yuklanmoqda...</p>;

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col} style={{ border: "1px solid #ccc", padding: "8px" }}>
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => renderRow(item))}
      </tbody>
    </table>
  );
}
