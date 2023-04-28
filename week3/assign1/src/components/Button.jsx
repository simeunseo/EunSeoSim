import styled from "styled-components";

const Button = (props) => {
  return <StyledButton type="button">{props.children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  border: 0.3rem double black;

  font-size: 1rem;

  padding: 0.5rem 1rem;
  margin: 1rem;
`;
