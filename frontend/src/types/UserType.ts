export interface User {
  id?: number;
  picture: string;
  name: string;
  email: string;
  password: string;
  cart?: string;
  created_at?: Date;
  updated_at?: Date;
}
