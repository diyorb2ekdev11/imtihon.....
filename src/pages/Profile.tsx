import { useState, useEffect } from "react";
import axios from "axios";
import { User } from "../types";

export default function Profile() {
  const [profile, setProfile] = useState<User | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "https://admin-crm.onrender.com/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setProfile(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProfile();
  }, []);

  if (!profile) return <p>Yuklanmoqda...</p>;

  return (
    <div>
      <h1>
        {profile.firstName} {profile.lastName}
      </h1>
      <p>{profile.email}</p>
      <p>Rol: {profile.role}</p>
      
      <input
        type="file"
        onChange={async (e) => {
          const formData = new FormData();
          if (e.target.files) formData.append("image", e.target.files[0]);
          await axios.post(
            "https://admin-crm.onrender.com/auth/edit-profile-img",
            formData,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "multipart/form-data",
              },
            }
          );
        }}
      />
      <button>Parolni O'zgartirish</button> 
      <button>O'zgartirish</button> 
    </div>
  );
}
