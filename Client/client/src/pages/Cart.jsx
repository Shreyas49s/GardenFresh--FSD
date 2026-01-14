import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaTrash, FaMinus, FaPlus, FaArrowLeft } from 'react-icons/fa';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
                <div className="bg-green-50 p-6 rounded-full mb-6">
                    <FaShoppingBag className="text-6xl text-green-200" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Cart is Empty</h2>
                <p className="text-gray-500 mb-8 text-center max-w-md">Looks like you haven't added any fresh harvest to your cart yet.</p>
                <Link to="/" className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-200 flex items-center gap-2">
                    <FaArrowLeft /> Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="text-green-600">Shopping</span> Cart
            </h1>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Cart Items List */}
                <div className="lg:w-2/3 space-y-4">
                    {cartItems.map((item) => (
                        <div key={item._id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-4 transition-all hover:shadow-md">
                            <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-lg bg-gray-50 bg-[url('https://via.placeholder.com/100')]" />

                            <div className="flex-grow text-center sm:text-left">
                                <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                                <p className="text-green-600 font-medium">₹{item.price} / {item.unit}</p>
                            </div>

                            <div className="flex items-center gap-3 bg-gray-50 p-2 rounded-lg">
                                <button
                                    onClick={() => updateQuantity(item._id, item.cartQuantity - 1)}
                                    className="p-1 rounded-md hover:bg-white text-gray-500 hover:text-green-600 transition-colors disabled:opacity-30"
                                    disabled={item.cartQuantity <= 1}
                                >
                                    <FaMinus size={12} />
                                </button>
                                <span className="font-bold w-6 text-center">{item.cartQuantity}</span>
                                <button
                                    onClick={() => updateQuantity(item._id, item.cartQuantity + 1)}
                                    className="p-1 rounded-md hover:bg-white text-gray-500 hover:text-green-600 transition-colors"
                                >
                                    <FaPlus size={12} />
                                </button>
                            </div>

                            <div className="flex flex-col items-end min-w-[80px]">
                                <span className="font-bold text-lg">₹{item.price * item.cartQuantity}</span>
                                <button
                                    onClick={() => removeFromCart(item._id)}
                                    className="scale-90 text-red-400 hover:text-red-600 transition-colors mt-1 flex items-center gap-1 text-sm font-medium"
                                >
                                    <FaTrash size={12} /> Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="lg:w-1/3">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-24">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b">Order Summary</h3>

                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal ({cartItems.length} items)</span>
                                <span>₹{getCartTotal()}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Delivery Fee</span>
                                <span className="text-green-600 font-medium">Free</span>
                            </div>
                        </div>

                        <div className="flex justify-between text-xl font-bold text-gray-900 mb-8 pt-4 border-t">
                            <span>Total</span>
                            <span>₹{getCartTotal()}</span>
                        </div>

                        <button
                            className="w-full py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 active:bg-green-800 transition-all shadow-lg shadow-green-200 transform hover:-translate-y-0.5"
                            onClick={() => alert('Checkout logic would go here! Payment Gateway integration needed.')}
                        >
                            Proceed to Checkout
                        </button>

                        <button
                            onClick={clearCart}
                            className="w-full mt-4 py-2 text-gray-400 text-sm font-medium hover:text-red-500 transition-colors"
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Fix for missing import in the mock code above
import { FaShoppingBag } from 'react-icons/fa';

export default Cart;
