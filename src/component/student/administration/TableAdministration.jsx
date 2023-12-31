import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useEffectOnce from "../../../helpers/useEffectOnce";
import {
  getAdministrations,
  updateAdministrations,
} from "../../../features/administration/administrationSlice";
import { toast } from "react-toastify";

const TableAdministration = () => {
  const [administrationList, setAdministrationList] = useState([]);
  const [filterBy, setFilterBy] = useState("all");

  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.administration);

  const isLoading = useSelector((state) => state.administration.isLoading);
  const isSuccess = useSelector((state) => state.administration.isSuccess);

  useEffectOnce(() => {
    dispatch(getAdministrations());
  });

  const handleChangeApproved = (userId) => {
    dispatch(updateAdministrations({ id: userId }));
    toast.success("Success approve administration");
  };

  useEffect(() => {
    if (Object.values(data).length !== 0) setAdministrationList(data.admin_list.data);
  }, [data]);

  const filter = ["all", "approved", "pending", "rejected"];

  const handleFilter = (e) => {
    setFilterBy(e.target.value);
    if (e.target.value === "all") {
      setAdministrationList(data.admin_list.data);
    } else if (e.target.value === "approved") {
      const filteredData = data.admin_list.data.filter((data) => data.is_approved === true);
      setAdministrationList(filteredData);
    } else if (e.target.value === "pending") {
      const filteredData = data.admin_list.data.filter((data) => data.is_approved === null);
      setAdministrationList(filteredData);
    } else {
      const filteredData = data.admin_list.data.filter(
        (data) => data.is_approved === e.target.value,
      );
      setAdministrationList(filteredData);
    }
  };

  return (
    <>
      {isLoading && (
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {isSuccess && !isLoading && (
        <div className="card-body">
          <div className="d-flex gap-2 align-items-center mb-3">
            {filter.map((data, index) => (
              <button
                key={index}
                className={`btn btn-sm ${filterBy === data ? "btn-primary" : "btn-primary-soft"}`}
                onClick={(e) => handleFilter(e)}
                value={data}
              >
                {data.charAt(0).toUpperCase() + data.slice(1)}
              </button>
            ))}
          </div>
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

              <tbody>
                {administrationList.map((data, index) => (
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
                        {data?.is_approved === false ? (
                          <button
                            className="btn btn-sm btn-success-soft me-1 mb-1 mb-md-0"
                            onClick={() => handleChangeApproved(data.id)}
                          >
                            Approve Now
                          </button>
                        ) : (
                          <button className="btn btn-sm btn-success me-1 mb-1 mb-md-0 disabled">
                            Approved
                          </button>
                        )}
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

export default TableAdministration;
