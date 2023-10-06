import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useEffectOnce from "../../../helpers/useEffectOnce";
import { getAdmin } from "../../../features/user/userSlice";
import { Link } from "react-router-dom";

const TableAdmin = () => {
  const [adminList, setAdminList] = useState([]);
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.users);

  useEffectOnce(() => {
    dispatch(getAdmin());
  });

  useEffect(() => {
    if (Object.values(data).length !== 0) setAdminList(data.admin_list.data);
  }, [data]);

  return (
    <>
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
            {adminList.length === 0 ? (
              <>
                <tr>
                  <td colSpan={4}>
                    <div className="alert alert-info text-center">...</div>
                  </td>
                </tr>
              </>
            ) : (
              <>
                {adminList.map((data, i) => (
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
                      <Link
                        to="/informasi-admin"
                        className="btn btn-primary-soft me-1 mb-0"
                      >
                        Lihat Detail
                      </Link>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableAdmin;
