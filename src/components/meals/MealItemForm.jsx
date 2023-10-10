import Input from "../../common/Input";

function MealItemForm() {
  return (
    <>
      <form>
        <Input
          label="Amount"
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+ 추가</button>
      </form>
    </>
  );
}

export default MealItemForm;
