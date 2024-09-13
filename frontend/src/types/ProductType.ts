import { Category } from './CategoryType';

export interface Product {
  id?: number;
  picture: string;
  name: string;
  description: string;
  price: number;
  category: Category | string;
  created_at?: Date;
  updated_at?: Date;
}
