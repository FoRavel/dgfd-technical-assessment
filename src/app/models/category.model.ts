import { Product } from './product.model';

export interface Category {
  name: string;
  icon: string;
  products: Product[];
}
