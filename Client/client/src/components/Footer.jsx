import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLeaf } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-10 pb-6 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <FaLeaf className="text-green-500 text-2xl" />
                            <span className="font-bold text-xl tracking-tight">GardenFresh</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Connecting local farmers directly with consumers.
                            Fresh vegetables, completely organic, delivered to your doorstep.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4 text-green-400">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="/shop" className="hover:text-white transition-colors">Shop</a></li>
                            <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4 text-green-400">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-colors">
                                <FaFacebook size={18} />
                            </a>
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-colors">
                                <FaTwitter size={18} />
                            </a>
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-colors">
                                <FaInstagram size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} GardenFresh. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
