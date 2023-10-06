import React from "react";

const ListAdministration = () => {
  return (
    <>
      <div className="card bg-transparent border">
        <div className="card-header bg-light border-bottom">
          <div className="row g-3 align-items-center justify-content-between">
            <div className="col-md-8">
              <form className="rounded position-relative">
                <input
                  className="form-control bg-body"
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
              <form>
                <select
                  className="form-select js-choice border-0 z-index-9 bg-transparent"
                  aria-label=".form-select-sm"
                >
                  <option value="">Sort by</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                  <option>Accepted</option>
                  <option>Rejected</option>
                </select>
              </form>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive border-0">
            <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
              <thead>
                <tr>
                  <th scope="col" className="border-0 rounded-start">
                    Instructor name
                  </th>
                  <th scope="col" className="border-0">
                    Subject
                  </th>
                  <th scope="col" className="border-0">
                    Requested Date
                  </th>
                  <th scope="col" className="border-0 rounded-end">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center position-relative">
                      <div className="avatar avatar-md">
                        <img
                          src="assets/images/avatar/09.jpg"
                          className="rounded-circle"
                          alt=""
                        />
                      </div>
                      <div className="mb-0 ms-2">
                        <h6 className="mb-0">
                          <a href="#" className="stretched-link">
                            Lori Stevens
                          </a>
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td className="text-center text-sm-start">
                    <h6 className="mb-0">HTML, css, bootstrap</h6>
                  </td>
                  <td>22 Oct 2021</td>
                  <td>
                    <a
                      href="#"
                      className="btn btn-success-soft me-1 mb-1 mb-lg-0"
                    >
                      Accept
                    </a>
                    <a
                      href="#"
                      className="btn btn-secondary-soft me-1 mb-1 mb-lg-0"
                    >
                      Reject
                    </a>
                    <a
                      href="#"
                      className="btn btn-primary-soft me-1 mb-0"
                      data-bs-toggle="modal"
                      data-bs-target="#appDetail"
                    >
                      View App
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center position-relative">
                      <div className="avatar avatar-md">
                        <img
                          src="assets/images/avatar/03.jpg"
                          className="rounded-circle"
                          alt=""
                        />
                      </div>
                      <div className="mb-0 ms-2">
                        <h6 className="mb-0">
                          <a href="#" className="stretched-link">
                            Dennis Barrett
                          </a>
                        </h6>
                      </div>
                    </div>
                  </td>

                  <td className="text-center text-sm-start">
                    <h6 className="mb-0">Javascript, Java</h6>
                  </td>

                  <td>21 Jan 2021</td>

                  <td>
                    <a
                      href="#"
                      className="btn btn-success me-1 mb-1 mb-md-0 disabled"
                    >
                      Accepted
                    </a>
                    <a
                      href="#"
                      className="btn btn-primary-soft me-1 mb-0"
                      data-bs-toggle="modal"
                      data-bs-target="#appDetail"
                    >
                      View App
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center position-relative">
                      <div className="avatar avatar-md">
                        <img
                          src="assets/images/avatar/04.jpg"
                          className="rounded-circle"
                          alt=""
                        />
                      </div>
                      <div className="mb-0 ms-2">
                        <h6 className="mb-0">
                          <a href="#" className="stretched-link">
                            Billy Vasquez
                          </a>
                        </h6>
                      </div>
                    </div>
                  </td>

                  <td className="text-center text-sm-start">
                    <h6 className="mb-0">Maths, Chemistry</h6>
                  </td>

                  <td>25 Dec 2020</td>

                  <td>
                    <a
                      href="#"
                      className="btn btn-secondary me-1 mb-1 mb-md-0 disabled"
                    >
                      Rejected
                    </a>
                    <a
                      href="#"
                      className="btn btn-primary-soft me-1 mb-0"
                      data-bs-toggle="modal"
                      data-bs-target="#appDetail"
                    >
                      View App
                    </a>
                  </td>
                </tr>
              </tbody>
              {/* Table body END */}
            </table>
          </div>
          {/* Instructor request table END */}
        </div>
        {/* Card body END */}
        {/* Card footer START */}
        <div className="card-footer bg-transparent pt-0">
          {/* Pagination START */}
          <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
            {/* Content */}
            <p className="mb-0 text-center text-sm-start">
              Showing 1 to 8 of 20 entries
            </p>
            {/* Pagination */}
            <nav
              className="d-flex justify-content-center mb-0"
              aria-label="navigation"
            >
              <ul className="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
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
      {/* Modal START */}
      <div
        className="modal fade"
        id="appDetail"
        tabIndex={-1}
        aria-labelledby="appDetaillabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            {/* Modal header */}
            <div className="modal-header bg-dark">
              <h5 className="modal-title text-white" id="appDetaillabel">
                Applicant details
              </h5>
              <button
                type="button"
                className="btn btn-sm btn-light mb-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="bi bi-x-lg" />
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body p-5">
              {/* Name */}
              <span className="small">Applicant Name:</span>
              <h6 className="mb-3">Jacqueline Miller</h6>
              {/* Email */}
              <span className="small">Applicant Email id:</span>
              <h6 className="mb-3">example@gmail.com</h6>
              {/* Phone number */}
              <span className="small">Applicant Phone number:</span>
              <h6 className="mb-3">+123 456 789 10</h6>
              {/* Summary */}
              <span className="small">Summary:</span>
              <p className="text-dark mb-2">
                We focus a great deal on the understanding of behavioral
                psychology and influence triggers which are crucial for becoming
                a well rounded Digital Marketer. We understand that theory is
                important to build a solid foundation, we understand that theory
                alone isn’t going to get the job done so that’s why this course
                is packed with practical hands-on examples that you can follow
                step by step.
              </p>
              <p className="text-dark mb-0">
                As it so contrasted oh estimating instrument. Size like body
                someone had. Are conduct viewing boy minutes warrant the
                expense? Tolerably behavior may admit daughters offending her
                ask own. Praise effect wishes change way and any wanted. Lively
                use looked latter regard had. Do he it part more last in.
              </p>
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger-soft my-0"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal END */}
    </>
  );
};

export default ListAdministration;
