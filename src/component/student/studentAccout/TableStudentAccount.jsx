import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useEffectOnce from "../../../helpers/useEffectOnce";
import { getStudentCandidates } from "../../../features/student/studentSlice";
import EmptyTable from "../../default/EmptyTable";

const TableStudentAccount = () => {
  const [studentCandidate, setStudentCandidate] = useState([]);
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.student.data);

  const isLoading = useSelector((state) => state.student.isLoading);
  const isSuccess = useSelector((state) => state.student.isSuccess);

  useEffectOnce(() => {
    dispatch(getStudentCandidates());
  });

  useEffect(() => {
    if (data) {
      setStudentCandidate(data);
    }
  }, [data]);

  return (
    <>
      {isLoading && (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {isSuccess && !isLoading && (
        <div className="card-body">
          <div className="table-responsive border-0 rounded-3">
            <table className="table table-dark-gray align-middle p-4 mb-0 table-hover text-center">
              <thead>
                <tr>
                  <th scope="col" className="border-0 align-middle rounded-start">
                    Nama Karyawan
                  </th>
                  <th scope="col" className="border-0 align-middle">
                    Nomer Induk Karyawan
                  </th>
                  <th scope="col" className="border-0 align-middle">
                    Tanggal Pengajuan
                  </th>
                  <th scope="col" className="border-0 align-middle">
                    Divisi
                  </th>
                  <th scope="col" className="border-0 align-middle">
                    Email
                  </th>
                  <th scope="col" className="border-0 align-middle">
                    Nama Perusahaan
                  </th>
                  <th scope="col" className="border-0 align-middle rounded-end">
                    Action
                  </th>
                </tr>
              </thead>

              {studentCandidate.length === 0 && <EmptyTable />}
              <tbody>
                {studentCandidate.map((data, index) => (
                  <tr key={index}>
                    <td className="flex justify-center items-center">
                      <div className="d-flex align-items-center mb-3">
                        <div className="avatar avatar-xs flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            src={"/assets/images/avatar/empty-display-picture.png"}
                            alt="avatar"
                          />
                        </div>

                        <div className="ms-2">
                          <h6 className="mb-0 fw-light text-start">{data?.User?.full_name}</h6>
                        </div>
                      </div>
                    </td>
                    <td className="flex justify-center items-center">{data?.nsn}</td>
                    <td className="flex justify-center items-center">{data?.nsn}</td>
                    <td className="flex justify-center items-center">{data?.department}</td>
                    <td className="flex justify-center w-[100px] items-center">
                      {data?.User?.email}
                    </td>
                    <td className="flex justify-center items-center">{data?.company_name}</td>
                    <td className="flex justify-center items-center">
                      {" "}
                      <div className="d-flex align-items-center">
                        <button className="btn btn-sm btn-primary-soft me-1 mb-1 mb-md-0">
                          Create Account
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default TableStudentAccount;
