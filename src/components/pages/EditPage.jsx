import { memo, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FormInput from "../Form/FormInput";
import { authContext } from "../../context/authContext";
import { apiContext } from "../../context/apiContext";

const Container = styled.div`
  margin: 60px 0 33px 0;
  padding: 12px 24px;
  width: 100%;
`;

const TitleDiv = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  padding: 8px 0 16px 0;
  align-items: center;
  overflow: hidden;
  button {
    width: 36px;
    height: 100%;
    border: none;
    background: none;
    outline: none;
    i {
      font-size: 2.5rem;
      color: #da2a1c;
    }
  }
  h2 {
    margin: 0;
    padding-left: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const EditPage = memo(() => {
  const navigate = useNavigate();
  const { setReLoad, reload, setLoai } = useContext(apiContext);

  const { contextHolder } = useContext(authContext);
  return (
    <>
      {contextHolder}

      <Container>
        <TitleDiv>
          <button
            onClick={() => {
              setReLoad(!reload);
              setLoai({});
              navigate("/loai");
            }}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <h2>
            THÔNG TIN VỀ HIỆN TRẠNG LOÀI NGUY CẤP, QUÝ, HIẾM CẦN ĐƯỢC ƯU TIÊN
            BẢO VỆ
          </h2>
        </TitleDiv>
        <FormInput />
      </Container>
    </>
  );
});

export default EditPage;
