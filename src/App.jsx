import {useState} from "react";
import Cart from "./components/Cart/Cart/Cart";
import Foods from "./components/Foods/Foods";
import Header from "./components/Layout/Header/Header";
import CartProvider from "./store/CartProvider";

function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const handleShowModal = () => {
    setIsShowModal(true);
  };
  const handleHideModal = () => {
    setIsShowModal(false);
  };

  return (
    <CartProvider>
      {isShowModal && <Cart onHideModal={handleHideModal} />}
      <Header onShowModal={handleShowModal} />
      <main>
        <Foods />
      </main>
    </CartProvider>
  );
}

export default App;
