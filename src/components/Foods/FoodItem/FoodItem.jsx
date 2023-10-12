import {useContext} from "react";
import FoodItemForm from "../FoodItemForm/FoodItemForm";
import S from "./FoodItem.module.css";
import CartContenxt from "../../../store/CartContext";

function FoodItem({id, name, description, price}) {
  const cartCtx = useContext(CartContenxt);
  const handleAddToCart = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <>
      <li className={S.meal}>
        <div>
          <h3>{name}</h3>
          <div className={S.description}>{description}</div>
          <div className={S.price}>{`${price}원`}</div>
        </div>
        <div>
          <FoodItemForm onAddToCart={handleAddToCart} />
        </div>
      </li>
    </>
  );
}

export default FoodItem;
