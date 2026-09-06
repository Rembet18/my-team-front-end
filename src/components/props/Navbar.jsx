import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200/50 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2 cursor-pointer">
        <div className="w-9 h-9 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl flex items-center justify-center text-white font-black shadow-md shadow-blue-500/20">
          M
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
          My Page
        </span>
      </div>

      {/* English Navbar Links */}
      <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
        <li className="hover:text-blue-600 cursor-pointer transition-colors">Home</li>
        <li className="hover:text-blue-600 cursor-pointer transition-colors">Skills</li>
        <li className="hover:text-blue-600 cursor-pointer transition-colors">Portfolio</li>
        <li className="hover:text-blue-600 cursor-pointer transition-colors">Contact</li>
      </ul>

      <button className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all duration-200">
        Download CV
      </button>
    </nav>
  );
}