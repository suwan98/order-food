import MealItemForm from "./MealItemForm";

function MealItem({name, description, price}) {
  const fixedPrice = `$${price.toFixed(2)}`;

  return (
    <>
      <li>
        <div>
          <h3 className="ml-[0.25rem]">{name}</h3>
          <div>{description}</div>
          <div className="mt-1 font-bold tet-[#ad5502] text-xl">
            {fixedPrice}
          </div>
        </div>
        <div>
          <MealItemForm />
        </div>
      </li>
    </>
  );
}

export default MealItem;
