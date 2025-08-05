// components/Home.tsx
"use client";
import Image from "next/image";

export default function Home() {
  return (
    <section id="home" className="bg-white py-16 px-6 md:py-24 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
            Impulsionando ideias com tecnologia inteligente
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Criamos soluções digitais de alto desempenho, lado a lado com a sua equipe, garantindo que cada projeto seja relevante para o seu público e eficiente para o seu negócio.
          </p>
        </div>

        {/* Imagem do Robô */}
        <div className="order-1 md:order-2 flex justify-center">
          <Image
            src="/robo-inteligente.png" // Caminho relativo dentro da pasta public
            alt="Robô tecnológico inteligente"
            width={400} // Reduzido para um tamanho mais adequado em dispositivos móveis
            height={400}
            className="w-full max-w-sm md:max-w-md" // Garante que a imagem seja responsiva
          />
        </div>
      </div>
    </section>
  );
}