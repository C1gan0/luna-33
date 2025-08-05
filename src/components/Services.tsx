// components/Services.tsx
"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Landing Page para Startup',
    description: 'Desenvolvimento de uma landing page moderna e responsiva para uma startup de tecnologia, focando em alta conversão e otimização de SEO.',
    image: '/portfolio-1.jpg',
  },
  {
    id: 2,
    title: 'E-commerce de Roupas',
    description: 'Criação de um e-commerce completo com funcionalidades de carrinho, checkout seguro e gerenciamento de produtos, utilizando React e Next.js.',
    image: '/portfolio-2.jpg',
  },
  {
    id: 3,
    title: 'Dashboard de Análises',
    description: 'Interface de usuário para um dashboard de análises de dados, com gráficos interativos e visualização em tempo real de métricas importantes.',
    image: '/portfolio-3.jpg',
  },
  {
    id: 4,
    title: 'Aplicativo Mobile-first',
    description: 'Design e desenvolvimento de um aplicativo web com foco total na experiência do usuário em dispositivos móveis, utilizando as melhores práticas de mobile-first.',
    image: '/portfolio-4.jpg',
  },
];

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const handleOpenModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    // Aumentamos o padding vertical (py) para dar mais altura à seção
    <section id="services" className="bg-white py-24 px-6 md:py-32 md:px-12">
      {/* Removido max-w-7xl para que o conteúdo ocupe toda a largura disponível */}
      <div className="mx-auto text-center">
        {/* Adicionamos uma margem inferior maior (mb) para separar o título do grid */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-16">Meus Serviços & Portfólio</h2>
        
        {/* Aumentamos o espaçamento (gap) entre as colunas para dar mais ar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {portfolioItems.map((item: PortfolioItem) => (
            <div
              key={item.id}
              className="group cursor-pointer relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
              onClick={() => handleOpenModal(item)}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end p-4">
                <h3 className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-8 relative">
            <button 
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">{selectedItem.title}</h3>
            <p className="text-gray-600 text-lg">{selectedItem.description}</p>
            <div className="mt-6">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                width={800}
                height={600}
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}