import { styled } from "styled-components";
import React, { memo, useState, useEffect, useRef } from "react";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  position: relative;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
const DropDown = styled.div`
  z-index: 30;
  width: 250px;
  height: 210px;
  padding: 4px;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  position: absolute;
  left: -30%;
  top: 115%;
  display: ${(props) => (props.show ? "block" : "none")};
`;
const StButton = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;
const DivAvatar = styled.div`
  height: 100%;
  width: 60px;
  padding: 5px 5px;
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
const DivUsername = styled.div`
  font-size: 1.6rem;
  text-align: center;
  flex: 1;
  width: 100%;
  font-weight: 500;
`;
const AccDropdown = memo((props) => {
  const [isShow, setIsShow] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropDown = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsShow(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <StButton
        onClick={(e) => {
          e.stopPropagation();
          toggleDropDown();
        }}
      >
        <DivAvatar>
          {props.image ? (
            <img alt="avatar" src={props.image} />
          ) : (
            <span>B</span>
          )}
        </DivAvatar>
        <DivUsername>{props.username}</DivUsername>
      </StButton>
      <DropDown ref={dropdownRef} show={isShow ? 1 : 0}>
        {props.children}
      </DropDown>
    </Container>
  );
});

export default AccDropdown;
