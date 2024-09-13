'use client';

import { useState, useEffect, useCallback, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import FormArea from '@/components/others/FormArea/FormArea';
import AdminNav from '@/components/others/AdminNav/AdminNav';
import Button from '@/components/others/Button/Button';
import adminVerify from '@/functions/adminVerify';
import createProduct from '@/functions/createProduct';
import { Product } from '@/types/ProductType';
import './page.css';

const Create = () => {
  const router = useRouter();

  const [picture, setPicture] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>();
  const [category, setCategory] = useState<string>();

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

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    const token: string | null = localStorage.getItem('token');
    evt.preventDefault();

    if (token) {
      if (picture && name && description && price && price > 0 && category) {
        const product: Product = {
          picture,
          name,
          description,
          price,
          category,
        };

        const res: any = await createProduct(product, token);

        if (res.success_msg) router.push('/admin/modify');
        else console.log(res.error_msg);
      }
    } else router.push('/home');
  };

  useEffect(() => {
    verify();
  }, [verify]);

  return (
    <>
      <AdminNav />
      <div className="create_div">
        <h1 className="create_title">Cadastar produto:</h1>
        <form
          className="create_form"
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
          <div className="create_form_area">
            <label htmlFor="category">Categoria</label>
            <select
              name="category"
              id="category"
              className="select_category create_category"
              onChange={(evt) => setCategory(evt.target.value)}
            >
              {categories.map((categorie, i) => {
                return (
                  <option value="categorie" key={i}>
                    {categorie}
                  </option>
                );
              })}
            </select>
          </div>
          <Button type="submit" colorType="yellow">
            Cadastrar
          </Button>
        </form>
      </div>
    </>
  );
};

export default Create;
