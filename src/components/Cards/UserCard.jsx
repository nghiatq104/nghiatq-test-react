import React, { memo } from "react";
import styled from "styled-components";
import ClsButton from "../Button/ClsButton";

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`;

const DivAvatar = styled.div`
  width: 64px;
  height: 64px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  span {
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #00897b;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const DivUser = styled.div`
  font-size: 1.3rem;
  text-align: center;
  flex: 1;
  width: 100%;
  font-weight: 500;
`;
const Role = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 2px 4px;
  border-radius: 5px;
  background-color: #e2d4ff;
  font-size: 1.8rem;
`;
const Toolbar = styled.div`
  margin-top: 15px;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;
const UserCard = memo((props) => {
  return (
    <CardContainer>
      <DivAvatar>
        {props.avatar ? (
          <img alt="avatar" src={props.avatar} />
        ) : (
          <span>B</span>
        )}
      </DivAvatar>
      <DivUser>{props.username}</DivUser>
      <Role>{props.role}</Role>
      <Toolbar>
        <ClsButton
          title="Hồ sơ"
          handleClick={() => console.log(">>> INFO >>> : ")}
        />
        <ClsButton
          colorhover="rgba(221, 0, 0, 0.2)"
          color="#da2a1c"
          title="Đăng xuất"
          handleClick={props.handleClick}
        />
      </Toolbar>
    </CardContainer>
  );
});

export default UserCard;
