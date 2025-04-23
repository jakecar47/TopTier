'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";

export default function SignupHome() {

  // dynamically updated/saved form data
  let [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const [emailError, setEmailError] = useState<string>('');

  const router = useRouter();

  // function to handle changes in the form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const emailCheck = async () => {
    const res = await fetch(`https://apilayer.net/api/check?access_key=d73ae490bca98b8609bce66c12a9eae3&email=${formData.email}`);
    const data = await res.json();

    if (!data.smtp_check || !data.format_valid) {
      setEmailError("Invalid or unreachable email address.");
      return false;
    }

    setEmailError('');
    return true;
  };
  // function to execute when submit button is pressed
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isEmailValid = await emailCheck();
    if (!isEmailValid) return;

    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        router.push("/auth-view");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error submitting signup form:', error);
      alert('Something went wrong.');
    }

    setFormData({ username: '', password: '', email: '' });
  };


  return (
    <div>
      <header>
        <Navbar isLoggedIn={false} isAccount={false} />
      </header>
      <div className="h-[90vh] flex items-center justify-center bg-[#0f0f0f] text-black">
        <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Register an Account with TopTier</h2>
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange} // Fixed
                placeholder="Enter an email"
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
              <input
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange} // Fixed
                placeholder="Enter a username"
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange} // Fixed
                placeholder="Enter a password"
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow hover:bg-yellow-300 transition duration-300"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
} // sign up page Home component