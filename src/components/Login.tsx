import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface LoginProps {
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ setAuth }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  console.log(BASE_URL);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(`${BASE_URL}/auth/sign-in`, {
        email: form.email,
        password: form.password,
      });

      localStorage.setItem("token", response.data.data.token);
      setAuth(true);
      navigate("/dashboard");
    } catch (err: any) {
      if (err.response?.status === 404) {
        setError("Login endpoint topilmadi yoki noto'g'ri URL.");
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Loginda xatolik yuz berdi.");
      }
      console.error(err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f0f0f0",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "white",
          padding: "5px 48px 30px 30px",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          width: "320px",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
          Xush kelibsiz 👋
        </h1>
        <p
          style={{
            textAlign: "center",
            color: "#555",
            marginBottom: "20px",
            fontSize: "14px",
          }}
        >
          Hisobingizga kirish uchun email va parolni kiriting
        </p>

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email manzilingiz"
          required
          style={{
            width: "319px",
            padding: "10px",
            left:"50px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            borderStartEndRadius:"15px",
            borderEndStartRadius:"15px"
          }}
        />

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Parol"
          required
          style={{
            width: "319px",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "4px",
            borderStartEndRadius:"15px",
            borderEndStartRadius:"15px"
          }}
        />

        {error && (
          <p
            style={{
              color: "red",
              textAlign: "center",
              fontSize: "13px",
              marginBottom: "10px",
            }}
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          style={{
            width: "340px",
            padding: "10px",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop:"7px",
            borderStartEndRadius:"15px",
            borderEndStartRadius:"15px"
          }}
        >
          Kirish
        </button>
      </form>
    </div>
  );
};

export default Login;

// return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f0f0' }}>
//       <form onSubmit={handleSubmit} style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', width: '300px' }}>
//         <h1 style={{ textAlign: 'center' }}>Xush kelibsiz 👋</h1>
//         <p style={{ textAlign: 'center' }}>Hisobingizga kirish uchun email va parolni kiriting</p>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={{ width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '4px' }}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Parol"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           style={{ width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '4px' }}
//           required
//         />
//         {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
//         <button type="submit" style={{ width: '100%', padding: '10px', background: 'black', color: 'white', border: 'none', borderRadius: '4px' }}>
//           Kirish
//         </button>
//       </form>
//     </div>
//   );
// }
