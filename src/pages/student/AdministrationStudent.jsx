import React from "react";
import Sidebar from "../../component/default/Sidebar";
import Topbar from "../../component/default/Topbar";
import TableAdministration from "../../component/student/administration/TableAdministration";
import TableProperties from "../../component/default/TableProperties";

const AdministrationStudent = () => {
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
              <h1 className="h3 mb-2 mb-sm-0">Administrasi Student</h1>
            </div>
          </div>
          <TableProperties option={option}>
            <TableAdministration />
          </TableProperties>
        </div>
      </div>
    </>
  );
};

export default AdministrationStudent;
