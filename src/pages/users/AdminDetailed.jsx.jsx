import React from "react";

import Sidebar from "../../component/default/Sidebar";
import Topbar from "../../component/default/Topbar";
import AdminInformation from "../../component/users/admin/AdminInformation";

const AdminDetailed = () => {
  return (
    <>
      <Sidebar />
      <div className="page-content">
        <Topbar />
        <div className="page-content-wrapper border">
          <div className="row">
            <div className="col-12 mb-3">
              <h1 className="h3 mb-2 mb-sm-0">Informasi Detail</h1>
            </div>
          </div>
          <div className="row g-4">
            <AdminInformation />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDetailed;
