'use client';

import { useState, useEffect, useCallback } from 'react';
import getAllProducts from '@/functions/getAllProducts';
import { IoFilter } from 'react-icons/io5';
import LoadImage from '@/components/others/LoadImage/LoadImage';
import Header from '@/components/layout/header/Header';
import Nav from '@/components/layout/nav/Nav';
import SideMenu from '@/components/others/SideBoxes/SideMenu/SideMenu';
import { Product } from '@/types/ProductType';
import './page.css';

const Home = () => {
  const [minPrice, setMinPrice] = useState<string>();
  const [maxPrice, setMaxPrice] = useState<string>();
  const [category, setCategory] = useState<string>();

  const [products, setProducts] = useState<Product[]>([]);
  const [filterVisible, setFilterVisible] = useState<boolean>(false);
  const handleSetFilterVisble = () => setFilterVisible(!filterVisible);
  const categories: string[] = [
    'all',
    'toy',
    'house',
    'school',
    'utilities',
    'decoration',
  ];

  const filterProducts = (evt: any) => {
    evt.preventDefault();

    let correctProducts: Product[] = [];

    if (minPrice) {
      products.map((product: Product) => {
        if (product.price >= Number(minPrice)) {
          correctProducts.push(product);
        }
      });
    }

    if (maxPrice) {
      products.map((product: Product) => {
        if (product.price <= Number(maxPrice)) {
          correctProducts.push(product);
        }
      });
    }

    if (category) {
      products.map((product: Product) => {
        if (product.category == category) {
          correctProducts.push(product);
        }
      });
    }

    setProducts(correctProducts);
  };

  const getProducts = useCallback(async () => {
    const allProducts: Product[] | undefined = await getAllProducts();
    if (allProducts) setProducts(allProducts);
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="home">
      <Header />
      <Nav />
      <div className="interactive_boxes">
        <SideMenu />
      </div>

      <h1 className="home_title">Seja bem vindo(a)</h1>

      <div className="products">
        <div className="filter">
          <div className="filter_content">
            <div className="filter_icons" onClick={handleSetFilterVisble}>
              <IoFilter className="filter_home_icon" /> Filtrar produtos
            </div>

            <div className={filterVisible ? 'filters' : 'filters disable'}>
              <form
                className="filter_form"
                onSubmit={(evt) => filterProducts(evt)}
              >
                <div className="filter_form_area">
                  <label htmlFor="min">Preço mínimo: </label>
                  <input
                    type="number"
                    name="min"
                    id="min"
                    className="filter_input"
                    placeholder="Preço mínimo"
                    value={minPrice}
                    onChange={(evt) =>
                      setMinPrice(Number(evt.target.value).toFixed(2))
                    }
                  />
                </div>
                <div className="filter_form_area">
                  <label htmlFor="max">Preço máximo: </label>
                  <input
                    type="number"
                    name="max"
                    id="max"
                    className="filter_input"
                    placeholder="Preço máximo"
                    value={maxPrice}
                    onChange={(evt) =>
                      setMaxPrice(Number(evt.target.value).toFixed(2))
                    }
                  />
                </div>
                <div className="filter_form_area">
                  <label htmlFor="category">Categoria: </label>
                  <select
                    name="category"
                    id="category"
                    className="select_categry filter_input"
                    onChange={(evt) => setCategory(evt.target.value)}
                  >
                    {categories.map((categorie) => {
                      return <option value="categorie">{categorie}</option>;
                    })}
                  </select>
                </div>
                <button type="submit" className="filter_btn">
                  Cadastrar filtro
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="product_list">
          {products.map((product: Product) => {
            const { id, picture, name, price } = product;

            return (
              <div className="home_product" key={Number(id)}>
                <LoadImage src={picture} alt={name} width={180} height={260} />
                <h3 className="product_name">{name}</h3>
                <big className="product_price">R$ {price.toFixed(2)}</big>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
