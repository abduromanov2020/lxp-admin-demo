import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

import { login, loginWithGoogle, reset } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../features/profile/profileSlice";
import LoginForm from "../../component/auth/LoginForm";
// import useEffectOnce from '../../helpers/useEffectOnce';

const Login = () => {
  useEffect(() => {
    document.title = "LMS M-Knows | Login";
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const { user } = useSelector((state) => state.profile);

  useEffect(() => {
    if (token && !user) {
      dispatch(getMe());
    }

    if (isError) {
      dispatch(reset());
      toast.error(message);
    }

    if (isSuccess && token && user) {
      navigate("/");
      toast.success(
        `Selamat datang di LMS M-Knows, ${user.full_name.split(" ")[0]}!`
      );
      dispatch(reset());
    }
  }, [isError, isSuccess, token, user, message, navigate, dispatch]);

  const onFormChange = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (!email || !password)
      return toast.error("Invalid combination Email address and Password.");

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  const onLoginWithGoogle = (e) => {
    e.preventDefault();
    dispatch(loginWithGoogle());
  };

  return (
    <>
      {user ? (
        user?.role !== "admin" ? (
          <Navigate to="/masuk" />
        ) : (
          <Navigate to="/" />
        )
      ) : (
        <main>
          <section className="vh-xxl-100">
            <div className="container h-100 d-flex px-0 px-sm-4">
              <div className="row justify-content-center align-items-center m-auto">
                <div className="col-12">
                  <div className="bg-mode shadow rounded-3 overflow-hidden">
                    <div className="row g-0">
                      <div className="col-lg-6 d-flex align-items-center d-none d-lg-block order-1">
                        <div className="p-3 p-lg-5">
                          <img
                            src="assets/images/element/signin.svg"
                            alt="LMS M-Knows"
                          />
                        </div>
                        <div className="vr opacity-1 d-none d-lg-block" />
                      </div>
                      <LoginForm
                        onFormSubmit={onFormSubmit}
                        isLoading={isLoading}
                        email={email}
                        isSuccess={isSuccess}
                        onFormChange={onFormChange}
                        password={password}
                        passwordShown={passwordShown}
                        togglePasswordVisiblity={togglePasswordVisiblity}
                        onLoginWithGoogle={onLoginWithGoogle}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default Login;
