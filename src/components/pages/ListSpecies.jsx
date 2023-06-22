import { memo } from "react";
import styled from "styled-components";
import NavSearch from "../Navigation/NavSearch";

const MainContainer = styled.div`
  width: 100%;
  height: calc(100vh - 93px);
  padding: 20px 32px;
  margin-top: 60px;
`;

const ListSpecies = memo(() => {
  return (
    <MainContainer>
      <NavSearch icon="fa-solid fa-shield-cat" title="Loài nguy cấp quý hiếm" />
    </MainContainer>
  );
});

export default ListSpecies;
