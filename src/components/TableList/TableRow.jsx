import { memo, useContext } from "react";
import styled from "styled-components";
import Api, { URL } from "../../constans/api";
import { apiContext } from "../../context/apiContext";
import { useNavigate } from "react-router-dom";

const TableRowBody = styled.tr`
  width: 100%;
  min-width: 1240px;
  overflow: hidden;
  display: flex;
  border-bottom: 1px solid #f5f5f5;
  overflow: hidden;
  td {
    min-height: 64px;
    flex: 1;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
  }
`;
const Feature = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 1.4rem;
  padding: 0 9px;
  font-weight: 600;
  border-radius: 50%;
  i {
    width: 24px;
    height: 24px;
    font-size: 1.4rem;
    color: #da2a1c;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const TableBody = memo(({ data }) => {
  const navigate = useNavigate();
  const { setShowModal, setLoai } = useContext(apiContext);

  const handleChangePage = () => {
    setLoai(data);
    navigate("/loai/chi-tiet");
  };

  const handleDeleteObject = () => {
    setShowModal(true);
    setLoai(data);
  };

  const image = data.attachments[0] && data.attachments[0].path;
  return (
    <TableRowBody>
      <td>
        <AvatarSpecies image={image} ten={data.ten} />
      </td>
      <td>{data.ten_khoa_hoc}</td>
      <td>{data.kingdom.ten}</td>
      <td>{data.phylumn.ten}</td>
      <td>{data.class.ten}</td>
      <td>{data.order.ten}</td>
      <td>{data.order.ten_khoa_hoc}</td>
      <td>{data.genus.ten_khoa_hoc}</td>
      <td>
        <Feature onClick={() => handleChangePage()}>
          <i className="fa-solid fa-pencil"></i>
        </Feature>
        <Feature onClick={() => handleDeleteObject()}>
          <i className="fa-solid fa-trash-can"></i>
        </Feature>
      </td>
    </TableRowBody>
  );
});

export default TableBody;

const DivContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const DivImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.4rem;
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
  const { image, ten } = props;

  return (
    <DivContainer>
      <DivImg>
        <img alt="Avatar Loai" src={image ? URL + image : Api.logo} />
      </DivImg>
      <Textdiv>{ten}</Textdiv>
    </DivContainer>
  );
};
