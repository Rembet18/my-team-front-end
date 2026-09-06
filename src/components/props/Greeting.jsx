import React, { useState } from 'react';

export default function Greeting() {
  // State untuk mengontrol status pop-up profil
  const [showProfile, setShowProfile] = useState(false);

  return (
    <section className="relative px-6 py-28 text-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl -z-10" />

      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-blue-50/80 border border-blue-200/60 rounded-full backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
        <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">Selamat Datang di My Page</span>
      </div>

      {/* Main Title */}
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight max-w-4xl mx-auto">
        Membangun Pengalaman Digital yang <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Luar Biasa</span>
      </h1>

      {/* Subtitle */}
      <p className="max-w-2xl text-lg md:text-xl text-gray-600 mb-10 mx-auto leading-relaxed">
        Halo! Saya <span className="font-semibold text-gray-900">Faith</span>, seorang Frontend Developer yang berfokus menciptakan antarmuka web interaktif, cepat, dan berperforma tinggi.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        {/* Tombol dengan event onClick */}
        <button 
          onClick={() => setShowProfile(true)}
          className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer"
        >
          Lihat Karya Saya
        </button>
        <button className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-gray-700 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl hover:bg-white hover:border-gray-300 shadow-sm hover:-translate-y-0.5 active:scale-95 transition-all">
          Hubungi Saya
        </button>
      </div>

      {/* Modal Pop-up Profil saat Tombol Diklik */}
      {showProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-gray-100 relative text-left animate-in fade-in zoom-in duration-200">
            {/* Profil Header */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-blue-500/30">
                F
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Faith</h3>
                <p className="text-sm font-semibold text-blue-600">Frontend Developer</p>
              </div>
            </div>

            {/* Deskripsi Profil */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Halo! Saya Faith, pengembang antarmuka web yang berfokus pada estetika visual modern, performa tinggi, dan pengalaman pengguna (*User Experience*) terbaik menggunakan React JS dan Tailwind CSS.
            </p>

            {/* Tombol Tutup */}
            <button
              onClick={() => setShowProfile(false)}
              className="w-full py-3 font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-xl transition-all"
            >
              Tutup Profil
            </button>
          </div>
        </div>
      )}
    </section>
  );
}