import Modal from "../../common/modal/Modal";

function Cart({onClose}) {
  const cartItems = [{id: "c1", name: "Sushi", amount: 2, price: 12.99}];

  return (
    <Modal onClose={onClose}>
      <ul>
        {cartItems.map((item) => (
          <li className="m-0 p-0 max-h-80 overflow-auto" key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center font-bold text-2xl my-4">
        <span>총 수량</span>
        <span>35,000원</span>
      </div>
      <div className="cursor-pointer bg-transparent border border-[#8a2b06] py-2 px-8 rounded-[25px] ml-4">
        <button>닫기</button>
        <button>주문하기</button>
      </div>
    </Modal>
  );
}

export default Cart;
