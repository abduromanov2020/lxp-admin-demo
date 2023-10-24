import React from "react";
import Sidebar from "../../component/default/Sidebar";
import Topbar from "../../component/default/Topbar";
import TableGrading from "../../component/student/grading/TableGrading";
import TableProperties from "../../component/default/TableProperties";

const Grading = () => {
  const option = ["No", "Nama", "Semester", "Email"];

  return (
    <>
      <Sidebar />
      <div className="page-content">
        <Topbar />
        <div className="page-content-wrapper border">
          <div className="row mb-3">
            <div className="col-12">
              <h1 className="h3 mb-2 mb-sm-0">Grading</h1>
            </div>
          </div>
          <TableProperties option={option}>
            <TableGrading />
          </TableProperties>
        </div>
      </div>
    </>
  );
};

export default Grading;
