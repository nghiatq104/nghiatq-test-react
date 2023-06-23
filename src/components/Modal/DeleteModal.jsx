import { memo, useContext } from "react";
import styled, { css } from "styled-components";
import { apiContext } from "../../context/apiContext";
import ClsButton from "../Button/ClsButton";
import axios from "axios";
import Api from "../../constans/api";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 20;
  display: none;
  ${(props) =>
    props.showmodal &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `};
`;
const ModalDiv = styled.div`
  width: 450px;
  min-height: 30%;
  border-radius: 20px;
  background-color: #fff;
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: #da2a1c;
  border-radius: 20px 20px 0 0;
  h3 {
    color: #fff;
    font-size: 1.6rem;
  }
  button {
    font-size: 1.6rem;
    color: #fff;
    border: none;
    background: none;
    outline: none;
    padding-right: 8px;
    width: 40px;
    height: 40px;
  }
`;
const ModalBody = styled.div`
  width: 100%;
  height: 100px;
  padding: 28px;
  font-size: 1.4rem;
  font-weight: 500;
  span {
    font-size: 1.4rem;
    color: #da2a1c;
  }
`;

const ModalFooter = styled.div`
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  padding: 0 22px 28px 22px;
  justify-content: end;
  span {
    width: 20px;
  }
`;
let _token = localStorage.getItem("token");
const DeleteModal = memo(() => {
  const { showModal, setShowModal, loai, setLoai, setReLoad, reload } =
    useContext(apiContext);

  const handleCancel = () => {
    setLoai({});
    setShowModal(false);
  };

  const deleteLoai = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${_token}`,
      },
    };
    try {
      await axios.delete(Api.apiLoai + loai.id, config);
      setShowModal(false);
      setLoai({});
      setReLoad(!reload);
      console.log("Xoa thanh cong");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container showmodal={showModal ? 1 : 0}>
      <ModalDiv>
        <ModalHeader>
          <h3>Bạn có chắc chắn không?</h3>
          <button onClick={() => handleCancel()}>X</button>
        </ModalHeader>
        <ModalBody>
          Bạn có chắc muốn xóa <span>{loai.ten}</span>? Điều này hoàn toàn không
          rhể hoàn tác
        </ModalBody>
        <ModalFooter>
          <ClsButton
            boder="1px solid #c9c9c9"
            title="Hủy"
            handleclick={() => handleCancel()}
          />
          <span></span>
          <ClsButton
            boder="1px solid #da2a1c"
            colorhover="rgba(221, 0, 0, 0.2)"
            color="#da2a1c"
            title="Áp dụng"
            handleclick={() => deleteLoai()}
          />
        </ModalFooter>
      </ModalDiv>
    </Container>
  );
});

export default DeleteModal;
