import React from "react";
import Sidebar from "../../component/default/Sidebar";
import Topbar from "../../component/default/Topbar";
import { Link } from "react-router-dom";
import ListCourseCategory from "../../component/courses/ListCourseCategory";

const CourseCategory = () => {
  return (
    <>
      <Sidebar />
      <div className="page-content">
        <Topbar />
        <div className="page-content-wrapper border">
          {/* Title */}
          <div className="row mb-3">
            <div className="col-12 d-sm-flex justify-content-between align-items-center">
              <h1 className="h3 mb-2 mb-sm-0">
                Web design{" "}
                <span className="badge bg-orange bg-opacity-10 text-orange">
                  245
                </span>
              </h1>
              <Link
                to="/buat-pelatihan"
                className="btn btn-sm btn-primary mb-0"
              >
                Create a Course
              </Link>
            </div>
          </div>
          {/* Card START */}
          <ListCourseCategory />
          {/* Card END */}
        </div>
      </div>
    </>
  );
};

export default CourseCategory;
