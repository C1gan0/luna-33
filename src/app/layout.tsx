// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

// Importações dos componentes fixos e providers
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Providers } from "./providers"; // Se você tiver um arquivo de Providers
import { ReactNode } from "react";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Crv Solutions",
  description: "Solutions in Cybersecurity",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers> {/* Aqui você envolve o app com contexto global */}
          < ScrollToTop />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
