import "./App.css";

import Main from "./pages/Main";
import { Reset } from "styled-reset";
import backgroundImage from "./assets/pageImages/background.png";
import styled from "styled-components";

function App() {
  return (
    <Background>
      <Reset />
      <Main></Main>
    </Background>
  );
}

export default App;

const Background = styled.div`
  background-image: url(${backgroundImage});

  height: min-content;
`;
