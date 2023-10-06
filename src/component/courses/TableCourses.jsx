import React from "react";

const TableCourses = () => {
  return (
    <>
      <div className="card-body">
        {/* Course table START */}
        <div className="table-responsive border-0 rounded-3">
          {/* Table START */}
          <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
            {/* Table head */}
            <thead>
              <tr>
                <th scope="col" className="border-0 rounded-start">
                  Course Name
                </th>
                <th scope="col" className="border-0">
                  Instructor
                </th>
                <th scope="col" className="border-0">
                  Added Date
                </th>
                <th scope="col" className="border-0">
                  Type
                </th>
                <th scope="col" className="border-0">
                  Price
                </th>
                <th scope="col" className="border-0">
                  Status
                </th>
                <th scope="col" className="border-0 rounded-end">
                  Action
                </th>
              </tr>
            </thead>
            {/* Table body START */}
            <tbody>
              {/* Table row */}
              <tr>
                {/* Table data */}
                <td>
                  <div className="d-flex align-items-center position-relative">
                    {/* Image */}
                    <div className="w-60px">
                      <img
                        src="assets/images/courses/4by3/08.jpg"
                        className="rounded"
                        alt=""
                      />
                    </div>
                    {/* Title */}
                    <h6 className="table-responsive-title mb-0 ms-2">
                      <a href="#" className="stretched-link">
                        Building Scalable APIs with GraphQL
                      </a>
                    </h6>
                  </div>
                </td>
                {/* Table data */}
                <td>
                  <div className="d-flex align-items-center mb-3">
                    {/* Avatar */}
                    <div className="avatar avatar-xs flex-shrink-0">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/avatar/09.jpg"
                        alt="avatar"
                      />
                    </div>
                    {/* Info */}
                    <div className="ms-2">
                      <h6 className="mb-0 fw-light">Lori Stevens</h6>
                    </div>
                  </div>
                </td>
                {/* Table data */}
                <td>28 Oct 2021</td>
                {/* Table data */}
                <td>
                  {" "}
                  <span className="badge text-bg-primary">Beginner</span>{" "}
                </td>
                {/* Table data */}
                <td>$350</td>
                {/* Table data */}
                <td>
                  {" "}
                  <span className="badge bg-warning bg-opacity-15 text-warning">
                    Pending
                  </span>{" "}
                </td>
                {/* Table data */}
                <td>
                  <a
                    href="#"
                    className="btn btn-sm btn-success-soft me-1 mb-1 mb-md-0"
                  >
                    Approve
                  </a>
                  <button className="btn btn-sm btn-secondary-soft mb-0">
                    Reject
                  </button>
                </td>
              </tr>
              {/* Table row */}
              <tr>
                {/* Table data */}
                <td>
                  <div className="d-flex align-items-center position-relative">
                    {/* Image */}
                    <div className="w-60px">
                      <img
                        src="assets/images/courses/4by3/10.jpg"
                        className="rounded"
                        alt=""
                      />
                    </div>
                    {/* Title */}
                    <h6 className="table-responsive-title mb-0 ms-2">
                      <a href="#" className="stretched-link">
                        Bootstrap 5 From Scratch
                      </a>
                    </h6>
                  </div>
                </td>
                {/* Table data */}
                <td>
                  <div className="d-flex align-items-center mb-3">
                    {/* Avatar */}
                    <div className="avatar avatar-xs flex-shrink-0">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/avatar/04.jpg"
                        alt="avatar"
                      />
                    </div>
                    {/* Info */}
                    <div className="ms-2">
                      <h6 className="mb-0 fw-light">Billy Vasquez</h6>
                    </div>
                  </div>
                </td>
                {/* Table data */}
                <td>16 Oct 2021</td>
                {/* Table data */}
                <td>
                  {" "}
                  <span className="badge text-bg-purple">
                    Intermediate
                  </span>{" "}
                </td>
                {/* Table data */}
                <td>$256</td>
                {/* Table data */}
                <td>
                  <span className="badge bg-warning bg-opacity-15 text-warning">
                    Pending
                  </span>
                </td>
                {/* Table data */}
                <td>
                  <a
                    href="#"
                    className="btn btn-sm btn-success-soft me-1 mb-1 mb-md-0"
                  >
                    Approve
                  </a>
                  <button className="btn btn-sm btn-secondary-soft mb-0">
                    Reject
                  </button>
                </td>
              </tr>
              {/* Table row */}
              <tr>
                {/* Table data */}
                <td>
                  <div className="d-flex align-items-center position-relative">
                    {/* Image */}
                    <div className="w-60px">
                      <img
                        src="assets/images/courses/4by3/02.jpg"
                        className="rounded"
                        alt=""
                      />
                    </div>
                    {/* Title */}
                    <h6 className="table-responsive-title mb-0 ms-2">
                      <a href="#" className="stretched-link">
                        Graphic Design Masterclass
                      </a>
                    </h6>
                  </div>
                </td>
                {/* Table data */}
                <td>
                  <div className="d-flex align-items-center mb-3">
                    {/* Avatar */}
                    <div className="avatar avatar-xs flex-shrink-0">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/avatar/05.jpg"
                        alt="avatar"
                      />
                    </div>
                    {/* Info */}
                    <div className="ms-2">
                      <h6 className="mb-0 fw-light">Carolyn Ortiz</h6>
                    </div>
                  </div>
                </td>
                {/* Table data */}
                <td>28 Aug 2021</td>
                {/* Table data */}
                <td>
                  {" "}
                  <span className="badge text-bg-orange">All level</span>{" "}
                </td>
                {/* Table data */}
                <td>$347</td>
                {/* Table data */}
                <td>
                  <span className="badge bg-success bg-opacity-15 text-success">
                    Live
                  </span>
                </td>
                {/* Table data */}
                <td>
                  <a href="#" className="btn btn-sm btn-dark me-1 mb-1 mb-md-0">
                    Edit
                  </a>
                </td>
              </tr>
              {/* Table row */}
            </tbody>
            {/* Table body END */}
          </table>
          {/* Table END */}
        </div>
        {/* Course table END */}
      </div>
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
        {/* Pagination END */}
      </div>
    </>
  );
};

export default TableCourses;
