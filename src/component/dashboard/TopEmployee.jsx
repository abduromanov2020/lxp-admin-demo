import React from "react";

const TopEmployee = () => {
  return (
    <div className="col-lg-6 col-xxl-4">
      <div className="card shadow h-100">
        <div className="card-header border-bottom d-flex justify-content-between align-items-center p-4">
          <h5 className="card-header-title">Top Instructors</h5>
          <a href="#" className="btn btn-link p-0 mb-0">
            View all
          </a>
        </div>
        <div className="card-body p-4">
          <div className="d-sm-flex justify-content-between align-items-center">
            <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
              <div className="avatar avatar-md flex-shrink-0">
                <img
                  className="avatar-img rounded-circle"
                  src="assets/images/avatar/09.jpg"
                  alt="avatar"
                />
              </div>
              <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                <h6 className="mb-1">
                  Lori Stevens
                  <i className="bi bi-patch-check-fill text-info small ms-1" />
                </h6>
                <ul className="list-inline mb-0 small">
                  <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                    <i className="fas fa-book text-purple me-1" />
                    25 Courses
                  </li>
                  <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                    <i className="fas fa-star text-warning me-1" />
                    4.5/5.0
                  </li>
                </ul>
              </div>
            </div>
            <a href="#" className="btn btn-sm btn-light mb-0">
              View
            </a>
          </div>
          <hr />
          <div className="d-sm-flex justify-content-between align-items-center">
            <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
              <div className="avatar avatar-md flex-shrink-0">
                <img
                  className="avatar-img rounded-circle"
                  src="assets/images/avatar/03.jpg"
                  alt="avatar"
                />
              </div>
              <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                <h6 className="mb-1">Dennis Barrett</h6>
                <ul className="list-inline mb-0 small">
                  <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                    <i className="fas fa-book text-purple me-1" />
                    18 Courses
                  </li>
                  <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                    <i className="fas fa-star text-warning me-1" />
                    4.5/5.0
                  </li>
                </ul>
              </div>
            </div>
            <a href="#" className="btn btn-sm btn-light mb-0">
              View
            </a>
          </div>
          <hr />
          <div className="d-sm-flex justify-content-between align-items-center">
            <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
              <div className="avatar avatar-md flex-shrink-0">
                <img
                  className="avatar-img rounded-circle"
                  src="assets/images/avatar/01.jpg"
                  alt="avatar"
                />
              </div>
              <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                <h6 className="mb-1">
                  Jacqueline Miller
                  <i className="bi bi-patch-check-fill text-info small ms-1" />
                </h6>
                <ul className="list-inline mb-0 small">
                  <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                    <i className="fas fa-book text-purple me-1" />
                    21 Courses
                  </li>
                  <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                    <i className="fas fa-star text-warning me-1" />
                    4.8/5.0
                  </li>
                </ul>
              </div>
            </div>
            <a href="#" className="btn btn-sm btn-light mb-0">
              View
            </a>
          </div>
          <hr />
          <div className="d-sm-flex justify-content-between align-items-center">
            <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
              <div className="avatar avatar-md flex-shrink-0">
                <img
                  className="avatar-img rounded-circle"
                  src="assets/images/avatar/04.jpg"
                  alt="avatar"
                />
              </div>
              <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                <h6 className="mb-1">Billy Vasquez</h6>
                <ul className="list-inline mb-0 small">
                  <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                    <i className="fas fa-book text-purple me-1" />
                    15 Courses
                  </li>
                  <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                    <i className="fas fa-star text-warning me-1" />
                    4.5/5.0
                  </li>
                </ul>
              </div>
            </div>
            <a href="#" className="btn btn-sm btn-light mb-0">
              View
            </a>
          </div>
          <hr />
          <div className="d-sm-flex justify-content-between align-items-center">
            <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
              <div className="avatar avatar-md flex-shrink-0">
                <img
                  className="avatar-img rounded-circle"
                  src="assets/images/avatar/05.jpg"
                  alt="avatar"
                />
              </div>
              <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                <h6 className="mb-1">
                  Amanda Reed
                  <i className="bi bi-patch-check-fill text-info small ms-1" />
                </h6>
                <ul className="list-inline mb-0 small">
                  <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                    <i className="fas fa-book text-purple me-1" />
                    29 Courses
                  </li>
                  <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                    <i className="fas fa-star text-warning me-1" />
                    4.5/5.0
                  </li>
                </ul>
              </div>
            </div>
            <a href="#" className="btn btn-sm btn-light mb-0">
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopEmployee;
