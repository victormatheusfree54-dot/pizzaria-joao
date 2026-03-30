import type {Metadata} from 'next';
import { Playfair_Display, Raleway } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: "San's Forneria | Pizza Artesanal Delivery Barra Recreio Jacarepaguá RJ",
  description: "Bateu a fome? Peça agora a melhor pizza artesanal do Rio de Janeiro. Entrega rápida na Barra, Recreio e Jacarepaguá. 6 anos de tradição e massa de verdade.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${playfair.variable} ${raleway.variable} font-raleway antialiased bg-noise`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
