'use client';

import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function Home() {
  const [binaryColumns, setBinaryColumns] = useState<string[]>([]);

  // Posicionamento fixo para elementos técnicos para facilitar o layout
  const positions = {
    CPU: { top: '20%', left: '10%' },
    MEM: { top: '40%', left: '20%' },
    NET: { top: '60%', left: '15%' },
  };

  // Gera as colunas de código binário só no cliente para evitar erro de hidratação
  useEffect(() => {
    function generateBinaryColumn(length: number) {
      let bin = '';
      for (let i = 0; i < length; i++) {
        bin += Math.random() > 0.5 ? '1\n' : '0\n';
      }
      return bin;
    }

    const cols = [...Array(10)].map(() => generateBinaryColumn(40));
    setBinaryColumns(cols);
  }, []);

  return (
    <section
      id="home"
      className={`${inter.className} relative bg-black text-white w-full min-h-screen pt-20 md:pt-24 px-6 md:px-12 lg:pl-[5.5rem] lg:pr-12 flex items-center overflow-hidden`}
    >
      {/* Linha branca separando Header da Home */}
      <div className="absolute top-0 left-0 w-full border-t border-white opacity-30" />

      {/* Elementos flutuantes no desktop */}
      <div className="absolute inset-0 z-0 hidden md:block pointer-events-none">
        {/* Ícones originais */}
        <div className="absolute top-32 left-1/4 text-purple-400 text-lg animate-float">◦</div>
        <div className="absolute top-12 right-1/4 text-green-400 text-base animate-float-delayed">◦</div>
        <div className="absolute bottom-20 left-1/3 text-yellow-400 text-sm animate-float-slow">△</div>
        <div className="absolute top-1/2 right-20 text-gray-400 text-xs font-mono animate-fade-in">&lt;_01</div>
        <div className="absolute bottom-16 right-16 text-gray-400 text-sm font-mono animate-fade-in-delayed">&lt;/&gt;</div>

        {/* Elementos decorativos à esquerda da coluna Matrix */}
        <div className="absolute top-0 right-[270px] h-full w-[180px]">
          {/* Retângulos */}
          <div className="absolute top-[15%] left-4 w-16 h-6 bg-purple-500 opacity-40 rounded-sm animate-float" />
          <div className="absolute top-[38%] w-20 h-8 bg-green-500 opacity-30 rounded-md animate-float-delayed" style={{ left: '-130px' }} />
          <div className="absolute bottom-[30%] left-6 w-14 h-5 bg-yellow-400 opacity-30 rounded animate-float-slow" />

          {/* Círculos */}
          <div className="absolute top-[50%] left-1 w-5 h-5 bg-pink-500 rounded-full opacity-50 animate-float" />
          <div className="absolute top-[95%] left-1 w-3 h-3 bg-blue-400 rounded-full opacity-50 animate-float-delayed" />
          <div className="absolute bottom-20 left-20 w-6 h-6 bg-red-500 rounded-full opacity-40 animate-float-slow" />

          {/* Dados técnicos posicionados */}
          <div
            style={{ top: '25%', left: '-100%' }}
            className="absolute text-xs text-gray-400 font-mono opacity-60 animate-fade-in cursor-default select-none"
          >
            CPU: 72%
          </div>
          <div
            style={{ top: '15%', left: '-300%' }}
            className="absolute text-xs text-gray-400 font-mono opacity-60 animate-fade-in-delayed cursor-default select-none"
          >
            MEM: 3.1GB
          </div>
          <div
            style={{ top: '60%', left: '-50%' }}
            className="absolute text-xs text-gray-400 font-mono opacity-60 animate-fade-in cursor-default select-none"
          >
            NET: 120Mbps
          </div>
        </div>

        {/* Efeito Matrix no lado direito */}
        <div className="absolute top-0 right-0 h-full w-64 overflow-hidden opacity-30">
          {binaryColumns.length === 0
            ? null
            : binaryColumns.map((col, i) => (
                <div
                  key={i}
                  className="absolute text-green-400 font-mono text-sm whitespace-pre"
                  style={{
                    left: `${i * 12}px`,
                    animation: `matrixFall ${8 + i}s linear infinite`,
                    animationDelay: `${i * 0.8}s`,
                  }}
                >
                  {col}
                </div>
              ))}
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-4xl text-left -mt-12 md:mt-12">
        <span className="text-xs md:text-sm text-purple-400 tracking-wide uppercase">
          De desenvolvedor para cliente
        </span>
        <h1 className="mt-2 text-3xl md:text-5xl font-light tracking-wide leading-tight">
          Soluções <span className="font-light text-white">Front-End</span>
          <br /> para seu negócio digital
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-400 max-w-md font-light tracking-wide leading-relaxed">
          Transformo ideias em experiências visuais impactantes, com foco em performance e design moderno.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block border border-white rounded-full px-5 py-2 text-xs md:text-sm font-medium hover:bg-purple-700 transition duration-300"
        >
          Quero um site →
        </a>
      </div>

      {/* Animações */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 7s ease-in-out 1s infinite;
        }
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }
        .animate-fade-in-delayed {
          animation: fadeIn 2.5s ease-out 0.5s forwards;
        }

        /* Efeito Matrix */
        @keyframes matrixFall {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </section>
  );
}
