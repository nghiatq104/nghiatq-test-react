import { memo, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import FtButton from "../Button/FtButton";
import Api, { URL } from "../../constans/api";

const Container = styled.div`
  border-top: 1px solid #c9c9c9;
  width: 100%;
  height: 440px;
  padding: 0 16px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const DivTD = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:first-child {
    height: 56px;
  }

  span {
    height: 100%;
    font-size: 1.4rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    &:first-child {
      padding-right: 21px;
    }
  }
`;

const FeatureButton = styled.div`
  width: 25px;
  height: 25px;
  position: relative;
  z-index: 0;
`;

const ModalFeature = styled.div`
  ${(props) =>
    props.showbutton
      ? css`
          position: absolute;
          background-color: #fff;
          top: 20px;
          left: -80px;
          width: 118px;
          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);
        `
      : css`
          display: none;
        `}
`;
const Feature = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 1.4rem;
  padding: 0 9px;
  font-weight: 600;
  i {
    width: 24px;
    height: 24px;
    font-size: 1.4rem;
    color: #da2a1c;
    display: flex;
    align-items: center;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const SpeciesItem = memo((props) => {
  const { data } = props;
  const dropdownRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowButton(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <Container>
      <DivTD>
        <span>Tên</span>
        <span>
          <AvatarSpecies
            image={data.attachments[0] && data.attachments[0].path}
            ten={data.ten}
          />
        </span>
      </DivTD>
      <DivTD>
        <span>Tên khoa học</span>
        <span>{data.ten_khoa_hoc}</span>
      </DivTD>
      <DivTD>
        <span>Giới</span>
        <span>{data.kingdom.ten}</span>
      </DivTD>
      <DivTD>
        <span>Ngành</span>
        <span>{data.phylumn.ten}</span>
      </DivTD>
      <DivTD>
        <span>Lớp</span>
        <span>{data.class.ten}</span>
      </DivTD>
      <DivTD>
        <span>Bộ</span>
        <span>{data.order.ten}</span>
      </DivTD>
      <DivTD>
        <span>Họ</span>
        <span>{data.order.ten_khoa_hoc}</span>
      </DivTD>
      <DivTD>
        <span>Chi</span>
        <span>{data.genus.ten_khoa_hoc}</span>
      </DivTD>
      <DivTD>
        <span></span>
        <FeatureButton>
          <FtButton
            handleClick={(e) => {
              e.stopPropagation();
              setShowButton(!showButton);
            }}
            icon="fa-solid fa-ellipsis"
          />
          <ModalFeature ref={dropdownRef} showbutton={showButton ? 1 : 0}>
            <Feature>
              <i className="fa-solid fa-pencil"></i>
              Cập nhật
            </Feature>
            <Feature>
              <i className="fa-solid fa-trash-can"></i>
              Xóa
            </Feature>
          </ModalFeature>
        </FeatureButton>
      </DivTD>
    </Container>
  );
});

const DivContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const DivImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
  }
`;
const Textdiv = styled.div`
  padding-left: 10px;
  font-size: 1.4rem;
`;
const AvatarSpecies = (props) => {
  const { image } = props;
  return (
    <DivContainer>
      <DivImg>
        <img alt="Avatar Loai" src={image ? URL + image : Api.logo} />
      </DivImg>
      <Textdiv>{props.ten}</Textdiv>
    </DivContainer>
  );
};

export default SpeciesItem;
