import { memo } from "react";
import styled from "styled-components";
import SearchInput from "../Input/SearchInput";
import ClsButton from "../Button/ClsButton";

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 16px;
  justify-content: space-between;
`;

const LeftBtn = styled.div`
  width: 100%;
  max-width: 800px;
  flex: 1;
  height: 40px;
`;
const RightBtn = styled.div`
  width: 100%;
  max-width: 160px;
  flex: 1;
  height: 36px;
  padding-left: 8px;
`;

const TitlePage = styled.div`
  width: 100%;
  height: 55px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
`;
const IconDiv = styled.div`
  display: flex;
  width: 35px;
  height: 35px;
  background-color: #b0dac5;
  border-radius: 50%;
  i {
    width: 35px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.4rem;
    border-radius: 50%;
    color: #da2a1c;
  }
`;
const DivTitle = styled.div`
  font-size: 1.8rem;
  padding-left: 10px;
  font-weight: 600;
`;
const NavSearch = memo(({ title, icon }) => {
  return (
    <>
      <TitlePage>
        <IconDiv>
          <i className={icon}></i>
        </IconDiv>

        <DivTitle>{title}</DivTitle>
      </TitlePage>
      <NavContainer>
        <LeftBtn>
          <SearchInput />
        </LeftBtn>
        <RightBtn>
          <ClsButton
            title="+ Thêm mới"
            color="#fff"
            colorhover="#da3a2c"
            backcolor="#da2a1c"
            handleclick={() => console.log(13465)}
          />
        </RightBtn>
      </NavContainer>
    </>
  );
});

export default NavSearch;
