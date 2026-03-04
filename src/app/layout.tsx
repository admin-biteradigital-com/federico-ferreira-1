import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'Federico Ferreira | Curriculum Vitae',
  description: 'Professional Curriculum Vitae of Federico Ferreira.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${outfit.variable} font-sans antialiased min-h-screen selection:bg-sky-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
