import Buttons from "./Buttons";
import headerImage from "../assets/pageImages/header.png";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <HeaderContainer src={headerImage}></HeaderContainer>
      <Buttons></Buttons>
    </>
  );
};

export default Header;

const HeaderContainer = styled.img`
  width: 100vw;
  text-align: center;

  border-bottom: 0.3rem double black;
`;
