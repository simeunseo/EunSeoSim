import Card from "./Card";
import { LevelContext } from "../context/context";
import { getCardArr } from "../utils/GetCardArr";
import styled from "styled-components";
import { useContext } from "react";

const Cards = () => {
  const levelType = useContext(LevelContext);

  return (
    <CardWrapper>
      {getCardArr(levelType).map((imgId, idx) => (
        <Card imgId={imgId} key={idx}></Card>
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
