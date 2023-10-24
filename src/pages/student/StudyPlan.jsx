import React from "react";
import Sidebar from "../../component/default/Sidebar";
import Topbar from "../../component/default/Topbar";
import TableStudyPlan from "../../component/student/studyPlan/TableStudyPlan";
import TableProperties from "../../component/default/TableProperties";

const StudyPlan = () => {
  const option = ["ID Plan", "Total Plan"];

  return (
    <>
      <Sidebar />
      <div className="page-content">
        <Topbar />
        <div className="page-content-wrapper border">
          <div className="row mb-3">
            <div className="col-12">
              <h1 className="h3 mb-2 mb-sm-0">Study Plan</h1>
            </div>
          </div>
          <TableProperties option={option}>
            <TableStudyPlan />
          </TableProperties>
        </div>
      </div>
    </>
  );
};

export default StudyPlan;
