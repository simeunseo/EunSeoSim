import { allImageArr } from "../utils/GetCardArr";
import styled from "styled-components";

const Card = (props) => {
  const { imgId } = props;
  return (
    <StyledCardWrapper>
      <div className="flip">
        <div className="card">
          <div className="card__back">
            <StyledCard src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/220px-Pokebola-pokeball-png-0.png"></StyledCard>
          </div>
          <div className="card__front">
            <StyledCard src={allImageArr[imgId]}></StyledCard>
          </div>
        </div>
      </div>
    </StyledCardWrapper>
  );
};

const StyledCardWrapper = styled.article`
  .flip {
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
    backface-visibility: hidden;
  }

  //뒷면은 먼저 보이게 뒤집어 놓는다
  .card__back {
    transform: rotateY(180deg);
  }

  .flip:hover .card {
    transform: rotateY(180deg);
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
