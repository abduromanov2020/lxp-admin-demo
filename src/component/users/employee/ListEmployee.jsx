import React from "react";
import TableEmployee from "./TableEmployee";
import CardEmployee from "./CardEmployee";

const ListEmployee = () => {
  return (
    <div className="card bg-transparent">
      <div className="card-header bg-transparent border-bottom px-0">
        <div className="row g-3 align-items-center justify-content-between">
          <div className="col-md-8">
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
          <div className="col-md-3">
            <ul
              className="list-inline mb-0 nav nav-pills nav-pill-dark-soft border-0 justify-content-end"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  href="#nav-preview-tab-1"
                  className="nav-link mb-0 me-2 active"
                  data-bs-toggle="tab"
                >
                  <i className="fas fa-fw fa-th-large" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#nav-html-tab-1"
                  className="nav-link mb-0"
                  data-bs-toggle="tab"
                >
                  <i className="fas fa-fw fa-list-ul" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card-body px-0">
        <div className="tab-content">
          <CardEmployee />
          <TableEmployee />
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

export default ListEmployee;
