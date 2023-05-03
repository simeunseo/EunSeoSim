import Buttons from "../components/Buttons";
import Cards from "../components/Cards";
import { GlobalContextProvider } from "../context/context";
import Header from "../components/Header";
import LevelButtons from "../components/Buttons";
import styled from "styled-components";

const Main = () => {
  return (
    <GlobalContextProvider>
      <Header></Header>
      <Buttons />
      <Cards></Cards>
    </GlobalContextProvider>
  );
};

export default Main;
