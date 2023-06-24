import axios from "axios";
import { createContext, useState } from "react";
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
