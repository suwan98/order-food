import {useState} from "react";
import Cart from "./components/cart/Cart";
import Meals from "./components/meals/Meals";
import RootLayout from "./layout/RootLayout";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const handleClickShowCart = () => {
    setIsCartVisible(true);
  };
  const handleClickHideCart = () => {
    setIsCartVisible(false);
  };

  return (
    <>
      <CartContextProvider>
        <RootLayout onShowCart={handleClickShowCart}>
          {isCartVisible && <Cart onClose={handleClickHideCart} />}
          <Meals />
        </RootLayout>
      </CartContextProvider>
    </>
  );
}

export default App;
