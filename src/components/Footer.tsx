// components/Footer.tsx
"use client";

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // O footer usa um background escuro e padding vertical para se destacar
    <footer className="bg-gray-800 text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Seção superior: Nome da empresa e redes sociais */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 md:mb-0">
            CRV COMPANY
          </h2>
          
          <div className="flex space-x-6">
            {/* Link para o Instagram */}
            <a
              href="#" // Substitua pelo link do seu Instagram
              aria-label="Instagram"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/></svg>
            </a>

            {/* Link para o WhatsApp */}
            <a
              href="#" // Substitua pelo link do seu WhatsApp
              aria-label="WhatsApp"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-text"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="13" x2="17" y1="10" y2="10"/><line x1="7" x2="11" y1="10" y2="10"/></svg>
            </a>

            {/* Adicione outros links sociais aqui */}

          </div>
        </div>
        
        {/* Linha divisória */}
        <hr className="border-gray-700 my-8" />
        
        {/* Seção inferior: Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} CRV COMPANY. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}