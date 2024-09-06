import { Product } from './ProductType';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';

export interface SearchType {
  fixedProducts: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
}
