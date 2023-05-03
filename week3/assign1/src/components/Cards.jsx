import { useContext, useMemo, useState } from "react";

import Card from "./Card";
import { LevelContext } from "../context/context";
import { getCardArr } from "../utils/GetCardArr";
import styled from "styled-components";

const Cards = () => {
  const levelType = useContext(LevelContext);

  //levelType이 변경되지 않는한, cardAllList는 바꾸지 말아줘!!!
  const cardAllList = useMemo(() => {
    const cardAllList = getCardArr(levelType);
    return cardAllList;
  }, [levelType]);

  const [compareList, setCompareList] = useState([]); // 비교 대상인 카드의 pk를 저장
  const [pairedList, setPairedList] = useState([]); // 짝을 맞춘 카드의 imgId를 저장

  const clickHandler = (pk, imgId) => {
    let tempCompareList = [];
    switch (compareList.length) {
      case 0: // 첫번째 선택
        tempCompareList = [...compareList];
        tempCompareList.push({ pk, imgId });
        setCompareList(tempCompareList);
        console.log("첫 선택", pk, imgId);
        break;
      case 1: //두번째 선택
        tempCompareList = [...compareList];
        tempCompareList.push({ pk, imgId });
        setCompareList(tempCompareList);
        console.log("두번째 선택", pk, imgId);
        if (compareList[0].imgId === imgId) {
          console.log("정답~");
        }
        break;
    }
    console.log(compareList);
  };

  return (
    <CardWrapper>
      {cardAllList.map((imgId, idx) => (
        <Card
          imgId={imgId}
          key={idx}
          pk={idx}
          clickHandler={clickHandler}
          compareList={compareList}
        ></Card>
      ))}
    </CardWrapper>
  );
};

const CardWrapper = styled.section`
  width: 90vw;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin: auto;
  margin-top: 3rem;
  padding-bottom: 3rem;
`;

export default Cards;
