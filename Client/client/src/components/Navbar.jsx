import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaLeaf } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop' }, // Placeholder for shop
        { name: 'About', path: '/about' }, // Placeholder for about
        { name: 'Register', path: '/register' },
        { name: 'Login', path: '/login' },
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center gap-2">
                            <FaLeaf className="text-green-500 text-2xl" />
                            <span className="font-bold text-xl text-gray-800 tracking-tight">GardenFresh</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive
                                        ? 'text-green-600 bg-green-50'
                                        : 'text-gray-600 hover:text-green-500 hover:bg-gray-50'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <button className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors shadow-sm hover:shadow-md">
                            Cart (0)
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <FaTimes className="block h-6 w-6" />
                            ) : (
                                <FaBars className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `block px-3 py-2 rounded-md text-base font-medium ${isActive
                                    ? 'text-green-600 bg-green-50'
                                    : 'text-gray-600 hover:text-green-500 hover:bg-gray-50'
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <button className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-white bg-green-600 hover:bg-green-700 mt-4">
                        View Cart (0)
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
