/* eslint-disable no-unused-vars */
import { memo } from "react";
import styled from "styled-components";

const FormWrapper = styled.form`
  width: 100%;
`;

const InputWrapper = styled.div`
  width: 100%;
  h3 {
    font-size: 1.6rem;
    font-weight: bold;
  }
`;
const InputDiv = styled.div`
  width: 100%;
  padding: 12px 0;
`;

const InputLabel = styled.label`
  width: 100%;
  font-size: 1.4rem;
  display: flex;
  font-weight: 500;
  .red {
    width: fit-content;
    color: red;
    display: flex;
    align-items: start;
    padding: 0 2px;
  }
`;
const Input = styled.div`
  flex: 1;
  width: 100%;
  height: 40px;
  font-size: 1.6rem;
  padding: 0 8px;
  border: 2px solid #c9c9c9;
  border-radius: 4px;
  transition: all 0.3s ease;
  &:focus-within {
    border: 2px solid #da2a1c;
  }
  input {
    width: 100%;
    height: 100%;
  }
`;

const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
`;
const Validation = styled.div`
  width: 100%;
  padding: 4px 10px;
  display: flex;
  align-items: center;
  color: red;
  font-size: 1.2rem;
`;

const StatusWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
`;

const StatusItem = styled.div`
  flex: 1;
  width: 100%;
`;

const Div = styled.div`
  width: 100%;
  flex: 1;
  select {
    outline: none;
    border: 1px solid #c9c9c9;
    width: 100%;
    height: 30px;
    font-size: 1.6rem;
    cursor: pointer;
    option {
      height: 30px;
      font-size: 1.6rem;
      width: 100%;
    }
  }
`;

const dataSachDo = JSON.parse(localStorage.getItem("sach_do"));
const dataPhanLoai = JSON.parse(localStorage.getItem("phan_loai"));
const FormInput = memo(() => {
  const onSubmit = () => {
    console.log(12345647987);
  };

  return (
    <FormWrapper action="" onSubmit={onSubmit}>
      <InputWrapper>
        <h3>I.Thông tin chung về loài</h3>
        {/* */}
        <InputDiv>
          <InputLabel>
            Tên<span className="red">*</span>
          </InputLabel>
          <Input>
            <input placeholder="Tên" type="text" />
          </Input>
          <Validation></Validation>
        </InputDiv>
        {/* */}

        <FlexDiv>
          <InputDiv>
            <InputLabel>
              Tên khoa học<span className="red">*</span>
            </InputLabel>
            <Input>
              <input placeholder="Tên khoa học" type="text" />
            </Input>
            <Validation></Validation>
          </InputDiv>
          <InputDiv>
            <InputLabel>Tên tác giả</InputLabel>
            <Input>
              <input placeholder="Tên tác giả" type="text" />
            </Input>
          </InputDiv>
        </FlexDiv>
        {/* */}
        <InputDiv>
          <InputLabel>Tên địa phương</InputLabel>
          <Input>
            <input placeholder="Tên địa phương" type="text" />
          </Input>
        </InputDiv>
        <InputDiv>
          <InputLabel>Nguồn dữ liệu</InputLabel>
          <Input>
            <input placeholder="Nguồn dữ liệu" type="text" />
          </Input>
        </InputDiv>
      </InputWrapper>
      <InputWrapper>
        <h3>II.Phân loại học</h3>
        <FlexDiv>
          <InputDiv>
            <InputLabel>
              Giới<span className="red">*</span>
            </InputLabel>
            <Input>
              <input placeholder="Tên khoa học" type="text" />
            </Input>
            <Validation></Validation>
          </InputDiv>
          <InputDiv>
            <InputLabel>
              Ngành<span className="red">*</span>
            </InputLabel>
            <Input>
              <input placeholder="Tên khoa học" type="text" />
            </Input>
            <Validation></Validation>
          </InputDiv>
          <InputDiv>
            <InputLabel>
              Lớp<span className="red">*</span>
            </InputLabel>
            <Input>
              <input placeholder="Tên khoa học" type="text" />
            </Input>
            <Validation></Validation>
          </InputDiv>
        </FlexDiv>
        <FlexDiv>
          <InputDiv>
            <InputLabel>
              Bộ<span className="red">*</span>
            </InputLabel>
            <Input>
              <input placeholder="Tên khoa học" type="text" />
            </Input>
            <Validation></Validation>
          </InputDiv>
          <InputDiv>
            <InputLabel>
              Họ<span className="red">*</span>
            </InputLabel>
            <Input>
              <input placeholder="Tên khoa học" type="text" />
            </Input>
            <Validation></Validation>
          </InputDiv>
          <InputDiv>
            <InputLabel>
              Chi<span className="red">*</span>
            </InputLabel>
            <Input>
              <input placeholder="Tên khoa học" type="text" />
            </Input>
            <Validation></Validation>
          </InputDiv>
        </FlexDiv>
      </InputWrapper>
      <InputWrapper>
        <h3>III.Tình trạng bảo tồn</h3>
        <StatusWrapper>
          <StatusItem>
            <h4>Sách đỏ</h4>
            <FlexDiv>
              <Div>
                <InputLabel>Năm</InputLabel>
                <select>
                  <option value=""></option>
                </select>
              </Div>
              <Div>
                <InputLabel>Hiện trạng</InputLabel>
                <select>
                  <option value=""></option>
                </select>
              </Div>
            </FlexDiv>
          </StatusItem>
          <StatusItem>
            <h4>IUCN</h4>
            <FlexDiv>
              <Div>
                <InputLabel>Năm</InputLabel>
                <select>
                  <option value=""></option>
                </select>
              </Div>
              <Div>
                <InputLabel>Hiện trạng</InputLabel>
                <select>
                  <option value=""></option>
                </select>
              </Div>
            </FlexDiv>
          </StatusItem>
        </StatusWrapper>
      </InputWrapper>
    </FormWrapper>
  );
});

export default FormInput;
