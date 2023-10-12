import S from "./CartItem.module.css";

const CartItem = ({name, price, amount, onRemove, onAdd}) => {
  return (
    <li className={S["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={S.summary}>
          <span className={S.price}>{price}원</span>
          <span className={S.amount}>x {amount}</span>
        </div>
      </div>
      <div className={S.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
