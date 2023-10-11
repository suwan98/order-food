import S from "./Cart.module.css";

function Card({children}) {
  return (
    <>
      <div className={S.card}>{children}</div>
    </>
  );
}

export default Card;
