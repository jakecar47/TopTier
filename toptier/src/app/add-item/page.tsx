'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import Card from "@/components/Card";

interface JWTPayload {
  userId: string;
  username: string;
  exp: number;
}

export default function ItemAddForm() {
    
    // dynamically updated/saved form data
    let [formData, setFormData] = useState({
      game: '',
      userIdentification: jwtDecode<JWTPayload>(localStorage.getItem('token')).userId,
      winCount: '',
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
        const res = await fetch('/api/items', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        const data = await res.json();
        if (res.ok) {
          router.push("/auth-view");
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error('Error submitting signup form:', error);
        alert('Something went wrong.');
      }
  
      setFormData({ game: '', userIdentification: '', winCount: ''});
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0C0F11] text-black">
        <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Add a New Highscore</h2>
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="game"
                type="text"
                value={formData.game}
                onChange={handleChange} // Fixed
                placeholder="Game"
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
              <input
                name="winCount" // Fixed name to match the state key
                type="text"
                value={formData.winCount}
                onChange={handleChange} // Fixed
                placeholder="Win Count"
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow hover:bg-yellow-300 transition duration-300"
                >
                  Add Highscore
                </button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    );
  }
  