// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crv Solutions", // Mantenha o título do seu projeto
  description: "Solutions in Cybersecurity", // Mantenha a descrição do seu projeto
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR"> {/* Altere para "pt-BR" se seu site for em português */}
      <body>
        {children}
      </body>
    </html>
  );
}