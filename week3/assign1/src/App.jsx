import "./App.css";

import GlobalStyle from "./styles/globalStyles";
import Main from "./pages/Main";
import backgroundImage from "./assets/pageImages/background.png";
import styled from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <Background>
        <Main />
      </Background>
    </>
  );
}

export default App;

const Background = styled.div`
  background-image: url(${backgroundImage});

  height: min-content;
`;
