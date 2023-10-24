import React from "react";
import Sidebar from "../../component/default/Sidebar";
import Topbar from "../../component/default/Topbar";
import TableStudentAccount from "../../component/student/studentAccout/TableStudentAccount";
import TableProperties from "../../component/default/TableProperties";

const StudentAccount = () => {
  const option = [
    "Nama Karyawan",
    "Nomer Induk Karyawan",
    "Tanggal Pengajuan",
    "Divisi",
    "Email",
    "Nama Perusahaan",
  ];

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
          <TableProperties option={option}>
            <TableStudentAccount />
          </TableProperties>
        </div>
      </div>
    </>
  );
};

export default StudentAccount;
