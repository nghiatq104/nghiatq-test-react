import styled from "styled-components";
import Header from "../layouts/Header";
import { HeaderTitle } from "../../constans/text";
import { logoImage } from "../../constans/image";
import LoginForm from "./LoginForm";
import { memo, useContext } from "react";
import { authContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
const HeadContainer = styled.div`
  width: 100%;
  height: 88px;
  background-color: #da2a1c;
  padding: 0 24px;
  @media (max-width: 800px) {
    display: none;
  }
`;

const MainContainner = styled.div`
  width: 100%;
  height: calc(100vh - 88px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("https://loainguycap.ceid.gov.vn/static/img/footerLogin.cf032540.svg")
    no-repeat center/cover;
  @media (max-width: 800px) {
    height: 100vh;
    background: none;
  }
`;

const LoginPage = memo(() => {
  const navigate = useNavigate();
  const { isAuthenticated, contextHolder } = useContext(authContext);
  isAuthenticated && navigate("/loai");
  return (
    <>
      {contextHolder}
      <LoginContainer>
        <HeadContainer>
          <Header title={HeaderTitle} image={logoImage} headcolor="#fff" />
        </HeadContainer>
        <MainContainner>
          <LoginForm />
        </MainContainner>
      </LoginContainer>
    </>
  );
});

export default LoginPage;
