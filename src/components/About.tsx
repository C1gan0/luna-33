"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import perfil from "../../public/sua-foto-about.jpg.png";

type TypewriterSequenceProps = {
  texts: string[];
  speed?: number;
  paragraphDelay?: number;
  startDelay?: number;
  className?: string;
};

function TypewriterSequence({
  texts,
  speed = 30,
  paragraphDelay = 500,
  startDelay = 0,
  className,
}: TypewriterSequenceProps) {
  const [displayedTexts, setDisplayedTexts] = useState<string[]>(() =>
    texts.map(() => "")
  );

  const cancelledRef = useRef(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setDisplayedTexts(texts.map(() => ""));
    cancelledRef.current = false;

    async function runSequence() {
      if (startDelay > 0) {
        await new Promise<void>((res) =>
          (timeoutRef.current = window.setTimeout(() => res(), startDelay))
        );
      }

      for (let p = 0; p < texts.length; p++) {
        if (cancelledRef.current) break;

        const chars = Array.from(texts[p]);

        for (let i = 0; i <= chars.length; i++) {
          if (cancelledRef.current) break;

          setDisplayedTexts((prev) => {
            const next = [...prev];
            next[p] = chars.slice(0, i).join("");
            return next;
          });

          if (i < chars.length) {
            await new Promise<void>((res) =>
              (timeoutRef.current = window.setTimeout(() => res(), speed))
            );
          }
        }

        if (!cancelledRef.current && paragraphDelay > 0) {
          await new Promise<void>((res) =>
            (timeoutRef.current = window.setTimeout(() => res(), paragraphDelay))
          );
        }
      }
    }

    runSequence();

    return () => {
      cancelledRef.current = true;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [texts, speed, paragraphDelay, startDelay]);

  return (
    <>
      {displayedTexts.map((t, idx) => (
        <p
          key={idx}
          className={`${className ?? ""} break-words whitespace-normal max-w-full`}
        >
          {t}
        </p>
      ))}
    </>
  );
}

export default function About() {
  return (
    <section id="about" className="py-16 bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div
            className="flex justify-center"
            style={{ backgroundColor: "white", padding: "0" }}
          >
            <Image
              src={perfil}
              alt="Sua foto"
              width={400}
              height={400}
              style={{ objectFit: "contain", backgroundColor: "white" }}
              // removi rounded-lg para evitar borda arredondada
            />
          </div>

          {/* Texto */}
          <div className="order-2 md:order-1 text-center md:text-left max-w-full">
            <h2 className="mt-2 text-3xl md:text-5xl font-light tracking-wide leading-tight mb-10">
              <TypewriterSequence
                texts={["Sobre Mim"]}
                speed={50}
                paragraphDelay={0}
                startDelay={0}
                className="text-black"
              />
            </h2>

            <div className="text-gray-500 text-base leading-relaxed space-y-5 md:hidden">
              <TypewriterSequence
                texts={[
                  "Sou desenvolvedor web focado em criar experiências rápidas, seguras e visualmente atraentes.",
                  "Trabalho com React e Next.js, entregando performance e design moderno para negócios digitais.",
                ]}
                speed={20}
                paragraphDelay={350}
                className="text-gray-500"
              />
            </div>

            <div className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-5 hidden md:block">
              <TypewriterSequence
                texts={[
                  "Olá, sou um desenvolvedor web apaixonado por criar experiências digitais robustas e envolventes.",
                  "Especializado em React e Next.js, construo interfaces performáticas e de alta usabilidade, integrando front-end com APIs de forma segura e eficiente.",
                  "Segurança é prioridade em cada projeto — aplico as melhores práticas para proteger dados e garantir estabilidade.",
                  "Além do desenvolvimento, ofereço manutenção e otimização, sempre buscando máxima performance e experiência impecável.",
                ]}
                speed={20}
                paragraphDelay={500}
                className="text-gray-600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
