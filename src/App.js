import styled from "styled-components";
import LoginPage from "./components/pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./components/pages/AdminPage";
import ProtectRoute from "./components/layouts/ProtectRoute";
import ErrorPage404 from "./components/pages/ErrorPage404";
import ListSpecies from "./components/pages/ListSpecies";
import EditPage from "./components/pages/EditPage";

const Container = styled.div`
  width: 100vw;
`;

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/*" element={<ErrorPage404 />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="" element={<ProtectRoute />}>
          <Route path="/loai" element={<AdminPage />}>
            <Route path="" element={<ListSpecies />} />
            <Route path="them-moi" element={<EditPage />} />
            <Route path="chi-tiet" element={<EditPage />} />
          </Route>
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
