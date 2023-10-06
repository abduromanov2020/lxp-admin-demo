import React from "react";
import Topbar from "../../component/default/Topbar";
import Sidebar from "../../component/default/Sidebar";
import ListEmployee from "../../component/users/employee/ListEmployee";

const Employees = () => {
  return (
    <>
      <Sidebar />
      <div className="page-content">
        <Topbar />
        <div className="page-content-wrapper border">
          <div className="row">
            <div className="col-12">
              <h1 className="h3 mb-2 mb-sm-0">Daftar Karyawan</h1>
            </div>
          </div>
          <ListEmployee />
        </div>
      </div>
    </>
  );
};

export default Employees;
