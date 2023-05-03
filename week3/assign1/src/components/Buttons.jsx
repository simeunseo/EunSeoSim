import { LevelContext, LevelDispatchContext } from "../context/context";

import styled from "styled-components";
import { useContext } from "react";

export const Button = (props) => {
  const levelType = useContext(LevelContext);
  const levelDispatch = useContext(LevelDispatchContext);

  return (
    <StyledButton
      onClick={(e) => levelDispatch({ type: e.target.value })}
      value={props.value}
      type="button"
    >
      {props.children}
    </StyledButton>
  );
};

const LevelButtons = () => {
  return (
    <>
      <Button value="easy">이지</Button>
      <Button value="normal">노말</Button>
      <Button value="hard">하드</Button>
    </>
  );
};

export default LevelButtons;

const StyledButton = styled.button`
  border: 0.3rem double black;

  font-size: 1rem;

  padding: 0.5rem 1rem;
  margin: 1rem;

  cursor: pointer;
`;
