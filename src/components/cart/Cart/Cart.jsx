import Modal from "../../common/Modal/Modal";
import S from "./Cart.module.css";

function Cart({onHideModal}) {
  const cartItems = [{id: "c1", name: "초밥", amount: 2, price: 12.99}];

  return (
    <Modal onHideModal={onHideModal}>
      <ul>
        {cartItems.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
      <div className={S.total}>
        <span>총 수량</span>
        <span>35000원</span>
      </div>
      <div className={S.actions}>
        <button className={S["button--alt"]} onClick={onHideModal}>
          닫기
        </button>
        <button className={S.button}>주문</button>
      </div>
    </Modal>
  );
}

export default Cart;
