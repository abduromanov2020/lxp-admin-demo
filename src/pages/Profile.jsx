import React from "react";
import Sidebar from "../component/default/Sidebar";
import Topbar from "../component/default/Topbar";
import FormProfile from "../component/profile/FormProfile";

const Profile = () => {
  return (
    <>
      <Sidebar />
      <div className="page-content">
        <Topbar />
        <div className="page-content-wrapper border">
          <FormProfile />
        </div>
      </div>
    </>
  );
};

export default Profile;
