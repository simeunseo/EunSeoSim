import Cards from "../components/Cards";
import { GlobalContextProvider } from "../context/context";
import Header from "../components/Header";
import LevelButtons from "../components/Buttons";
import styled from "styled-components";

const Main = () => {
  return (
    <GlobalContextProvider>
      <Header></Header>
      <ButtonContainer>
        <LevelButtons></LevelButtons>
      </ButtonContainer>
      <Cards></Cards>
    </GlobalContextProvider>
  );
};

const ButtonContainer = styled.section`
  width: 100vw;

  display: flex;
  justify-content: space-between;
`;

export default Main;
