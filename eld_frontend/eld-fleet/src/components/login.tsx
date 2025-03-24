import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      localStorage.setItem("token", data.access);
      navigate("/dashboard"); // Redirect after login
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-6 rounded-md"
    >
      <h2 className="text-xl text-black font-semibold mb-4 text-center">
        Login to Spotter AI Fleet
      </h2>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your Email"
        className="w-full p-2 border placeholder-gray-500 rounded mb-4"
        required
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your Password"
        className="w-full p-2 border placeholder-gray-500 rounded mb-4"
        required
      />

      <button
        type="submit"
        className="w-full bg-gray-900 text-white p-2 rounded"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
