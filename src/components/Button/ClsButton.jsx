import styled from "styled-components";
import { memo } from "react";

const StButton = styled.button`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border: ${(props) => props.boder || "none"};
  border-radius: 5px;
  background-color: ${(props) => props.backcolor || "transparent"};
  font-size: 1.6rem;
  font-weight: 600;
  color: ${(props) => props.color || "#000"};
  &:hover {
    background-color: ${(props) => props.colorhover || "rgba(0,0,0,0.2)"};
  }
`;
const ClsButton = memo((props) => {
  return (
    <StButton
      color={props.color}
      colorhover={props.colorhover}
      backcolor={props.backcolor}
      boder={props.boder}
      onClick={props.handleClick}
    >
      {props.title || props.children}
    </StButton>
  );
});
export default ClsButton;
