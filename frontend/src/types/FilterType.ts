import { Product } from './ProductType';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';

export interface FilterType {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
}
