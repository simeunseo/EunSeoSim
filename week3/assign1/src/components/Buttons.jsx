import { LevelContext, LevelDispatchContext } from "../context/context";

import { ScoreContext } from "../context/context";
import styled from "styled-components";
import { useContext } from "react";

const Button = (props) => {
  const { setCompareList, setPairedList, value } = props;
  const levelDispatch = useContext(LevelDispatchContext);
  const levelType = useContext(LevelContext);

  return props.value === "reset" ? (
    // TODO : reset 기능 처리
    <StyledButton
      onClick={() => {
        setCompareList([]);
        setPairedList([]);
      }}
      type="button"
    >
      {props.children}
    </StyledButton>
  ) : (
    <StyledButton
      onClick={(e) => {
        setCompareList([]);
        setPairedList([]);
        levelDispatch({ type: e.target.value });
      }}
      value={value}
      type="button"
    >
      {props.children}
    </StyledButton>
  );
};

const ResetButton = (props) => {
  const { setCompareList, setPairedList } = props;
  return (
    <Button
      setCompareList={setCompareList}
      setPairedList={setPairedList}
      value="reset"
    >
      리셋
    </Button>
  );
};

const LevelButtons = (props) => {
  const { setCompareList, setPairedList } = props;
  return (
    <section>
      <Button
        setCompareList={setCompareList}
        setPairedList={setPairedList}
        value="easy"
      >
        이지
      </Button>
      <Button
        setCompareList={setCompareList}
        setPairedList={setPairedList}
        value="normal"
      >
        노말
      </Button>
      <Button
        setCompareList={setCompareList}
        setPairedList={setPairedList}
        value="hard"
      >
        하드
      </Button>
    </section>
  );
};

const Score = () => {
  const levelType = useContext(LevelContext);
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

  const score = useContext(ScoreContext);

  return (
    <StyledScore>
      당신의 점수! {score} / {goal()}
    </StyledScore>
  );
};

const Buttons = (props) => {
  const { setCompareList, setPairedList } = props;

  return (
    <>
      <ButtonContainer>
        <LevelButtons
          setCompareList={setCompareList}
          setPairedList={setPairedList}
        />
        <RightGroupWrapper>
          <Score />
          <ResetButton
            setCompareList={setCompareList}
            setPairedList={setPairedList}
          />
        </RightGroupWrapper>
      </ButtonContainer>
    </>
  );
};

export default Buttons;

const RightGroupWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledScore = styled.span`
  font-family: "DOSSaemmul"; //이건 왜 따로 적용을 해야되는거지?
  font-size: 1.5rem;

  margin-right: 1rem;
`;

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
