import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ title: '', price: '', unit: 'kg', image: '', quantity: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            await axios.post('http://localhost:5000/api/products', form, {
                headers: { 'x-auth-token': token }
            });
            alert('Harvest Listed Successfully! 🥬');
            navigate('/');
        } catch (err) {
            alert('Error: ' + (err.response?.data?.msg || 'Failed to list'));
        }
    };

    return (
        <div className="flex justify-center mt-10">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4">
                <h2 className="text-2xl font-bold text-green-800 border-b pb-4">List Your Harvest</h2>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Vegetable Name</label>
                    <input placeholder="e.g. Fresh Spinach" className="w-full border p-2 rounded" required
                        onChange={e => setForm({ ...form, title: e.target.value })} />
                </div>

                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block text-sm font-bold text-gray-700 mb-1">Price (₹)</label>
                        <input type="number" placeholder="20" className="w-full border p-2 rounded" required
                            onChange={e => setForm({ ...form, price: e.target.value })} />
                    </div>
                    <div className="w-1/3">
                        <label className="block text-sm font-bold text-gray-700 mb-1">Unit</label>
                        <select className="w-full border p-2 rounded"
                            onChange={e => setForm({ ...form, unit: e.target.value })}>
                            <option value="kg">kg</option>
                            <option value="g">grams</option>
                            <option value="bunch">bunch</option>
                            <option value="pc">piece</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Quantity Available</label>
                    <input type="number" placeholder="e.g. 5" className="w-full border p-2 rounded" required
                        onChange={e => setForm({ ...form, quantity: e.target.value })} />
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Image Link</label>
                    <input placeholder="https://..." className="w-full border p-2 rounded" required
                        onChange={e => setForm({ ...form, image: e.target.value })} />
                    <p className="text-xs text-gray-500 mt-1">Tip: Copy image address from Google Images</p>
                </div>

                <button className="w-full bg-green-600 text-white py-3 rounded font-bold hover:bg-green-700 mt-4">
                    Post Listing
                </button>
            </form>
        </div>
    );
};

export default AddProduct;