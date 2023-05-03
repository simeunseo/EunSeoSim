import { LevelContext } from "../context/context";
import { allImageArr } from "../utils/GetCardArr";
import { getCardArr } from "../utils/GetCardArr";
import styled from "styled-components";
import { useContext } from "react";
const Card = ({ imgId }) => {
  return (
    <container>
      <StyledCard src={allImageArr[imgId]}></StyledCard>
    </container>
  );
};

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

const StyledCard = styled.img`
  border: 0.3rem double black;

  background-color: #e7e7e7;

  padding: 1.5rem;
  margin: 1rem;

  width: 7rem;

  cursor: pointer;
`;

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
