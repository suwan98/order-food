import Input from "../../common/Input/Input";
import S from "./FoodItemForm.module.css";

function FoodItemForm() {
  return (
    <>
      <form className={S.form}>
        <label htmlFor=""></label>
        <Input
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
