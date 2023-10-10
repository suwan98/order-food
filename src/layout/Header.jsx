import CartButton from "../components/Header/CartButton";
import meals from "./../assets/meals.jpg";

function Header({onShowCart}) {
  return (
    <>
      <header className="fixed top-0 left-0 w-full h-[5rem] bg-[#8a2b06] text-white flex justify-between items-center px-[10%] z-10">
        <h1>ReactMeals</h1>
        <CartButton onClick={onShowCart} />
      </header>
      <div className="w-full h-[25rem] z-0 overflow-hidden">
        <img src={meals} alt="" className="w-[110%] h-full object-cover" />
      </div>
    </>
  );
}

export default Header;
