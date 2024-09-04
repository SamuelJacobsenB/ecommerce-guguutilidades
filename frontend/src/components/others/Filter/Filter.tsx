import { useState } from 'react';
import { IoFilter } from 'react-icons/io5';
import { FilterType } from '@/types/FilterType';
import { Product } from '@/types/ProductType';
import './Filter.css';

const Filter = (props: FilterType) => {
  const { products, setProducts } = props;

  const [minPrice, setMinPrice] = useState<string>();
  const [maxPrice, setMaxPrice] = useState<string>();
  const [category, setCategory] = useState<string>();

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

    products.map((product: Product) => {
      if (product.price >= Number(minPrice)) {
        correctProducts.push(product);
      }

      if (product.price <= Number(maxPrice)) {
        correctProducts.push(product);
      }

      if (product.category == category) {
        correctProducts.push(product);
      }
    });

    console.log(correctProducts);

    setProducts(correctProducts);
  };

  return (
    <div className="filter">
      <div className="filter_content">
        <div className="filter_icons" onClick={handleSetFilterVisble}>
          <IoFilter className="filter_home_icon" /> Filtrar produtos
        </div>

        <div className={filterVisible ? 'filters' : 'filters disable'}>
          <form className="filter_form" onSubmit={(evt) => filterProducts(evt)}>
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
  );
};

export default Filter;
