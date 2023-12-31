import React from "react";
import Sidebar from "../../component/default/Sidebar";
import Topbar from "../../component/default/Topbar";
import CourseBoxes from "../../component/courses/CourseBoxes";
import { Link } from "react-router-dom";
import TableProperties from "../../component/default/TableProperties";
import TableCourses from "../../component/courses/TableCourses";

const AllCourses = () => {
  const option = ["Course Name", "Added Date", "Level"];

  return (
    <>
      <Sidebar />
      <div className="page-content">
        <Topbar />
        <div className="page-content-wrapper border">
          <div className="row mb-3">
            <div className="col-12 d-sm-flex justify-content-between align-items-center">
              <h1 className="h3 mb-2 mb-sm-0">Courses</h1>
              <Link to="/buat-pelatihan" className="btn btn-sm btn-primary mb-0">
                Create a Course
              </Link>
            </div>
          </div>
          <CourseBoxes />
          <TableProperties option={option}>
            <TableCourses />
          </TableProperties>
        </div>
      </div>
    </>
  );
};

export default AllCourses;
