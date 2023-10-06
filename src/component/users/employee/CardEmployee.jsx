import React from "react";
import PropTypes from "prop-types";

const CardEmployee = ({ employeeData }) => {
  return (
    <>
      <div className="tab-pane fade show active" id="nav-preview-tab-1">
        <div className="row g-4">
          {employeeData.map((employee, i) => (
            <>
              <div className="col-md-6 col-xxl-4">
                <div className="card bg-transparent border h-100" key={i}>
                  <div className="card-header bg-transparent border-bottom d-flex justify-content-between">
                    <div className="d-sm-flex align-items-center">
                      <div className="avatar avatar-md flex-shrink-0">
                        <img
                          className="avatar-img rounded-circle"
                          src={employee.img}
                          alt="avatar"
                        />
                      </div>
                      <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                        <h5 className="mb-0">
                          <a href="#">{employee.name}</a>
                        </h5>
                        <span className="text-body small">
                          <i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />
                          {employee.dept}
                        </span>
                      </div>
                    </div>
                    <div className="dropdown text-end">
                      <a
                        href="#"
                        className="btn btn-sm btn-light btn-round small mb-0"
                        role="button"
                        id="dropdownShare2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots fa-fw" />
                      </a>
                      <ul
                        className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded"
                        aria-labelledby="dropdownShare2"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bi bi-pencil-square fa-fw me-2" />
                            Edit
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bi bi-trash fa-fw me-2" />
                            Remove
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-center">
                        <div className="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0">
                          <i className="fas fa-book fa-fw" />
                        </div>
                        <h6 className="mb-0 ms-2 fw-light">Total Course</h6>
                      </div>
                      <span className="mb-0 fw-bold">
                        {employee.total_course}
                      </span>
                    </div>
                    <div className="overflow-hidden">
                      <h6 className="mb-0">{employee.progress}%</h6>
                      <div className="progress progress-sm bg-primary bg-opacity-10">
                        <div
                          className="progress-bar bg-primary aos"
                          role="progressbar"
                          data-aos="slide-right"
                          data-aos-delay={200}
                          data-aos-duration={1000}
                          data-aos-easing="ease-in-out"
                          style={{ width: "85%" }}
                          aria-valuenow={employee.progress}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer bg-transparent border-top">
                    <div className="d-sm-flex justify-content-between align-items-center">
                      <h6 className="mb-2 mb-sm-0">
                        <i className="bi bi-calendar fa-fw text-orange me-2" />
                        <span className="text-body">Join at:</span> 29 Aug 2021
                      </h6>
                      <div className="text-end text-primary-hover">
                        <a
                          href="#"
                          className="btn btn-link text-body p-0 mb-0 me-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Message"
                          aria-label="Message"
                        >
                          <i className="bi bi-envelope-fill" />
                        </a>
                        <a
                          href="#"
                          className="btn btn-link text-body p-0 mb-0"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Block"
                          aria-label="Block"
                        >
                          <i className="fas fa-ban" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

CardEmployee.propTypes = {
  employeeData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      dept: PropTypes.string.isRequired,
      total_course: PropTypes.string.isRequired,
      progress: PropTypes.number.isRequired,
      img: PropTypes.string,
    })
  ).isRequired,
};

export default CardEmployee;
