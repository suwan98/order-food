import {createContext} from "react";

const CartContenxt = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContenxt;
