import React from "react";
import Sidebar from "../../component/default/Sidebar";
import Topbar from "../../component/default/Topbar";
import TableStudentAccount from "../../component/student/studentAccout/TableStudentAccount";

const StudentAccount = () => {
  return (
    <>
      <Sidebar />
      <div className="page-content">
        <Topbar />
        <div className="page-content-wrapper border">
          <div className="row mb-3">
            <div className="col-12">
              <h1 className="h3 mb-2 mb-sm-0">Student Account</h1>
            </div>
          </div>
          <TableStudentAccount />
        </div>
      </div>
    </>
  );
};

export default StudentAccount;
