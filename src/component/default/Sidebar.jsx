import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { reset as resetToken } from "../../features/auth/authSlice";
import { reset as resetUser } from "../../features/profile/profileSlice";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import Logo from "../../assets/images/m-knows-logo.png";

import app from "../../config/firebase";

const Sidebar = () => {
  const auth = getAuth(app);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogout = () => {
    auth.signOut();

    localStorage.removeItem("user");
    localStorage.removeItem("token");

    dispatch(resetUser());
    dispatch(resetToken());

    toast.info("Anda berhasil keluar.");

    if (location.pathname !== "/masuk") navigate("/masuk");
    // else window.location.reload();
  };
  return (
    <main>
      <nav className="navbar sidebar navbar-expand-xl navbar-dark bg-dark">
        <div className="d-flex align-items-center justify-content-center">
          <a className="navbar-brand" href="index-2.html">
            <img
              className="navbar-brand-item"
              src={Logo}
              style={{ width: "150px", height: "50px" }}
              alt=""
            />
          </a>
        </div>
        <div
          className="offcanvas offcanvas-start flex-row custom-scrollbar h-100"
          data-bs-backdrop="true"
          tabIndex="-1"
          id="offcanvasSidebar"
        >
          <div className="offcanvas-body sidebar-content d-flex flex-column bg-dark">
            <ul className="navbar-nav flex-column" id="navbar-sidebar">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active">
                  <i className="bi bi-house fa-fw me-2"></i>
                  Dashboard
                </NavLink>
              </li>

              <li className="nav-item ms-2 my-2">Halaman</li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="collapse"
                  href="#collapseusers"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseusers"
                >
                  <i className="fas fa-user-graduate fa-fw me-2"></i>User Management
                </a>
                <ul
                  className="nav collapse flex-column"
                  id="collapseusers"
                  data-bs-parent="#navbar-sidebar"
                >
                  <li className="nav-item ms-1">
                    {" "}
                    <NavLink className="nav-link" to="/daftar-admin">
                      Admin
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="collapse"
                  href="#collapsestudent"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapsestudent"
                >
                  <i className="fas fa-user-graduate fa-fw me-2"></i>Student
                </a>
                <ul
                  className="nav collapse flex-column"
                  id="collapsestudent"
                  data-bs-parent="#navbar-sidebar"
                >
                  <li className="nav-item ms-1">
                    {" "}
                    <NavLink className="nav-link" to="/student/administration">
                      Administration
                    </NavLink>
                  </li>
                  <li className="nav-item ms-1">
                    {" "}
                    <NavLink className="nav-link" to="/student/study-plan">
                      Study Plan
                    </NavLink>
                  </li>
                  <li className="nav-item ms-1">
                    {" "}
                    <NavLink className="nav-link" to="/student/grading">
                      Grading
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link disabled text-secondary"
                  data-bs-toggle="collapse"
                  href="#collapseinstructors"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseinstructors"
                >
                  <i className="fas fa-user-graduate fa-fw me-2"></i>Karyawan
                </a>
                <ul
                  className="nav collapse flex-column"
                  id="collapseinstructors"
                  data-bs-parent="#navbar-sidebar"
                >
                  <li className="nav-item ms-1">
                    {" "}
                    <NavLink className="nav-link" to="/daftar-karyawan">
                      Semua Karyawan
                    </NavLink>
                  </li>
                  <li className="nav-item ms-1">
                    <NavLink className="nav-link" to="/administrasi-karyawan">
                      Semua Administrasi
                      <span className="badge text-bg-success rounded-circle ms-2">2</span>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="collapse"
                  href="#collapsepage"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapsepage"
                >
                  <i className="bi bi-basket fa-fw me-2"></i>Pelatihan
                </a>
                <ul
                  className="nav collapse flex-column"
                  id="collapsepage"
                  data-bs-parent="#navbar-sidebar"
                >
                  <li className="nav-item ms-1">
                    {" "}
                    <NavLink className="nav-link" to="/daftar-pelatihan">
                      Semua Pelatihan
                    </NavLink>
                  </li>
                  <li className="nav-item ms-1">
                    {" "}
                    <NavLink className="nav-link" to="/kategori-pelatihan">
                      Kategori Pelatihan
                    </NavLink>
                  </li>
                  <li className="nav-item ms-1">
                    {" "}
                    <NavLink className="nav-link" to="/detail-pelatihan">
                      Detail Pelatihan
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                {" "}
                <a className="nav-link disabled text-secondary" href="admin-review.html">
                  <i className="far fa-comment-dots fa-fw me-2"></i>Reviews
                </a>
              </li>

              <li className="nav-item">
                {" "}
                <a className="nav-link disabled text-secondary" href="admin-earning.html">
                  <i className="far fa-chart-bar fa-fw me-2"></i>Earnings
                </a>
              </li>
            </ul>
            <div className="px-3 mt-auto pt-3">
              <div className="d-flex align-items-center justify-content-between text-primary-hover">
                <a
                  className="h5 mb-0 text-body disabled text-secondary"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Settings"
                >
                  <i className="bi bi-gear-fill"></i>
                </a>
                <a
                  className="h5 mb-0 text-body disabled text-secondary"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Home"
                >
                  <i className="bi bi-globe"></i>
                </a>
                <a className="h5 mb-0 text-body btn btn-link fs-4 p-0" onClick={onLogout}>
                  <i className="bi bi-power"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Sidebar;
