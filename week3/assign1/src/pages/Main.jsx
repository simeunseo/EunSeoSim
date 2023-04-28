import Button from "../components/Button";
import Header from "../components/Header";
import styled from "styled-components";
const Main = () => {
  return (
    <>
      <Header></Header>
      <ButtonContainer>
        <div>
          <Button>초수</Button>
          <Button>중수</Button>
          <Button>고수</Button>
        </div>
        <Button>리셋</Button>
      </ButtonContainer>
    </>
  );
};

const ButtonContainer = styled.section`
  width: 100vw;

  display: flex;
  justify-content: space-between;
`;

export default Main;
