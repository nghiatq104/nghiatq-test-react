import { styled } from "styled-components";

const StButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 18em;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  i {
    font-size: 1.8em;
    color: ${(props) => (props.color ? props.color : "#000")};
  }
`;

const FtButton = (props) => {
  return (
    <StButton color={props.color} onClick={props.handleClick}>
      <i className={props.icon}></i>
    </StButton>
  );
};

export default FtButton;
