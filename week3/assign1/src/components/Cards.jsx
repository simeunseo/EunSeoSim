import { LevelContext } from "../context/context";
import { allImageArr } from "../utils/GetCardArr";
import { getCardArr } from "../utils/GetCardArr";
import { useContext } from "react";
const Card = ({ imgId }) => {
  return <img src={allImageArr[imgId]}></img>;
};

const Cards = () => {
  const levelType = useContext(LevelContext);

  return (
    <>
      {getCardArr(levelType).map((imgId, idx) => (
        <Card imgId={imgId} key={idx}></Card>
      ))}
    </>
  );
};

export default Cards;
