import { LevelContext } from "../context/context";
import { useContext } from "react";
import { useState } from "react";
const Score = ({ pairedList }) => {
  const levelType = useContext(LevelContext);
  const [score, setScore] = useState(0);

  const goal = () => {
    switch (levelType) {
      case "easy":
        return 5;
      case "normal":
        return 7;
      case "hard":
        return 9;
      default:
        return 5;
    }
  };
  return (
    <span>
      {score}/{goal()}
    </span>
  );
};

export default Score;
