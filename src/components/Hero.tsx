import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80"
          alt="Majestic landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Digital Rico
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow">
          Digital Rico represents nothing, yet encompasses everything
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="backdrop-blur-sm bg-white/20 border-white text-white hover:bg-white hover:text-gray-900">
            View Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="secondary" className="backdrop-blur-sm bg-black/20">
            Get in Touch
          </Button>
        </div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
}