import React from "react";

const CounterBoxes = () => {
  return (
    <div className="row g-4 mb-4">
      <div className="col-md-6 col-xxl-3">
        <div className="card card-body bg-warning bg-opacity-15 p-4 h-100">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h2
                className="purecounter mb-0 fw-bold"
                data-purecounter-start={0}
                data-purecounter-end={1958}
                data-purecounter-delay={200}
              >
                0
              </h2>
              <span className="mb-0 h6 fw-light">Completed Courses</span>
            </div>
            <div className="icon-lg rounded-circle bg-warning text-white mb-0">
              <i className="fas fa-tv fa-fw" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-xxl-3">
        <div className="card card-body bg-purple bg-opacity-10 p-4 h-100">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h2
                className="purecounter mb-0 fw-bold"
                data-purecounter-start={0}
                data-purecounter-end={1600}
                data-purecounter-delay={200}
              >
                0
              </h2>
              <span className="mb-0 h6 fw-light">Enrolled Courses</span>
            </div>
            <div className="icon-lg rounded-circle bg-purple text-white mb-0">
              <i className="fas fa-user-tie fa-fw" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-xxl-3">
        <div className="card card-body bg-primary bg-opacity-10 p-4 h-100">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h2
                className="purecounter mb-0 fw-bold"
                data-purecounter-start={0}
                data-purecounter-end={1235}
                data-purecounter-delay={200}
              >
                0
              </h2>
              <span className="mb-0 h6 fw-light">Course In Progress</span>
            </div>
            <div className="icon-lg rounded-circle bg-primary text-white mb-0">
              <i className="fas fa-user-graduate fa-fw" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-xxl-3">
        <div className="card card-body bg-success bg-opacity-10 p-4 h-100">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div className="d-flex">
                <h2
                  className="purecounter mb-0 fw-bold"
                  data-purecounter-start={0}
                  data-purecounter-end={845}
                  data-purecounter-delay={200}
                >
                  0
                </h2>
                <span className="mb-0 h2 ms-1">hrs</span>
              </div>
              <span className="mb-0 h6 fw-light">Total Watch Time</span>
            </div>
            <div className="icon-lg rounded-circle bg-success text-white mb-0">
              <i className="bi bi-stopwatch-fill fa-fw" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterBoxes;
