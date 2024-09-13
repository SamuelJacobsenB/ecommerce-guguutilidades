'use client';

import { useState, useEffect, useCallback, FormEvent } from 'react';
import { useRouter, useParams } from 'next/navigation';
import AdminNav from '@/components/others/AdminNav/AdminNav';
import FormArea from '@/components/others/FormArea/FormArea';
import Button from '@/components/others/Button/Button';
import adminVerify from '@/functions/adminVerify';
import updateProduct from '@/functions/updateProduct';
import getProductById from '@/functions/getProductById';
import { Product } from '@/types/ProductType';
import './page.css';

const Update = () => {
  const router = useRouter();
  const params: any = useParams();

  const [picture, setPicture] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(0);

  const categories: string[] = [
    'toy',
    'house',
    'school',
    'utilities',
    'decoration',
  ];

  const verify = useCallback(async () => {
    const token: string | null = localStorage.getItem('token');
    if (token) {
      const res: any = await adminVerify(token);

      if (res.error_msg) router.push('/home');
    } else router.push('/home');
  }, []);

  const getProduct = useCallback(async () => {
    const res: Product = await getProductById(params.id);

    if (res) {
      setPicture(res.picture);
      setName(res.name);
      setDescription(res.description);
      setPrice(res.price);
    } else router.push('/admin/modify');
  }, []);

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    const token: string | null = localStorage.getItem('token');
    evt.preventDefault();

    if (token) {
      if (picture && name && description && price && price > 0) {
        const product: Product = {
          picture,
          name,
          description,
          price,
        };

        const res: any = await updateProduct(product, params.id, token);

        if (res.success_msg) router.push('/admin/modify');
        else console.log(res.error_msg);
      }
    } else router.push('/home');
  };

  useEffect(() => {
    verify();
    getProduct();
  }, [verify, getProduct]);

  return (
    <>
      <AdminNav />
      <div className="update_div">
        <h1 className="update_title">Editar Produto:</h1>
        <form
          className="update_form"
          onSubmit={(evt: FormEvent<HTMLFormElement>) => handleSubmit(evt)}
        >
          <FormArea
            name="picture"
            type="text"
            labelText="Imagem"
            inputPlaceholder="URL da imagem"
            value={picture}
            setValue={setPicture}
          />
          <FormArea
            name="name"
            type="text"
            labelText="Nome"
            inputPlaceholder="Nome do produto"
            value={name}
            setValue={setName}
          />
          <FormArea
            name="description"
            type="text"
            labelText="Descrição"
            inputPlaceholder="Descrição do produto"
            value={description}
            setValue={setDescription}
          />
          <FormArea
            name="price"
            type="number"
            labelText="Preço"
            inputPlaceholder="R$ --,--"
            value={price}
            setValue={setPrice}
          />
          <Button type="submit" colorType="yellow">
            Confirmar edição
          </Button>
        </form>
      </div>
    </>
  );
};

export default Update;
