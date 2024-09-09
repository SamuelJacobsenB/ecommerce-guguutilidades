import { Product } from './ProductType';

export interface CartType {
  cart: string | null | undefined;
  fixedProducts: Product[];
}
