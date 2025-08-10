"use client";

import '@fortawesome/fontawesome-free/css/all.min.css';
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white px-6 md:px-12 py-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Topo */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-4">
              crv<span className="text-purple-500">company.</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-md">
              Soluções de TI confiáveis para PMEs de alto desempenho.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://wa.me/5548984178967"
              aria-label="WhatsApp"
              className="text-white hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
          </div>
        </div>

        {/* Grid de infos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm text-gray-400">
          <div>
            <p className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">
              Assine nossa Newsletter
            </p>
            <form className="flex items-center border-b border-gray-600 focus-within:border-purple-500">
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="bg-transparent flex-1 py-2 text-white placeholder-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="text-purple-500 font-semibold ml-2 hover:underline"
              >
                →
              </button>
            </form>
          </div>

          <div>
            <p className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">
              CRVCompany São Paulo
            </p>
            <p>Av. Paulista, 1000</p>
            <p>São Paulo - SP</p>
          </div>

          <div>
            <p className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">
              CRVCompany Guarapari
            </p>
            <p>Rua das Palmeiras, 250</p>
            <p>Guarapari - ES</p>
          </div>

          <div>
            <p className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">
              Navegação
            </p>
            <ul className="space-y-2">
              <li><a href="/odoo-erp" className="hover:underline">Odoo ERP</a></li>
              <li><a href="/cases" className="hover:underline">Casos de Negócios</a></li>
              <li><a href="/blog" className="hover:underline">Blog CRVCompany</a></li>
              <li><a href="/recrutamento" className="hover:underline">Recrutamento</a></li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <hr className="border-gray-800" />

        {/* Rodapé final com links legais + ícone do WhatsApp */}
        <div className="flex flex-col md:flex-row md:justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>&copy; {currentYear} CRVCompany. Todos os direitos reservados.</p>

          <div className="flex items-center gap-3">
            <a href="/privacidade" className="hover:underline">Política de Privacidade</a>
            <span className="text-gray-600">|</span>
            <a href="/termos" className="hover:underline">Termos e Condições</a>

            <a
              href="https://wa.me/5548984178967"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="ml-4 text-white hover:text-white"
            >
              <i className="fab fa-whatsapp text-base"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
