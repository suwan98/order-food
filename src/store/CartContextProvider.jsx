import {useReducer} from "react";
import CartContext from "./cartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const updatedItems = [...state.items, action.items];
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
  }
  return defaultCartState;
};

function CartContextProvider({children}) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const handleAddItemToCart = (item) => {
    dispatchCartAction({type: "ADD", item: item});
  };
  const handleRemoveItemToCart = (id) => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: handleAddItemToCart,
    removeItem: handleRemoveItemToCart,
  };

  return (
    <>
      <CartContext.Provider value={cartContext}>
        {children}
      </CartContext.Provider>
    </>
  );
}

export default CartContextProvider;
