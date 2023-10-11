import meals from "./../../../assets/meals.jpg";
import S from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header({onShowModal}) {
  return (
    <>
      <header className={S.header}>
        <h1>OrderFood🍕</h1>
        <HeaderCartButton onClick={onShowModal} />
      </header>
      <div className={S["main-image"]}>
        <img src={meals} alt="음식사진" />
      </div>
    </>
  );
}

export default Header;
