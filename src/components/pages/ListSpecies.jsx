import { memo, useContext } from "react";
import styled from "styled-components";
import NavSearch from "../Navigation/NavSearch";
import SpeciesItem from "../Item/SpeciesItem";
import { apiContext } from "../../context/apiContext";
import { useMediaQuery } from "react-responsive";
import { Select } from "antd";
import { Pagination } from "antd";

const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const MainContainer = styled.div`
  width: 100%;
  padding: 20px 32px;
  margin-top: 60px;
  margin-bottom: 33px;
  overflow: scroll;
  @media (min-width: 768px) {
    height: calc(100vh - 93px);
  }
`;
const SortDiv = styled.div`
  height: 56px;
  width: 100%;
  padding: 0 16px;
`;

const PaginationDiv = styled.div`
  width: 100%;
  height: 42px;
  font-size: 1.6rem;
  ul {
    li {
      a {
        font-size: 1.6rem;
      }
      button {
        span {
          font-size: 1.6rem;
        }
      }
      span {
        font-size: 1.4rem;
      }
    }
  }
`;

const ListSpecies = memo(() => {
  const { dataSpecies } = useContext(apiContext);
  const ListData = dataSpecies.list;
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const MobileRender =
    ListData &&
    ListData.map((data) => <SpeciesItem key={data.id} data={data} />);

  return (
    <MainContainer>
      <NavSearch icon="fa-solid fa-shield-cat" title="Loài nguy cấp quý hiếm" />
      <SortDiv>
        <Select
          mode="tags"
          style={{
            width: "100%",
          }}
          onChange={handleChange}
          tokenSeparators={[","]}
          options={options}
        />
      </SortDiv>
      {isMobile ? MobileRender : <></>}
      <PaginationDiv>
        <Pagination
          style={{
            fontSize: "16px",
            height: "100%",
          }}
          defaultCurrent={6}
          total={500}
        />
      </PaginationDiv>
    </MainContainer>
  );
});

export default ListSpecies;
