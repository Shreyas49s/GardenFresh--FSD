import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
        alert(`${product.title} added to cart! 🛒`);
    };

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-transform duration-300 hover:scale-[1.02] border border-gray-100 flex flex-col h-full">
            <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=Fresh+Veggies'; }}
                />
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Fresh
                </div>
            </div>
            <div className="p-4 space-y-3 flex-grow flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start">
                        <h3 className="text-lg font-bold text-gray-800 line-clamp-1">{product.title}</h3>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                        <div>
                            <p className="text-gray-500 text-xs uppercase tracking-wide">Price</p>
                            <p className="text-green-600 font-bold text-lg">
                                ₹{product.price} <span className="text-gray-400 text-sm font-normal">/ {product.unit}</span>
                            </p>
                        </div>
                        {product.quantity > 0 ? (
                            <div className="text-right">
                                <p className="text-gray-500 text-xs uppercase tracking-wide">Stock</p>
                                <p className="text-gray-700 font-medium">{product.quantity} left</p>
                            </div>
                        ) : (
                            <span className="text-red-500 font-bold text-sm bg-red-50 px-2 py-1 rounded">Out of Stock</span>
                        )}
                    </div>
                </div>

                <button
                    onClick={handleAddToCart}
                    disabled={product.quantity <= 0}
                    className="w-full mt-4 bg-green-600 text-white py-2.5 rounded-lg font-semibold hover:bg-green-700 active:bg-green-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
