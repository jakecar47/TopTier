'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from "@/components/Card";

export default function ItemAddForm() {

    const [formData, setFormData] = useState({
        game: '',
        userIdentification: '',
        winCount: '',
    });

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: name === 'owner' ? Number(value) : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();   
        
        console.log(`game: ${formData.game}`);
        console.log(`userIdentification: ${formData.userIdentification}`);
        console.log(`win count: ${formData.winCount}`);
        
        setFormData({ game: '', userIdentification: '', winCount: '' });
        router.push('/show-items');

    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#0C0F11] text-black">
        <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Create a New Item</h2>
            <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
                <input
                name="game"
                type="text"
                value={formData.game}
                onChange={handleChange}
                placeholder="Game"
                required
                className="w-full p-4 border border-gray-300 rounded-lg"
                />
                <textarea
                name="User identification"
                value={formData.userIdentification}
                onChange={handleChange}
                placeholder="User identification"
                required
                className="w-full p-4 border border-gray-300 rounded-lg"
                />
                <input
                name="win count"
                type="text"
                value={formData.winCount}
                onChange={handleChange}
                placeholder="Win count"
                required
                className="w-full p-4 border border-gray-300 rounded-lg"
                />
                <div className="flex justify-end">
                <button
                    type="submit"
                    className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow hover:bg-yellow-300 transition duration-300">
                    Add Item
                </button>
                </div>
            </form>
            </Card>
        </div>
        </div>
    );
}