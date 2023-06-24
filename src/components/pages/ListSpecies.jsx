import { memo, useContext } from "react";
import styled from "styled-components";
import NavSearch from "../Navigation/NavSearch";
import SpeciesItem from "../Item/SpeciesItem";
import { apiContext } from "../../context/apiContext";
import { useMediaQuery } from "react-responsive";
import { Select } from "antd";
import { Pagination } from "antd";
import TableHead from "../TableList/TableHead";
import TableBody from "../TableList/TableRow";
import DeleteModal from "../Modal/DeleteModal";
import { authContext } from "../../context/authContext";
import LoadingHorizontal from "../LoadingHorizontal";

const options = [
  {
    value: 1,
    label: "Bộ",
  },
  { value: 2, label: "Chi" },
  { value: 3, label: "Họ" },
];

const MainContainer = styled.div`
  width: 100%;
  padding: 20px 32px;
  margin-top: 60px;
  margin-bottom: 33px;
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
  display: flex;
  padding-top: 5px;
  align-items: center;
  .ant-pagination-item-active {
    color: #fff;
    border: none;
    border-radius: 0;
    background-color: #da2a1c;

    &:hover {
      background-color: #da3a2c;
    }
  }
  ul {
    .ant-pagination-prev {
      margin-left: 20%;
      @media (max-width: 800px) {
        margin-left: 0;
      }
    }
    .ant-pagination-options {
      float: right;
    }
    li {
      .ant-select-selection {
        font-size: 1.4rem;
      }
      .ant-select-dropdown {
        .ant-select-item-option-content {
          font-size: 1.4rem;
        }
      }
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

const PageProperty = styled.div`
  flex: 20%;
  font-size: 1.4rem;
`;

const TableWraper = styled.div`
  width: 100%;
  height: calc(100vh - 280px);
  overflow: auto;
  thead {
    position: sticky;
    top: 0;
    background-color: #fff;
  }
  table {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    tbody {
      width: 100%;
      height: 100%;
      overflow-x: scroll;
    }
  }
`;

const ListSpecies = memo(({ onChangePage }) => {
  const { contextHolder } = useContext(authContext);
  const {
    loadEvent,
    dataSpecies,
    currentPage,
    setCurrentPage,
    perpage,
    setPerPage,
  } = useContext(apiContext);
  const ListData = dataSpecies.list;
  const pagination = dataSpecies.pagination;

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPerPage(pageSize);
  };

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const MobileRender =
    ListData &&
    ListData.map((data, i) => {
      return <SpeciesItem key={i} data={data} />;
    });

  return (
    <>
      {contextHolder}
      <DeleteModal />
      <MainContainer>
        <NavSearch
          onChangePage={onChangePage}
          icon="fa-solid fa-shield-cat"
          title="Loài nguy cấp quý hiếm"
        />

        {isMobile ? (
          <>
            <SortDiv>
              <Select
                mode="tags"
                style={{
                  width: "100%",
                }}
                tokenSeparators={[","]}
                options={options}
              />
            </SortDiv>
            {MobileRender}
          </>
        ) : (
          <TableWraper>
            <table>
              <thead>
                <TableHead />
              </thead>
              <LoadingHorizontal load={loadEvent} />

              <tbody>
                {ListData &&
                  ListData.map((data, i) => {
                    return <TableBody key={i} data={data} />;
                  })}
              </tbody>
            </table>
          </TableWraper>
        )}

        <PaginationDiv>
          <PageProperty>
            {pagination && (
              <>
                {pagination.itemsPerPage * (currentPage - 1) + 1}-
                {pagination.itemsPerPage * currentPage >= pagination.total
                  ? pagination.total
                  : pagination.itemsPerPage * currentPage}
                /{pagination.total}
              </>
            )}
          </PageProperty>
          <Pagination
            style={{
              fontSize: "16px",
              height: "100%",
              width: "100%",
              flex: "80%",
            }}
            defaultCurrent={1}
            current={currentPage}
            defaultPageSize={perpage}
            total={pagination && pagination.total}
            onChange={handlePageChange}
          />
        </PaginationDiv>
      </MainContainer>
    </>
  );
});

export default ListSpecies;
