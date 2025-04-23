"use client";

import { useState } from 'react';
import Card from "@/components/Card";

export default function AddScoreModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    game: 'Fortnite',
    winCount: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to add a score.");
      return;
    }

    try {
      const res = await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        onClose();
        window.location.reload(); // or router.push("/auth-view");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong.');
    }

    setFormData({ game: 'Fortnite', winCount: '' });
  };

  return (
    <div className="fixed inset-0  bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white text-black w-full max-w-2xl p-8 rounded-lg shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-4 text-xl font-bold">×</button>
        <h2 className="text-2xl font-bold text-center mb-6">Add a New Highscore</h2>
        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            <select
              name="game"
              value={formData.game}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg"
            >
              <option value="Fortnite">Fortnite</option>
              <option value="Warzone">Warzone</option>
              <option value="Wordle">Wordle</option>
            </select>

            <input
              name="winCount"
              type="text"
              value={formData.winCount}
              onChange={handleChange}
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
