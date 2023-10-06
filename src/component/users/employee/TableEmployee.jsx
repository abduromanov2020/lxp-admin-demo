import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useEffectOnce from "../../../helpers/useEffectOnce";
import { getEmployee } from "../../../features/user/userSlice";

const TableEmployee = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.users);

  useEffectOnce(() => {
    dispatch(getEmployee());
  });

  useEffect(() => {
    if (Object.values(data).length !== 0)
      setEmployeeList(data.employee_list.data);
  }, [data]);
  return (
    <>
      <div className="tab-pane fade" id="nav-html-tab-1">
        <div className="table-responsive border-0">
          <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
            <thead>
              <tr>
                <th scope="col" className="border-0 rounded-start">
                  Nama Admin
                </th>
                <th scope="col" className="border-0">
                  Email
                </th>
                <th scope="col" className="border-0">
                  Tanggal
                </th>
                <th scope="col" className="border-0 rounded-end">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {employeeList.length === 0 ? (
                <>
                  <tr>
                    <td colSpan={4}>
                      <div className="alert alert-info text-center">...</div>
                    </td>
                  </tr>
                </>
              ) : (
                <>
                  {employeeList.map((data, i) => (
                    <tr key={i}>
                      <td>
                        <div className="d-flex align-items-center position-relative">
                          <div className="avatar avatar-md">
                            <img
                              src={
                                data?.User?.display_picture_link
                                  ? data?.User?.display_picture_link
                                  : "/assets/images/avatar/empty-display-picture.png"
                              }
                              className="rounded-circle"
                              alt={data?.User?.full_name}
                            />
                          </div>
                          <div className="mb-0 ms-3">
                            <h6 className="mb-0">
                              <a href="#" className="stretched-link">
                                {data?.name}
                              </a>
                            </h6>
                            <span className="text-body small">
                              <i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />
                              admin
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>{data?.email}</td>
                      <td>29 Agt 2021</td>
                      <td>
                        <a
                          href="#"
                          className="btn btn-light btn-round me-1 mb-1 mb-md-0"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Lihat"
                        >
                          <i className="bi bi-eye" />
                        </a>
                        <a
                          href="#"
                          className="btn btn-light btn-round me-1 mb-1 mb-md-0"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Pesan"
                        >
                          <i className="bi bi-envelope" />
                        </a>
                        <button
                          className="btn btn-light btn-round mb-0"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Blokir"
                        >
                          <i className="fas fa-ban" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableEmployee;
