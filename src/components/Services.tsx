"use client";
import React from "react";

interface ServiceBox {
  title: string;
  description: string;
}

const serviceBoxes: ServiceBox[] = [
  {
    title: "Implementar Odoo",
    description:
      "Minha empresa gira em Excel ou um ERP duque não é satisfatório.",
  },
  {
    title: "Melhore meu Odoo",
    description:
      "Minha empresa está déjà sur Odoo e eu quero um parceiro para me ajudar.",
  },
  {
    title: "Desenvolvedor sob medida",
    description:
      "Eu pesquisei especialistas em Php, Python, Magento, Hubspot ou Wordpress.",
  },
  {
    title: "Realizar uma análise",
    description:
      "Custo e ROI de um novo ERP. Due Diligence para M&A. Roteiro e estratégia informática.",
  },
];

export default function Services() {
  return (
    <main className="bg-white text-black">
      {/* Seção original */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Título */}
          <div className="max-w-4xl text-left mb-12">
            <span className="text-xs md:text-sm text-purple-600 font-semibold uppercase tracking-widest">
              Serviços & Portfólio
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-light tracking-wide leading-tight text-gray-900">
              Como podemos ajudar?
            </h2>
          </div>

          {/* Grid de 4 caixas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-left">
            {serviceBoxes.map(({ title, description }, idx) => (
              <div
                key={idx}
                className="p-10 border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-purple-600 transition-all duration-300"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  {title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {description}
                </p>
                <button className="text-purple-600 font-semibold hover:underline flex items-center gap-1">
                  Saiba mais <span aria-hidden="true">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔽 NOVA SEÇÃO ADICIONADA AQUI 🔽 */}
      <section className="bg-gradient-to-b from-[#0F0F0F] to-black py-32 px-6 md:px-12 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Nossos serviços</h2>
          <p className="text-lg text-center text-gray-300 mb-16">
            Soluções digitais personalizadas para sua empresa crescer com tecnologia.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="border border-pink-500 rounded-2xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Projeto ERP Odoo</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Odoo Ecommerce e PIM</li>
                <li>Odoo CRM</li>
                <li>Odoo ERP</li>
                <li>Odoo MRP</li>
                <li>Compatibilidade Odoo</li>
                <li>Painel e relatórios do Odoo</li>
                <li>Pagamento: Stripe e Ingenico</li>
              </ul>
              <a href="/odoo-erp" className="block mt-6 text-pink-400 hover:underline font-medium">
                Descubra Odoo →
              </a>
            </div>

            {/* Card 2 */}
            <div className="border border-yellow-400 rounded-2xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Solução sobre medida</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>PHP</li>
                <li>Python</li>
                <li>Java</li>
                <li>Imprensa mundial</li>
                <li>Magento</li>
              </ul>
              <a href="/desenvolvimento" className="block mt-6 text-yellow-300 hover:underline font-medium">
                Desenvolvimento →
              </a>
            </div>

            {/* Card 3 */}
            <div className="border border-green-400 rounded-2xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Infraestrutura de TI</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Servidor Cloud Azure</li>
                <li>Servidor Cloud AWS</li>
                <li>Manutenção</li>
                <li>Segurança</li>
                <li>Rede</li>
              </ul>
              <a href="/infraestrutura-ti" className="block mt-6 text-green-300 hover:underline font-medium">
                Infraestrutura de TI →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
