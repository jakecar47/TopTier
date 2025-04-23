'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";

export default function LoginHome() {
  const [error, setError] = useState("");

  // dynamically updated/saved form data
  let [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const router = useRouter();

  // function to handle changes in the form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // function to execute when submit button is pressed
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      router.push('/auth-view');
    } catch (err: any) {
      console.error("Login error:", err.message);
      setError(err.message);
    }
  };


  return (
    <div>
      <header>
        <Navbar isLoggedIn={false} isAccount={false} />
      </header>
      <div className="h-[90vh] flex items-center justify-center bg-[#0f0f0f] text-black">
        <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Log in to TopTier</h2>
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange} // Fixed
                placeholder="Username"
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange} // Fixed
                placeholder="Password"
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow hover:bg-yellow-300 transition duration-300"
                >
                  Login
                </button>
              </div>
            </form>
            {error && <p className="text-red-500">{error}</p>}
          </Card>
        </div>
      </div>
    </div>
  );
} // login page Home component