'use client'
import Link from 'next/link';
import { Menu, X } from "lucide-react";
import React, { useState } from 'react';


const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Jobs", href: "/jobs" },
        { label: "Companies", href: "/companies" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];


    return (
        <nav className="bg-white shadow-md dark:bg-slate-900 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-indigo-600">
                    JobPortal
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 dark:text-gray-200"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-slate-900 shadow-md px-6 py-4 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="block text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default NavBar;