import { allImageArr } from "../utils/GetCardArr";
import styled from "styled-components";

const Card = (props) => {
  const { imgId, clickHandler, compareList, pairedList, pk } = props;

  //이 카드가 비교되고 있는 카드인지 여부
  const isComparing = compareList.some((item) => {
    if (item.pk === pk) return true;
  });

  const isPaired = pairedList.some((item) => {
    if (item.pk === pk) return true;
  });

  return (
    <StyledCardWrapper>
      <div className="pair">
        <div className={`card ${isComparing || isPaired ? "flipped" : ""}`}>
          <div className="card__back">
            <StyledCard src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/220px-Pokebola-pokeball-png-0.png"></StyledCard>
          </div>
          <div className="card__front">
            <StyledCard
              src={allImageArr[imgId]}
              onClick={() => clickHandler(pk, imgId)}
            ></StyledCard>
          </div>
        </div>
      </div>
    </StyledCardWrapper>
  );
};

const StyledCardWrapper = styled.article`
  .pair {
    width: 13rem;
    height: 12.5rem;
  }
  .card {
    width: 100%;
    height: 100%;
    position: relative;
    transition: 0.8s;
    transform-style: preserve-3d;
  }

  .card__front,
  .card__back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden; //요소의 뒷면을 보여줄지를 결정한다
  }

  //뒷면은 먼저 뒤집어 놓는다
  //요소를 Y축을 기준으로 회전시킨다.
  .card__back {
    transform: rotateY(180deg);
  }

  .flipped {
    transform: rotateY(180deg); //앞면과 뒷면을 한번에 뒤집는다
  }
`;

const StyledCard = styled.img`
  border: 0.3rem double black;

  background-color: #e7e7e7;

  padding: 1.5rem;
  margin: 1rem;

  width: 7rem;

  cursor: pointer;
`;

export default Card;
