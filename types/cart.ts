export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  tax: number;
  total: number;
} 