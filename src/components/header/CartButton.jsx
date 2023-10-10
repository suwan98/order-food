import CartIcon from "../cart/CartIcon";

function CartButton({...restProps}) {
  return (
    <>
      <button
        className="cursor-pointer border-none bg-[#4d1601] text-white flex py-[0.75rem] px-[3rem] justify-around items-center rounded-[25px] font-bold hover:bg-[#2c0d00] active:bg-[#2c0d90]"
        {...restProps}>
        <span>
          <CartIcon className="mr-[0.5rem]" />
        </span>
        <span>Your Cart</span>
        <span>3</span>
      </button>
    </>
  );
}

export default CartButton;
