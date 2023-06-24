import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import ClsButton from "../Button/ClsButton";
import { Select } from "antd";
import axios from "axios";
import Api from "../../constans/api";

const FormWrapper = styled.form`
  width: 100%;
  overflow: scroll;
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

const ButtonWrapper = styled.div`
  width: 100%;
  padding: 20px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const SeclectOptionWrapper = styled.div`
  width: 100%;
  flex: 1;
`;

const redbook = JSON.parse(sessionStorage.getItem("redbook"));
const iucn = JSON.parse(sessionStorage.getItem("iucn"));
const kingdom = JSON.parse(sessionStorage.getItem("kingdom"));
const phylum = JSON.parse(sessionStorage.getItem("phylum"));
const CLASS = JSON.parse(sessionStorage.getItem("CLASS"));
const order = JSON.parse(sessionStorage.getItem("order"));
const family = JSON.parse(sessionStorage.getItem("family"));
const genus = JSON.parse(sessionStorage.getItem("genus"));
let token = localStorage.getItem("token");
const FormInput = memo(() => {
  const [errorsValidate, setErrorsValidate] = useState([]);
  const [kingdomList, setKingdomList] = useState(kingdom);
  const [phylumList, setPhylumList] = useState(phylum);
  console.log(phylumList);
  const [speciesForm, setSpeciesForm] = useState({
    attachments: [],
    class_id: "",
    cong_bo: true,
    dac_diem_loai: "",
    dac_diem_sinh_thai: "",
    family_id: "",
    genus_id: "",
    gia_tri_loai: "",
    isTrusted: true,
    is_loai_dac_huu: null,
    iucns: [],
    kingdom_id: "",
    loai_noi_bat: false,
    minh_hoa_attachments: [],
    nghi_dinhs: [],
    nguon_du_lieu: "",
    order_id: "",
    phylum_id: "",
    qrcode_color: "#fff",
    sach_dos: [],
    show_qrcode: true,
    sinh_canh_bi_chia_cat_suy_giam: {
      mo_ta_chi_tiet: "",
      noi_cu_tru_hoac_phan_bo: "Không xác định",
      su_suy_giam_lien_tuc_khu_vuc_phan_bo: "Không xác định",
      thong_tin_khac: "",
    },
    su_suy_giam_quan_the: {
      mo_ta_chi_tiet: "",
      suy_giam_quan_the_theo_quan_sat: "Không xác định",
      suy_giam_quan_the_theo_thoi_diem_danh_gia: "Không xác định",
      thong_tin_khac: "",
    },
    ten_dia_phuong: "",
    ten: "",
    ten_khoa_hoc: "",
    ten_tac_gia: "",
    toa_dos: [],
  });

  useEffect(() => {
    if (speciesForm.kingdom_id) {
      setPhylumList(
        phylum.filter((data) => data.parent_id == speciesForm.kingdom_id)
      );
    }
  }, [speciesForm.kingdom_id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      await axios.post(Api.apiLoai, speciesForm, config);
    } catch (error) {
      setErrorsValidate(error.response.data.errors);
    }
  };
  return (
    <FormWrapper action="" onSubmit={onSubmit}>
      <InputWrapper>
        <h3>I.Thông tin chung về loài</h3>
        {/*TEN */}
        <InputDiv>
          <InputLabel>
            Tên<span className="red">*</span>
          </InputLabel>
          <Input>
            <input
              value={speciesForm.ten}
              onChange={(e) =>
                setSpeciesForm({
                  ...speciesForm,
                  ten: e.target.value,
                })
              }
              placeholder="Tên"
              type="text"
            />
          </Input>
          {errorsValidate.ten && <Validation>{errorsValidate.ten}</Validation>}
        </InputDiv>
        {/*TEN KHOA HOC */}

        <FlexDiv>
          <InputDiv>
            <InputLabel>
              Tên khoa học<span className="red">*</span>
            </InputLabel>
            <Input>
              <input
                value={speciesForm.ten_khoa_hoc}
                onChange={(e) =>
                  setSpeciesForm({
                    ...speciesForm,
                    ten_khoa_hoc: e.target.value,
                  })
                }
                placeholder="Tên khoa học"
                type="text"
              />
            </Input>
            {errorsValidate.ten_khoa_hoc && (
              <Validation>{errorsValidate.ten_khoa_hoc}</Validation>
            )}
          </InputDiv>
          <InputDiv>
            <InputLabel>Tên tác giả</InputLabel>
            <Input>
              <input
                value={speciesForm.ten_tac_gia}
                onChange={(e) =>
                  setSpeciesForm({
                    ...speciesForm,
                    ten_tac_gia: e.target.value,
                  })
                }
                placeholder="Tên tác giả"
                type="text"
              />
            </Input>
          </InputDiv>
        </FlexDiv>
        {/* */}
        <InputDiv>
          <InputLabel>Tên địa phương</InputLabel>
          <Input>
            <input
              value={speciesForm.ten_dia_phuong}
              onChange={(e) =>
                setSpeciesForm({
                  ...speciesForm,
                  ten_dia_phuong: e.target.value,
                })
              }
              placeholder="Tên địa phương"
              type="text"
            />
          </Input>
        </InputDiv>
        <InputDiv>
          <InputLabel>Nguồn dữ liệu</InputLabel>
          <Input>
            <input
              value={speciesForm.nguon_du_lieu}
              onChange={(e) =>
                setSpeciesForm({
                  ...speciesForm,
                  nguon_du_lieu: e.target.value,
                })
              }
              placeholder="Nguồn dữ liệu"
              type="text"
            />
          </Input>
        </InputDiv>
      </InputWrapper>
      <InputWrapper>
        <h3>II.Phân loại học</h3>
        <FlexDiv>
          {/* GIOI */}
          <InputDiv>
            <InputLabel>
              Giới<span className="red">*</span>
            </InputLabel>
            <SeclectOptionWrapper>
              <Select
                placeholder="Giới"
                defaultValue=""
                value={speciesForm.kingdom_id}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                onChange={(value) => {
                  setSpeciesForm({
                    ...speciesForm,
                    kingdom_id: value,
                  });
                }}
                allowClear
                options={kingdom.map((data) => {
                  return {
                    label: data.ten,
                    value: data.uuid,
                  };
                })}
              />
            </SeclectOptionWrapper>
            {errorsValidate.kingdom_id && (
              <Validation>{errorsValidate.kingdom_id}</Validation>
            )}
          </InputDiv>
          {/* NGANH */}
          <InputDiv>
            <InputLabel>
              Ngành<span className="red">*</span>
            </InputLabel>
            <SeclectOptionWrapper>
              <Select
                defaultValue=""
                value={speciesForm.phylum_id}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                onChange={(value) =>
                  setSpeciesForm({
                    ...speciesForm,
                    phylum_id: value,
                  })
                }
                allowClear
                options={phylumList.map((data) => {
                  return {
                    label: data.ten,
                    value: data.uuid,
                  };
                })}
              />
            </SeclectOptionWrapper>
            {errorsValidate.phylum_id && (
              <Validation>{errorsValidate.phylum_id}</Validation>
            )}
          </InputDiv>
          <InputDiv>
            <InputLabel>
              Lớp<span className="red">*</span>
            </InputLabel>
            <SeclectOptionWrapper>
              <Select
                defaultValue=""
                value={speciesForm.kingdom_id}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                onChange={(value) =>
                  setSpeciesForm({
                    ...speciesForm,
                    kingdom_id: value,
                  })
                }
                allowClear
                options={kingdom.map((data) => {
                  return {
                    label: data.ten,
                    value: data.uuid,
                  };
                })}
              />
            </SeclectOptionWrapper>
            {errorsValidate.class_id && (
              <Validation>{errorsValidate.class_id}</Validation>
            )}
          </InputDiv>
        </FlexDiv>
        <FlexDiv>
          <InputDiv>
            <InputLabel>
              Bộ<span className="red">*</span>
            </InputLabel>
            <SeclectOptionWrapper>
              <Select
                defaultValue=""
                value={speciesForm.kingdom_id}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                onChange={(value) =>
                  setSpeciesForm({
                    ...speciesForm,
                    kingdom_id: value,
                  })
                }
                allowClear
                options={kingdom.map((data) => {
                  return {
                    label: data.ten,
                    value: data.uuid,
                  };
                })}
              />
            </SeclectOptionWrapper>
            {errorsValidate.order_id && (
              <Validation>{errorsValidate.order_id}</Validation>
            )}
          </InputDiv>
          <InputDiv>
            <InputLabel>
              Họ<span className="red">*</span>
            </InputLabel>
            <SeclectOptionWrapper>
              <Select
                defaultValue=""
                value={speciesForm.kingdom_id}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                onChange={(value) =>
                  setSpeciesForm({
                    ...speciesForm,
                    kingdom_id: value,
                  })
                }
                allowClear
                options={kingdom.map((data) => {
                  return {
                    label: data.ten,
                    value: data.uuid,
                  };
                })}
              />
            </SeclectOptionWrapper>
            {errorsValidate.family_id && (
              <Validation>{errorsValidate.family_id}</Validation>
            )}
          </InputDiv>
          <InputDiv>
            <InputLabel>
              Chi<span className="red">*</span>
            </InputLabel>
            <SeclectOptionWrapper>
              <Select
                defaultValue=""
                value={speciesForm.kingdom_id}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                onChange={(value) =>
                  setSpeciesForm({
                    ...speciesForm,
                    kingdom_id: value,
                  })
                }
                allowClear
                options={kingdom.map((data) => {
                  return {
                    label: data.ten,
                    value: data.uuid,
                  };
                })}
              />
            </SeclectOptionWrapper>
            {errorsValidate.genus_id && (
              <Validation>{errorsValidate.genus_id}</Validation>
            )}
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

      <ButtonWrapper>
        <ClsButton
          title="+ Thêm mới"
          color="#fff"
          colorhover="#da3a2c"
          backcolor="#da2a1c"
          handleclick={(e) => onSubmit(e)}
        />
      </ButtonWrapper>
    </FormWrapper>
  );
});

export default FormInput;
