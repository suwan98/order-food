import FoodItemForm from "../FoodItemForm/FoodItemForm";
import S from "./FoodItem.module.css";

function FoodItem({name, description, price}) {
  return (
    <>
      <li className={S.meal}>
        <div>
          <h3>{name}</h3>
          <div className={S.description}>{description}</div>
          <div className={S.price}>{`${price}원`}</div>
        </div>
        <div>
          <FoodItemForm />
        </div>
      </li>
    </>
  );
}

export default FoodItem;
