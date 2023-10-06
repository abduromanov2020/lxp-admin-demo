import React, { useEffect } from "react";
import app from "../../config/firebase";
import { useScript } from "../../hooks/useScript";
import { reset as resetToken } from "../../features/auth/authSlice";
import { reset as resetUser } from "../../features/profile/profileSlice";
import { setTheme, addThemeListeners } from "../../utils/themeUtils";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";

const Topbar = () => {
  const { user } = useSelector((state) => state.profile);

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

  const getFirstName = (fullName) => {
    const names = fullName.split(" ");
    return names[0];
  };

  const location = useLocation();

  const scripts = [
    {
      id: "bootstrap-bundle",
      url: "/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js",
    },
    // {
    //   id: "apexcharts",
    //   url: "/assets/vendor/apexcharts/js/apexcharts.min.js",
    // },
    // {
    //   id: "overlayscrollbars",
    //   url: "/assets/vendor/overlay-scrollbar/js/overlayscrollbars.min.js",
    // },
    // {
    //   id: "choices",
    //   url: "/assets/vendor/choices/js/choices.min.js",
    // },
    // {
    //   id: "aos",
    //   url: "/assets/vendor/aos/aos.js",
    // },
    // {
    //   id: "glightbox",
    //   url: "/assets/vendor/glightbox/js/glightbox.js",
    // },
    // {
    //   id: "quill",
    //   url: "/assets/vendor/quill/js/quill.min.js",
    // },
    {
      id: "functions",
      url: "/assets/js/functions.js",
    },
  ];

  scripts.map(async (script) => await useScript(script.id, script.url));

  useEffect(() => {
    setTheme();
    addThemeListeners();

    return () => {
      document.querySelectorAll("[data-bs-theme-value]").forEach((toggle) => {
        toggle.removeEventListener("click", () => {});
      });
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", () => {});
    };
  }, [location]);

  return (
    <nav className="navbar top-bar navbar-light border-bottom py-0 py-xl-3">
      <div className="container-fluid p-0">
        <div className="d-flex align-items-center w-100">
          <div className="d-flex align-items-center d-xl-none">
            <a className="navbar-brand" href="index-2.html">
              <img
                className="light-mode-item navbar-brand-item h-30px"
                src="/assets/images/logo-mobile.svg"
                alt=""
              />
              <img
                className="dark-mode-item navbar-brand-item h-30px"
                src="/assets/images/logo-mobile-light.svg"
                alt=""
              />
            </a>
          </div>
          <div className="navbar-expand-xl sidebar-offcanvas-menu">
            <button
              className="navbar-toggler me-auto"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasSidebar"
              aria-controls="offcanvasSidebar"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-bs-auto-close="outside"
            >
              <i
                className="bi bi-text-right fa-fw h2 lh-0 mb-0 rtl-flip"
                data-bs-target="#offcanvasMenu"
              >
                {" "}
              </i>
            </button>
          </div>
          <div className="navbar-expand-lg ms-auto ms-xl-0">
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTopContent"
              aria-controls="navbarTopContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-animation">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
            <div className="collapse navbar-collapse w-100" id="navbarTopContent">
              <div className="nav my-3 my-xl-0 flex-nowrap align-items-center">
                <div className="nav-item w-100">
                  <form className="position-relative">
                    <input
                      className="form-control pe-5 bg-secondary bg-opacity-10 border-0"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="bg-transparent px-2 py-0 border-0 position-absolute top-50 end-0 translate-middle-y"
                      type="submit"
                    >
                      <i className="fas fa-search fs-6 text-primary"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="ms-xl-auto">
            <ul className="navbar-nav flex-row align-items-center">
              <li className="nav-item ms-2 ms-md-3 dropdown">
                <a
                  className="avatar avatar-sm p-0"
                  href="#"
                  id="profileDropdown"
                  role="button"
                  data-bs-auto-close="outside"
                  data-bs-display="static"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    className="avatar-img rounded-circle"
                    style={{ border: "1px solid black", padding: "2px" }}
                    src={
                      user.display_picture_link != null
                        ? `${user.display_picture_link}`
                        : "/assets/images/avatar/empty-display-picture.png"
                    }
                    alt={user.fullName}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src = "/assets/images/avatar/empty-display-picture.png";
                    }}
                  />
                </a>

                <ul
                  className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
                  aria-labelledby="profileDropdown"
                >
                  <li className="px-3 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar me-3">
                        <img
                          className="avatar-img rounded-circle shadow"
                          src={
                            user.display_picture_link != null
                              ? `${user.display_picture_link}`
                              : "/assets/images/avatar/empty-display-picture.png"
                          }
                          alt={user.fullName}
                          onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = "/assets/images/avatar/empty-display-picture.png";
                          }}
                        />
                      </div>
                      <div>
                        <span className="h6">Halo, {getFirstName(user.full_name)}!</span>
                        <p className="small m-0">{user.email}</p>
                      </div>
                    </div>
                    <hr />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/profile">
                      <i className="bi bi-person fa-fw me-2"></i>
                      Profil
                    </NavLink>
                  </li>
                  <li>
                    <button className="dropdown-item bg-danger-soft-hover" onClick={onLogout}>
                      <i className="fas fa-sign-out-alt fa-fw me-2"></i>
                      Keluar
                    </button>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  {/* Dark mode options START */}
                  <li>
                    <div className="bg-light dark-mode-switch theme-icon-active d-flex align-items-center justify-content-center p-1 rounded mt-2">
                      <button type="button" className="btn btn-sm mb-0" data-bs-theme-value="light">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-sun fa-fw mode-switch"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                          <use href="#"></use>
                        </svg>{" "}
                        Light
                      </button>
                      <button type="button" className="btn btn-sm mb-0" data-bs-theme-value="dark">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-moon-stars fa-fw mode-switch"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                          <use href="#"></use>
                        </svg>{" "}
                        Dark
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm mb-0 active"
                        data-bs-theme-value="auto"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-circle-half fa-fw mode-switch"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                          <use href="#"></use>
                        </svg>{" "}
                        Auto
                      </button>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
