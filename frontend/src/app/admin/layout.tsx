'use client';

import AdminMenu from '@/components/others/AdminMenu/AdminMenu';
import { useState, useEffect, useCallback } from 'react';
import getAllProducts from '@/functions/getAllProducts';
import { Product } from '@/types/ProductType';
import './layout.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [fixedProducts, setFixedProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = useCallback(async () => {
    const allProducts: Product[] | undefined = await getAllProducts();
    if (allProducts) {
      setFixedProducts(allProducts);
      setProducts(allProducts);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <html lang="pt-br">
      <body>
        <AdminMenu fixedProducts={fixedProducts} setProducts={setProducts} />
        <div className="admin_content">{children}</div>
      </body>
    </html>
  );
}
