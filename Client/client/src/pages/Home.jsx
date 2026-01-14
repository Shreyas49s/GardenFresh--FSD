import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/products');
                setProducts(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching products:", err);
                // Fallback for demo if backend is not running or empty
                if (err.code === "ERR_NETWORK") {
                    setError('Backend seems to be offline. Ensure server is running on port 5000.');
                } else {
                    setError('Failed to load fresh harvest. Please try again later.');
                }
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="text-center mb-16 space-y-4">
                <span className="text-green-600 font-semibold tracking-wider uppercase text-sm">Farm to Table</span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                    Fresh from the <span className="text-green-600">Garden</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Directly from local farmers to your table. Experience the taste of pure, organic vegetables harvested just for you.
                </p>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-green-200 border-t-green-600"></div>
                </div>
            ) : error ? (
                <div className="text-center text-red-500 bg-red-50 p-6 rounded-xl border border-red-100 max-w-lg mx-auto">
                    <p className="font-bold">Unable to load products</p>
                    <p className="text-sm mt-1">{error}</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 bg-gray-50 rounded-xl border-dashed border-2 border-gray-200">
                            <p className="text-xl text-gray-500 font-medium">No harvest available right now.</p>
                            <p className="text-gray-400 mt-2">Check back soon or list your own!</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Home;