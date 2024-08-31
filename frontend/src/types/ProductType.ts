import { Category } from './CategoryType';

export interface Product {
  picture: string;
  name: string;
  description: string;
  price: number;
  category: Category;
}
