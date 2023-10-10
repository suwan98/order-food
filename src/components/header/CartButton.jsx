import CartIcon from "../cart/CartIcon";
import {useContext} from "react";
import CartContext from "./../../store/CartContext";

function CartButton({...restProps}) {
  const cartContext = useContext(CartContext);
  const numberOfCartItems = cartContext.items.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);

  return (
    <>
      <button
        className="cursor-pointer border-none bg-[#4d1601] text-white flex py-[0.75rem] px-[3rem] justify-around items-center rounded-[25px] font-bold hover:bg-[#2c0d00] active:bg-[#2c0d90]"
        {...restProps}>
        <span>
          <CartIcon className="mr-[0.5rem]" />
        </span>
        <span>Your Cart</span>
        <span>{numberOfCartItems}</span>
      </button>
    </>
  );
}

export default CartButton;
