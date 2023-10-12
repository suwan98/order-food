import {useRef} from "react";
import Input from "../../common/Input/Input";
import S from "./FoodItemForm.module.css";

function FoodItemForm({onAddToCart}) {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredAmount = inputRef.current.value;
    const enterdAmountNumber = +enteredAmount;

    onAddToCart(enterdAmountNumber);
  };

  return (
    <>
      <form className={S.form} onSubmit={handleSubmit}>
        <label htmlFor=""></label>
        <Input
          ref={inputRef}
          label="수량"
          id="amount"
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
        <button>추가하기</button>
      </form>
    </>
  );
}

export default FoodItemForm;
