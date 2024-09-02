import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/global.css';
import SideBox from '@/components/others/SideBoxes/SideBox';
import Header from './../components/layout/header/Header';
import Nav from './../components/layout/nav/Nav';

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
        <SideBox>aa</SideBox>
        <div>{children}</div>
      </body>
    </html>
  );
}
