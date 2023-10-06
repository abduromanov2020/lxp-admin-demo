import React from "react";
import Sidebar from "../component/default/Sidebar";
import Topbar from "../component/default/Topbar";
import CounterBoxes from "../component/dashboard/CounterBoxes";
import TopEmployee from "../component/dashboard/TopEmployee";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="page-content">
        <Topbar />
        <div className="page-content-wrapper border">
          <div className="row">
            <div className="col-12 mb-3">
              <h1 className="h3 mb-2 mb-sm-0">Dashboard</h1>
            </div>
          </div>
          <CounterBoxes />
          <div className="row g-4">
            <TopEmployee />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;