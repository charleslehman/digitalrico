import React from 'react';
import { Instagram, CircuitBoard } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <CircuitBoard className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Digital Rico</span>
            </div>
            <p className="text-gray-400">
              Digital Rico represents nothing, yet encompasses everything.
            </p>
          </div>

          <div className="flex justify-end items-start">
            <a 
              href="https://instagram.com/digitalrico.design" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Digital Rico. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}