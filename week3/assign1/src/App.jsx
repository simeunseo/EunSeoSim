import "./App.css";

import Main from "./pages/Main";
import { Reset } from "styled-reset";
import backgroundImage from "./assets/pageImages/background.png";
import styled from "styled-components";
import { useState } from "react";

function App() {
  return (
    <>
      <Background>
        <Reset />
        <Main></Main>
      </Background>
    </>
  );
}

export default App;

const Background = styled.div`
  background-image: url(${backgroundImage});

  height: 100vh;
`;
