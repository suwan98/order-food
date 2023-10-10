import CarWrapper from "../../wrapper/CarWrapper.jsx";
import DUMMY_MEALS from "./../../server/data.js";
import MealItem from "./MealItem.jsx";

function AvailableMeals() {
  return (
    <>
      <CarWrapper>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </CarWrapper>
    </>
  );
}

export default AvailableMeals;
