'use client';

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
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
    <header className="fixed top-0 w-full bg-black text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-2xl font-bold tracking-tight lg:-ml-16">CrvCompany</div>

        <nav className="hidden md:flex space-x-6">
          <Link href="#home" className="hover:text-purple-400 transition-colors">Início</Link>
          <Link href="#about" className="hover:text-purple-400 transition-colors">Sobre</Link>
          <Link href="#services" className="hover:text-purple-400 transition-colors">Serviços</Link>
          <Link href="#contact" className="hover:text-purple-400 transition-colors">Contato</Link>
        </nav>

        <div className="md:hidden z-50">
          <button ref={buttonRef} onClick={toggleMenu} className="focus:outline-none text-white">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-40 bg-black text-white flex flex-col transition-opacity duration-300"
        >
          {/* Topo com CrvCompany e X */}
          <div className="bg-black flex items-center justify-between px-6 py-4 border-b border-purple-600">
            <div className="text-2xl font-bold">CrvCompany</div>
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
