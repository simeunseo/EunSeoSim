import { allImageArr } from "../utils/GetCardArr";
import { getCardArr } from "../utils/GetCardArr";
import styled from "styled-components";

const Cards = ({ idx }) => {
  return <img src={allImageArr[idx]}></img>;
};

export default Cards;
