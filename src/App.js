import styled from "styled-components";
import LoginPage from "./components/pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./components/pages/AdminPage";
import ProtectRoute from "./components/layouts/ProtectRoute";
import ErrorPage404 from "./components/pages/ErrorPage404";

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
          <Route path="/hethong" element={<AdminPage />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
