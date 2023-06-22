import { memo } from "react";
import styled from "styled-components";
import { HeaderContent } from "../layouts/AdminHeader";
import Footer from "../layouts/Footer";
import ListSpecies from "./ListSpecies";
const Container = styled.div`
  width: 100%;
`;
const HeaderContainer = styled.div`
  width: 100vw;
  height: 60px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.4);
`;
const AdminPage = memo(() => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderContent />
      </HeaderContainer>
      <ListSpecies />
      <Footer />
    </Container>
  );
});

export default AdminPage;
