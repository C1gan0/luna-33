"use client";
import Image from "next/image";
import perfil from '../../public/sua-foto-about.jpg.png'; // Importe a imagem gerada

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Imagem */}
          <div className="flex justify-center">
             <Image
              src={perfil}
              alt="Sua foto"
              className="rounded-lg shadow-md"
              width={400}
              height={400}
              objectFit="cover"
            />
          </div>

          {/* Texto */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">Sobre Mim</h2>
            <div className="text-gray-600 text-base sm:text-lg leading-relaxed">
              <p>
                Olá, sou um desenvolvedor web apaixonado por construir experiências digitais robustas e seguras.
              </p>
              <p>
                Minha jornada no mundo do desenvolvimento web me levou a focar em React e Next.js, tecnologias que me permitem criar sites performáticos e com excelente usabilidade. Tenho uma vasta experiência na{' '}
                <strong className="font-semibold">integração do front-end com APIs e diversas fontes de dados</strong>, garantindo conexões eficientes e seguras para o seu projeto.
              </p>
              <p>
                Acredito que a segurança é fundamental em qualquer aplicação web. Por isso, aplico as melhores práticas para proteger os dados e garantir a integridade do sistema.
              </p>
              <p>
                Além do desenvolvimento de novas funcionalidades e da criação de componentes reutilizáveis, também ofereço serviços de{' '}
                <strong className="font-semibold">manutenção front-end</strong> e{' '}
                <strong className="font-semibold">otimização de sites</strong>, buscando sempre a melhor performance e aprimorando a experiência do usuário.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}