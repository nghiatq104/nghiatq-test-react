import styled from "styled-components";

const HeadContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  overflow: hidden;
`;
const LogoDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 80%;
    width: auto;
  }
`;

const DivTitle = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  h1 {
    color: ${(props) => props.headcolor || "#000"};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 2.2rem;
    font-weight: 400;
    text-align: center;
    margin: 0;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
const Header = (props) => {
  return (
    <HeadContainer>
      <LogoDiv>
        <img alt="logo" src={props.image} />
      </LogoDiv>
      <DivTitle headcolor={props.headcolor}>
        <h1>{props.title}</h1>
      </DivTitle>
    </HeadContainer>
  );
};

export default Header;
