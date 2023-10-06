import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LoginForm = ({
  onFormSubmit,
  isLoading,
  email,
  isSuccess,
  onFormChange,
  password,
  passwordShown,
  togglePasswordVisiblity,
}) => {
  return (
    <div className="col-lg-6">
      <div className="p-4 p-sm-7 p-xl-6">
        <Link className="me-0" to="/">
          <img
            className="h-40px mb-4"
            src="../../assets/images/m-knows-logo.png"
            alt="LMS M-Knows"
          />
        </Link>
        <h1 className="mb-2 h2">Masuk Admin</h1>

        <form onSubmit={onFormSubmit} className="mt-4 text-start">
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              disabled={isSuccess}
              onChange={onFormChange}
            />
          </div>
          <div className="mb-3 position-relative">
            <label className="form-label">Password</label>
            <input
              className="form-control fakepassword"
              type={passwordShown ? "text" : "password"}
              name="password"
              value={password}
              disabled={isSuccess}
              onChange={onFormChange}
            />
            <span className="position-absolute top-50 end-0 translate-middle-y p-0 mt-3">
              <i
                className={
                  passwordShown
                    ? "fakepasswordicon fas fa-eye cursor-pointer p-2"
                    : "fakepasswordicon fas fa-eye-slash cursor-pointer p-2"
                }
                onClick={togglePasswordVisiblity}
              ></i>
            </span>
          </div>
          <div className="mb-3 d-sm-flex justify-content-between">
            <div>
              <input
                type="checkbox"
                className="form-check-input "
                id="rememberCheck"
              />
              <label className="form-check-label px-2" htmlFor="rememberCheck">
                Remember me
              </label>
            </div>
          </div>
          <div>
            {isLoading ? (
              <button
                className="btn btn-primary w-100 mb-0"
                type="submit"
                disabled={isLoading}
              >
                <span className="spinner-border spinner-border-sm"></span>&nbsp;
                &nbsp;Loading...
              </button>
            ) : (
              <button
                disabled={isSuccess}
                type="submit"
                style={{ backgroundColor: "#3B90C8 " }}
                className="btn btn-primary w-100 mb-0"
              >
                Login
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  onFormChange: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  passwordShown: PropTypes.bool.isRequired,
  togglePasswordVisiblity: PropTypes.func.isRequired,
};

export default LoginForm;
