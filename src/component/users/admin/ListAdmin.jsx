import React from "react";
import TableAdmin from "./TableAdmin";

const ListAdmin = () => {
  return (
    <div className="card bg-transparent">
      <div className="card-header bg-transparent border-bottom px-0">
        <div className="row g-3 align-items-center justify-content-between">
          <div className="col-md-6">
            <form className="rounded position-relative">
              <input
                className="form-control bg-transparent"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
                type="submit"
              >
                <i className="fas fa-search fs-6 " />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="card-body px-0">
        <div className="tab-content">
          <TableAdmin />
        </div>
      </div>
      <div className="card-footer bg-transparent pt-0 px-0">
        <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
          <p className="mb-0 text-center text-sm-start">
            Showing 1 to 8 of 20 entries
          </p>
          <nav
            className="d-flex justify-content-center mb-0"
            aria-label="navigation"
          >
            <ul className="pagination pagination-sm pagination-primary-soft mb-0 pb-0 px-0">
              <li className="page-item mb-0">
                <a className="page-link" href="#" tabIndex={-1}>
                  <i className="fas fa-angle-left" />
                </a>
              </li>
              <li className="page-item mb-0">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item mb-0 active">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item mb-0">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item mb-0">
                <a className="page-link" href="#">
                  <i className="fas fa-angle-right" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ListAdmin;
