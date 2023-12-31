import S from "./FoodsSummary.module.css";

function FoodsSummary() {
  return (
    <>
      <section className={S.summary}>
        <h2>맛있는 음식을 당신께</h2>
        <p>
          다양한 배달음식 중에서 마음에 드는 배달음식을 선택하고 집에서 맛있는
          점심 또는 저녁 식사를 즐기세요.
        </p>
        <p>
          우리의 모든 식사는 고품질의 재료로 제때에 조리되며 물론 숙련된 셰프가
          제공합니다!
        </p>
      </section>
    </>
  );
}

export default FoodsSummary;
