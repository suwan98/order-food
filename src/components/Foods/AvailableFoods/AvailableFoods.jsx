import Card from "../../common/Card/Card";
import DUMMY_MEALS from "../../../server/data";
import S from "./AvailableFoods.module.css";
import FoodItem from "../FoodItem/FoodItem";

function AvailableFoods() {
  const foodList = DUMMY_MEALS.map((food) => {
    return (
      <FoodItem
        key={food.id}
        name={food.name}
        description={food.description}
        price={food.price}
      />
    );
  });

  return (
    <>
      <section className={S.meals}>
        <Card>
          <ul>{foodList}</ul>
        </Card>
      </section>
    </>
  );
}

export default AvailableFoods;
