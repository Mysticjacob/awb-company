import { useState } from "react";
import axios from "axios";

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const { data } = await axios.post("https://cloud-computing-d7av.vercel.app/api/auth/login", { email, password });
      localStorage.setItem("token", data.token);
      onLoginSuccess(); // Callback for successful login
    } catch (error) {
      alert("Login failed: " + error.response?.data?.message || "Server error");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
