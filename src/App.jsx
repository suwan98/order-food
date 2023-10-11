import {useState} from "react";
import Cart from "./components/Cart/Cart/Cart";
import Foods from "./components/Foods/Foods";
import Header from "./components/Layout/Header/Header";

function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const handleShowModal = () => {
    setIsShowModal(true);
  };
  const handleHideModal = () => {
    setIsShowModal(false);
  };

  return (
    <>
      {isShowModal && <Cart onHideModal={handleHideModal} />}
      <Header onShowModal={handleShowModal} />
      <main>
        <Foods />
      </main>
    </>
  );
}

export default App;
