import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/global.css';
import Header from './../components/layout/header/Header';
import Nav from './../components/layout/nav/Nav';
import SideMenu from '@/components/others/SideBoxes/SideMenu/SideMenu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gugu-Utilidades',
  description: 'E-commerce Gugu-Utilidades',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className}`}>
        <Header />
        <Nav />
        <div className="interactive_boxes">
          <SideMenu />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
