// components/Header.tsx
'use client'
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight">
          CrvCompany
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-indigo-600 transition">Início</a>
          <a href="#sobre" className="hover:text-indigo-600 transition">Sobre</a>
          <a href="#servicos" className="hover:text-indigo-600 transition">Serviços</a>
          <a href="#contato" className="hover:text-indigo-600 transition">Contato</a>
        </nav>

        {/* Botão Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white shadow-md">
          <a href="#home" className="block py-2 hover:text-indigo-600">Início</a>
          <a href="#sobre" className="block py-2 hover:text-indigo-600">Sobre</a>
          <a href="#servicos" className="block py-2 hover:text-indigo-600">Serviços</a>
          <a href="#contato" className="block py-2 hover:text-indigo-600">Contato</a>
        </div>
      )}
    </header>
  );
}
