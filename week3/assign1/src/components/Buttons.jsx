import { LevelContext, LevelDispatchContext } from "../context/context";

import styled from "styled-components";
import { useContext } from "react";

const Button = (props) => {
  const levelDispatch = useContext(LevelDispatchContext);
  const levelType = useContext(LevelContext);

  return props.value === "reset" ? (
    // TODO : reset 기능 처리
    <StyledButton
      onClick={() => levelDispatch({ type: levelType })}
      type="button"
    ></StyledButton>
  ) : (
    <StyledButton
      onClick={(e) => levelDispatch({ type: e.target.value })}
      value={props.value}
      type="button"
    >
      {props.children}
    </StyledButton>
  );
};

const ResetButton = () => {
  return <Button>리셋</Button>;
};

const LevelButtons = () => {
  return (
    <section>
      <Button value="easy">이지</Button>
      <Button value="normal">노말</Button>
      <Button value="hard">하드</Button>
    </section>
  );
};

const Buttons = () => {
  return (
    <>
      <ButtonContainer>
        <LevelButtons />
        <ResetButton />
      </ButtonContainer>
    </>
  );
};

export default Buttons;

const StyledButton = styled.button`
  border: 0.3rem double black;

  background-color: #e7e7e7;

  font-size: 1rem;

  padding: 0.5rem 1rem;
  margin: 1rem;

  cursor: pointer;

  &:hover {
    border: 0.3rem double #e7e7e7;

    background-color: black;
    color: #e7e7e7;
  }
`;

const ButtonContainer = styled.section`
  width: 100vw;

  display: flex;
  justify-content: space-between;
`;
