import {useContext} from "react";
import Modal from "../../common/Modal/Modal";
import S from "./Cart.module.css";
import CartContenxt from "./../../../store/CartContext";
import CartItem from "../CartItem/CartItem";

function Cart({onHideModal}) {
  const cartCtx = useContext(CartContenxt);

  const totalAmount = cartCtx.totalAmount;
  const hasItems = cartCtx.items.length > 0;

  const handleRemoveCartItem = (id) => {
    cartCtx.removeItem(id);
  };

  const handleAddCartItem = (item) => {
    cartCtx.addItem(item);
  };

  return (
    <Modal onHideModal={onHideModal}>
      <ul>
        {cartCtx.items.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onRemove={handleRemoveCartItem.bind(null, item.id)}
              onAdd={handleAddCartItem.bind(null, item)}
            />
          );
        })}
      </ul>
      <div className={S.total}>
        <span>총 수량</span>
        <span>{totalAmount}원</span>
      </div>
      <div className={S.actions}>
        <button className={S["button--alt"]} onClick={onHideModal}>
          닫기
        </button>
        {hasItems && <button className={S.button}>주문</button>}
      </div>
    </Modal>
  );
}

export default Cart;
