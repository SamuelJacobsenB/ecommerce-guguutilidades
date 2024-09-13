'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { IoPencil, IoTrash } from 'react-icons/io5';
import getAllProducts from '@/functions/getAllProducts';
import AdminMenu from '@/components/others/AdminMenu/AdminMenu';
import LoadImage from '@/components/others/LoadImage/LoadImage';
import Button from '@/components/others/Button/Button';
import adminVerify from '@/functions/adminVerify';
import deleteProduct from '@/functions/deleteProduct';
import { Product } from '@/types/ProductType';
import './page.css';

const Modify = () => {
  const router = useRouter();

  const [fixedProducts, setFixedProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const verify = useCallback(async () => {
    const token: string | null = window.localStorage.getItem('token');
    if (token) {
      const res: any = await adminVerify(token);

      if (res.error_msg) router.push('/home');
    } else router.push('/home');
  }, []);

  const getProducts = useCallback(async () => {
    const allProducts: Product[] | undefined = await getAllProducts();
    if (allProducts) {
      setFixedProducts(allProducts);
      setProducts(allProducts);
    }
  }, []);

  const handleDelete = async (id: number) => {
    const token: string | null = window.localStorage.getItem('token');
    if (token) {
      const res: any = await deleteProduct(id, token);

      if (res.success_msg) window.location.reload();
      else console.log(res.error_msg);
    } else router.push('/home');
  };

  useEffect(() => {
    verify();
    getProducts();
  }, [getProducts, verify]);

  return (
    <>
      <AdminMenu fixedProducts={fixedProducts} setProducts={setProducts} />
      <div className="modify">
        <h1 className="modify_title">Modificar produtos:</h1>
        <div className="admin_product_list">
          {products.map((product: Product) => {
            const { id, picture, name } = product;

            return (
              <div className="admin_product" key={Number(id)}>
                <LoadImage src={picture} alt={name} width={180} height={260} />
                <h3 className="admin_product_name">{name}</h3>
                <div className="admin_product_btn_area">
                  <Button type="button" colorType="blue">
                    <IoPencil /> Editar
                  </Button>
                  <Button
                    type="button"
                    colorType="red"
                    onClick={() => handleDelete(Number(id))}
                  >
                    <IoTrash /> Deletar
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Modify;
