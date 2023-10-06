import React from "react";

const CourseBoxes = () => {
  return (
    <div className="row g-4 mb-4">
      {/* Course item */}
      <div className="col-sm-6 col-lg-4">
        <div className="text-center p-4 bg-primary bg-opacity-10 border border-primary rounded-3">
          <h6>Total Courses</h6>
          <h2 className="mb-0 fs-1 text-primary">1200</h2>
        </div>
      </div>
      {/* Course item */}
      <div className="col-sm-6 col-lg-4">
        <div className="text-center p-4 bg-success bg-opacity-10 border border-success rounded-3">
          <h6>Activated Courses</h6>
          <h2 className="mb-0 fs-1 text-success">996</h2>
        </div>
      </div>
      {/* Course item */}
      <div className="col-sm-6 col-lg-4">
        <div className="text-center p-4  bg-warning bg-opacity-15 border border-warning rounded-3">
          <h6>Pending Courses</h6>
          <h2 className="mb-0 fs-1 text-warning">200</h2>
        </div>
      </div>
    </div>
  );
};

export default CourseBoxes;
