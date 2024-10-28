import React, { useState, useEffect } from 'react';
import { Menu, X, CircuitBoard } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <CircuitBoard className="h-8 w-8 text-blue-600" />
            <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Digital Rico
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#stack" className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-blue-600 transition-colors`}>
              Services
            </a>
            <a href="#about" className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-blue-600 transition-colors`}>
              About
            </a>
            <a href="#contact" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              Contact
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-blue-600 transition-colors`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-lg">
          <a href="#stack" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors">Services</a>
          <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors">About</a>
          <a href="#contact" className="block px-3 py-2 text-blue-600 hover:text-blue-700 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}