import { ACT_ADD_CART } from "../constrains";

type Product = {
  listProduct: [];
  product_id: number;
  product_name: string;
  image: string;
  price: number;
  description: string;
};

export const act_add_cart = (product: Product) => {
  return {
    type: ACT_ADD_CART,
    payload: product,
  };
};
