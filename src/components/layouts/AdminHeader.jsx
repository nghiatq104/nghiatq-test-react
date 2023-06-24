import { memo, useContext } from "react";
import { styled } from "styled-components";
import FtButton from "../Button/FtButton";
import AccDropdown from "../DropDown/AccDropdown/AccDropdown";
import UserCard from "../Cards/UserCard";
import { authContext } from "../../context/authContext";
import Header from "./Header";
import { HeaderTitle } from "../../constans/text";
import Api from "../../constans/api";

const DivContainer = styled.div`
  width: 100vw;
  height: 56px;
  background-color: #fff;
  padding: 0 16px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
`;
const LeftMenu = styled.div`
  width: 60px;
  height: 100%;
  background-color: #fff;
`;

const RightMenu = styled.div`
  min-width: 200px;
  height: 100%;
`;

const AdminHeader = memo(({ children }) => {
  return <DivContainer>{children}</DivContainer>;
});

export default AdminHeader;

export const HeaderContent = memo((props) => {
  const dataUser = JSON.parse(localStorage.getItem("user"));
  const { Logout } = useContext(authContext);
  const onLogout = () => {
    Logout();
  };
  return (
    <>
      <LeftMenu>
        <FtButton
          handleClick={() => console.log(">>> Menu")}
          icon="fa-solid fa-bars"
        />
      </LeftMenu>

      <Header
        title={HeaderTitle}
        image="http://wlp.howizbiz.com/static/img/logo.png"
      />

      <RightMenu>
        <AccDropdown
          username={dataUser.username && dataUser.username}
          image={dataUser.avatar_url && dataUser.avatar_url}
        >
          <UserCard
            avatar={dataUser.avatar_url && dataUser.avatar_url}
            role={dataUser.role.name && dataUser.role.name}
            username={dataUser.username && dataUser.username}
            handleClick={onLogout}
          />
        </AccDropdown>
      </RightMenu>
    </>
  );
});
