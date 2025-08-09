'use client';

import { useState } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className="fixed top-0 w-full bg-black text-white z-50">
      {/* Barra principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 md:h-24">
        <div className="text-2xl font-bold tracking-tight lg:-ml-16">CrvCompany</div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8 h-full items-center">
          <Link href="#home" className="hover:text-purple-400 transition-colors">Início</Link>
          <Link href="#about" className="hover:text-purple-400 transition-colors">Sobre</Link>
          <Link href="#services" className="hover:text-purple-400 transition-colors">Serviços</Link>
          <Link href="#contact" className="hover:text-purple-400 transition-colors">Contato</Link>
        </nav>

        {/* Botão Mobile (esconde quando menu está aberto) */}
        <div className={`md:hidden z-50 ${menuOpen ? "hidden" : ""}`}>
          <button onClick={toggleMenu} className="focus:outline-none text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Linha atravessando toda a tela */}
      <div className="w-full h-[2px] bg-purple-500"></div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black text-white flex flex-col transition-opacity duration-300">
          {/* Topo com CrvCompany e X */}
          <div className="bg-black flex items-center justify-between px-6 py-4 border-b border-purple-600">
            <div className="text-2xl font-bold">CrvCompany</div>
            <button onClick={() => setMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navegação */}
          <div className="bg-black flex flex-col px-6 py-8 space-y-4 text-left text-xl">
            {[
              { label: "Início", href: "#home" },
              { label: "Sobre", href: "#about" },
              { label: "Serviços", href: "#services" },
              { label: "Contato", href: "#contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="hover:bg-purple-700 hover:text-white transition px-4 py-2 rounded-md"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
