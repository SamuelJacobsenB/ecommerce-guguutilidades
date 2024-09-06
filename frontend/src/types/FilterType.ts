import { Product } from './ProductType';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';

export interface FilterType {
  fixedProducts: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
}
