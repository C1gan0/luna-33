// src/app/providers.tsx
'use client';

import { ThemeProvider } from "next-themes"; // ou qualquer outro contexto global
import { ReactNode } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
