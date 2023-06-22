import { memo } from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 33px;
  font-size: 1.4rem;
  padding: 6px 16px;
  background-color: #c7c7c5;
  font-weight: 800;
  color: #757575;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  div {
    font-size: 1.4rem;
    i {
      font-size: 1.4rem;
    }
  }
  p {
    margin: 0;
    font-size: 1.4rem;
  }
`;

const Footer = memo(() => {
  return (
    <FooterContainer>
      <div>
        <i className="fa-regular fa-copyright"></i> 2021
      </div>
      <p>Phiên bản 1.0.0</p>
    </FooterContainer>
  );
});

export default Footer;
