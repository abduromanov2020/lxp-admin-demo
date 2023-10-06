import React from "react";
import Topbar from "../../component/default/Topbar";
import Sidebar from "../../component/default/Sidebar";
import ListAdmin from "../../component/users/admin/ListAdmin";

const Admins = () => {
  return (
    <>
      <Sidebar />
      <div className="page-content">
        <Topbar />
        <div className="page-content-wrapper border">
          <div className="row">
            <div className="col-12">
              <h1 className="h3 mb-2 mb-sm-0">Daftar Admin</h1>
            </div>
          </div>
          <ListAdmin />
        </div>
      </div>
    </>
  );
};

export default Admins;
