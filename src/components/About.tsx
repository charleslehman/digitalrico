import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About</h2>
          
          <div className="space-y-8">
            <p className="text-xl text-gray-600 leading-relaxed">
              Digital Rico is an exploration of the intersection between the digital and natural worlds.
            </p>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              We create products that challenge perceptions and blur the lines between meaning and absence.
            </p>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Each piece is a conversation between technology and organic form, between presence and void.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}