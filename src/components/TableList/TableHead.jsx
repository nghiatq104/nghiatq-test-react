import { memo } from "react";
import styled from "styled-components";

const TableRow = styled.tr`
  width: 100%;
  min-width: 1240px;
  overflow: hidden;
  display: flex;
  border-bottom: 1px solid #c9c9c9;
  th {
    height: 48px;
    flex: 1;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
  }
`;

const TableHead = memo(() => {
  const titles = [
    "Tên",
    "Tên Khoa Học",
    "Giới",
    "Ngành",
    "Lớp",
    "Bộ",
    "Họ",
    "Chi",
    "Hành động",
  ];
  return (
    <TableRow>
      {titles.map((title, i) => (
        <th key={i}>{title}</th>
      ))}
    </TableRow>
  );
});

export default TableHead;
