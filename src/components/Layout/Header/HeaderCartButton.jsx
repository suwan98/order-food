import CartIcon from "./../../Cart/CartIcon";
import S from "./HeaderCartButton.module.css";

function HeaderCartButton({...props}) {
  return (
    <>
      <button className={S.button} {...props}>
        <span className={S.icon}>
          <CartIcon />
        </span>
        <span>내 장바구니</span>
        <span className={S.badge}>3</span>
      </button>
    </>
  );
}

export default HeaderCartButton;
