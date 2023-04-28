import headerImage from "../assets/pageImages/header.png";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <HeaderContainer src={headerImage}></HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.img`
  width: 100vw;

  border-bottom: 0.3rem double black;
`;
