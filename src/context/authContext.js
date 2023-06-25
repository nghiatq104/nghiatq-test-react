import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Api from "../constans/api";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

export const authContext = createContext({ auth: null });
let _token = localStorage.getItem("token");
const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [token, setToken] = useState(_token);


  useEffect(() => {
    const getData = async () => {
      console.log(">>>log");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      // redbook
      const redbook = await axios.get(Api.red_book);
      sessionStorage.setItem("redbook", JSON.stringify(redbook.data));
      // iucn
      const iucn = await axios.get(Api.red_book);
      sessionStorage.setItem("iucn", JSON.stringify(iucn.data));
      // kingdom
      const kingdom = await axios.get(Api.kingdom, config);
      sessionStorage.setItem("kingdom", JSON.stringify(kingdom.data));
      // phylum
      const phylum = await axios.get(Api.phylum, config);
      sessionStorage.setItem("phylum", JSON.stringify(phylum.data));
      // CLASS
      const CLASS = await axios.get(Api.CLASS, config);
      sessionStorage.setItem("CLASS", JSON.stringify(CLASS.data));
      // order
      const order = await axios.get(Api.order, config);
      sessionStorage.setItem("order", JSON.stringify(order.data));
      // family
      const family = await axios.get(Api.family, config);
      sessionStorage.setItem("family", JSON.stringify(family.data));
      // genus
      const genus = await axios.get(Api.genus, config);
      sessionStorage.setItem("genus", JSON.stringify(genus.data));
    };
    const red_book = JSON.parse(sessionStorage.getItem("redbook"));
    if (!red_book) {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMe = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    setIsChecking(true);
    try {
      const response = await axios.get(Api.apiMe, config);

      setIsAuthenticated(true);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      return response;
    } catch (error) {
      Logout();
    } finally {
      setIsChecking(false);
    }
  };
  if (!isChecking && !isAuthenticated && token) {
    getMe(token);
  }

  // Hàm đăng nhập
  const Login = async (data) => {
    try {
      const response = await axios.post(Api.login, data);
      console.log(response.data);
      const token = response.data.access_token;
      setToken(token);
      // Lưu token vào localStorage hoặc trạng thái ứng dụng
      localStorage.setItem("token", token);
      await getMe(token);
      // Đặt trạng thái đăng nhập thành true
      setIsAuthenticated(true);
      navigate("/loai");
    } catch (error) {
      console.error(error);
      openNotification(
        "top",
        "error",
        "Lỗi",
        "Tên đăng nhập hoặc mật khẩu không chính xác"
      );
    }
  };

  // Hàm đăng xuất
  const Logout = async () => {
    // Xóa token từ localStorage hoặc trạng thái ứng dụng
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      await axios.post(Api.logout, _token, config);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      sessionStorage.removeItem("redbook");
      sessionStorage.removeItem("iucn");
      sessionStorage.removeItem("kingdom");
      sessionStorage.removeItem("phylum");
      sessionStorage.removeItem("CLASS");
      sessionStorage.removeItem("order");
      sessionStorage.removeItem("family");
      sessionStorage.removeItem("genus");
      setToken(null);

      // Đặt trạng thái đăng nhập thành false
      setIsAuthenticated(false);
    } catch (error) {
      console.log(error);
    }
  };

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement, type = "info", message, description) => {
    api[type]({
      message: message,
      description: description,
    });
  };

  return (
    <authContext.Provider
      value={{
        isAuthenticated,
        isChecking,
        Login,
        Logout,
        token,
        contextHolder,
        openNotification,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
