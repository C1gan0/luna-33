// components/Header.tsx
'use client';
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Fecha o menu ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight text-gray-800">
          CrvCompany
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#home" className="text-gray-700 hover:text-indigo-600 transition-colors">
            Início
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">
            Sobre
          </Link>
          <Link href="#services" className="text-gray-700 hover:text-indigo-600 transition-colors">
            Serviços
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors">
            Contato
          </Link>
        </nav>

        {/* Botão Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div ref={menuRef} className="md:hidden px-4 pb-4 pt-2 bg-white shadow-md space-y-2">
          <Link href="#home" className="block text-gray-700 hover:text-indigo-600 transition">
            Início
          </Link>
          <Link href="#about" className="block text-gray-700 hover:text-indigo-600 transition">
            Sobre
          </Link>
          <Link href="#services" className="block text-gray-700 hover:text-indigo-600 transition">
            Serviços
          </Link>
          <Link href="#contact" className="block text-gray-700 hover:text-indigo-600 transition">
            Contato
          </Link>
        </div>
      )}
    </header>
  );
}
