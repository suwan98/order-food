import {useContext} from "react";
import CartIcon from "./../../Cart/CartIcon";
import S from "./HeaderCartButton.module.css";
import CartContenxt from "./../../../store/CartContext";
import {useEffect} from "react";
import {useState} from "react";

function HeaderCartButton({...props}) {
  const cartCtx = useContext(CartContenxt);
  const totalCartItemsAmount = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const {items} = cartCtx;
  const [isButtonHighLigth, setIsButtonHighLight] = useState(false);
  const buttonClass = `${S.button} ${isButtonHighLigth ? S.bump : null}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsButtonHighLight(true);
    const timer = setTimeout(() => {
      setIsButtonHighLight(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <>
      <button className={buttonClass} {...props}>
        <span className={S.icon}>
          <CartIcon />
        </span>
        <span>내 장바구니</span>
        <span className={S.badge}>{totalCartItemsAmount}</span>
      </button>
    </>
  );
}

export default HeaderCartButton;
