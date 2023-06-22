import styled, { keyframes, css } from "styled-components";
import { logoImage } from "../../constans/image";
import { useForm } from "react-hook-form";
import { memo, useContext, useEffect, useState } from "react";
import { authContext } from "../../context/authContext";
import { HeaderTitle } from "../../constans/text";

const Login = styled.div`
  max-width: 450px;
  min-width: 300px;
  width: 30%;
  border-radius: 25px;
  padding: 16px;
  box-shadow: rgba(253, 178, 206, 0.47) 0px 2px 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    box-shadow: none;
    width: 100%;
    border-radius: 0;
    height: 100%;
    min-width: none;
  }
`;
const DivImag = styled.div`
  width: 100%;
  height: 108px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 100%;
    width: auto;
  }
`;

const H2 = styled.div`
  padding: 16px;
  text-align: center;
  h2 {
    font-size: 2.4rem;
    font-weight: 600;
  }
  h5 {
    font-weight: 700;
  }
`;

const LoginForm = memo(() => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setShowText(true);
      } else {
        setShowText(false);
      }
    };
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Login>
      <DivImag>
        <img alt="logo" src={logoImage} />
      </DivImag>
      <H2>
        <h2>Đăng nhập</h2>

        {showText && <h5>{HeaderTitle}</h5>}
      </H2>

      <Form />
    </Login>
  );
});

const FormContainer = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  padding: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
  &:focus-within {
    border: 1px solid #da2a1c;
  }
  i {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    padding: 5px;
    width: 50px;
    height: 50px;
    color: rgba(0, 0, 0, 0.6);
  }
  input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    padding-left: 8px;
    line-height: 20px;
    font-size: 1.6rem;
    flex: 1;
    color: rgba(0, 0, 0, 0.87);
  }
`;
const ErrorText = styled.div`
  width: 100%;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: red;
    font-size: 1.2rem;
    height: 100%;
  }
`;

const ButtonWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  align-items: center;
  button {
    width: 100%;
    height: 44px;
    border-radius: 22px;
    background-color: #da2a1c;
    border: none;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 1.6rem;
    &:hover {
      background-color: #da3a2c;
    }
  }
`;

const ForgetPassText = styled.div`
  font-size: 1.4rem;
  width: 100%;
  text-align: center;
  padding: 8px 0 0 0;
  color: #da2a1c;
  cursor: pointer;
`;
const rotateAnimation = keyframes`
 from{
      transform: rotate(0turn);
  }
  to{
      transform: rotate(1turn);
    }
`;
const LoginLoad = styled.div`
  ${(props) =>
    props.login &&
    css`
      width: 100%;
      height: 44px;
      top: 0;
      border-radius: 22px;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.6);
      &::after {
        position: absolute;
        top: calc(50% - 15px);
        left: calc(50% - 15px);
        border-radius: 50%;
        content: "";
        width: 30px;
        height: 30px;
        border: 2px solid #fff;
        border-bottom: 1px solid transparent;
        animation: ${rotateAnimation} 1.2s ease infinite;
      }
    `};
`;

const Form = () => {
  const { Login } = useContext(authContext);
  const [showPass, setShowPass] = useState(false);
  const [isLogin, setIsLogin] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setIsLogin(1);

    await Login(data);

    setIsLogin(0);
  };
  const showPassworrd = () => {
    setShowPass(!showPass);
  };

  return (
    <FormContainer action="" onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <i className="fa-regular fa-user"></i>
        <input
          name="username"
          type="text"
          placeholder="Tên đăng nhập"
          {...register("username", { required: true })}
        />
      </InputWrapper>
      <ErrorText>
        {errors.username && <span>Tên dăng nhập là bắt buộc</span>}
      </ErrorText>

      <InputWrapper>
        <i className="fa-solid fa-lock"></i>
        <input
          type={showPass ? "text" : "password"}
          placeholder="Mật khẩu"
          name="password"
          {...register("password", { required: true, minLength: 8 })}
        />
        <i
          style={{
            cursor: "pointer",
          }}
          onClick={showPassworrd}
          className={showPass ? "fa-regular fa-eye-slash" : "fa-regular fa-eye"}
        ></i>
      </InputWrapper>
      <ErrorText>
        {errors.password && errors.password.type === "required" && (
          <span>Mật khẩu là bắt buộc</span>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <span>Mật khẩu phải có ít nhất 8 ký tự</span>
        )}
      </ErrorText>

      <ButtonWrapper>
        <LoginLoad login={isLogin}></LoginLoad>
        <button type="submit" onClick={handleSubmit(onSubmit)}>
          Đăng nhập
        </button>
        <ForgetPassText>Quên mật khẩu</ForgetPassText>
      </ButtonWrapper>
    </FormContainer>
  );
};

export default LoginForm;
