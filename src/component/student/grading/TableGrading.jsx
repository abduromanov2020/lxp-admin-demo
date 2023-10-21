/* eslint-disable indent */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGrading } from "../../../features/grading/gradingSlice";
import useEffectOnce from "../../../helpers/useEffectOnce";
import GradingBar from "../../../pages/student/GradingBar";
import { Link } from "react-router-dom";

const TableGrading = () => {
  const [gradingList, setGradingList] = useState([]);
  const [isExpand, setIsExpand] = useState();

  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.grading);

  const isLoading = useSelector((state) => state.grading.isLoading);
  const isSuccess = useSelector((state) => state.grading.isSuccess);

  const handleExpand = (index) => {
    setIsExpand(index);
  };

  useEffectOnce(() => {
    dispatch(getGrading());
  });

  useEffect(() => {
    if (Object.values(data).length !== 0) setGradingList(data.admin_list.data);
  }, [data]);

  return (
    <div className="card-body">
      {isLoading && (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {isSuccess && !isLoading && (
        <div className="table-responsive border-0 rounded-3">
          <table className="table table-dark-gray align-middle p-4 mb-0 table-hover text-center">
            <thead>
              <tr>
                <th scope="col" className="border-0 align-middle rounded-start">
                  No
                </th>
                <th scope="col" className="border-0 align-middle">
                  Nama
                </th>
                <th scope="col" className="border-0 align-middle">
                  Semester
                </th>
                <th scope="col" className="border-0 align-middle">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {gradingList.length === 0 ? (
                <>
                  <tr>
                    <td colSpan={4}>
                      <div className="alert alert-info text-center">...</div>
                    </td>
                  </tr>
                </>
              ) : (
                <>
                  {gradingList.map((data, index) => (
                    <>
                      <tr onClick={() => handleExpand(index)} role="button" key={index}>
                        <td>
                          <div className="d-flex justify-content-center items-content-center">
                            {index + 1}
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center items-content-center">
                            {data.User.full_name}
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center items-content-center">
                            {data.semester}
                          </div>
                        </td>

                        <td>
                          <div className="d-flex justify-content-center items-content-center">
                            {data.User.email}
                          </div>
                        </td>
                      </tr>

                      <tr className="bg-dark">
                        {index === isExpand && (
                          <td colSpan={4}>
                            <div className="container">
                              <div className="row">
                                {data.MaterialEnrolleds.map((materialEnrolled, index) => (
                                  <Link
                                    to={`/student/grading/${materialEnrolled.id}`}
                                    className="col-3 p-2"
                                    key={index}
                                  >
                                    <div className="card" style={{ height: "100px" }}>
                                      <div className="card-body">
                                        <div className="row">
                                          <div className="col-6 ">
                                            <div
                                              style={{ width: "100%", height: "100%" }}
                                              className="d-flex flex-column  justify-content-center align-items-center"
                                            >
                                              {materialEnrolled.score !== null ? (
                                                <GradingBar score={materialEnrolled.score} />
                                              ) : (
                                                <div
                                                  className="d-flex flex-column  justify-content-center align-items-center"
                                                  style={{
                                                    height: "70px",
                                                    width: "70px",
                                                  }}
                                                >
                                                  <span className="badge bg-danger">
                                                    Belum Dinilai
                                                  </span>
                                                </div>
                                              )}
                                            </div>
                                          </div>
                                          <div className="col-6  d-flex gap-2 flex-column">
                                            <span
                                              className={`badge bg-opacity-15 ${
                                                materialEnrolled.status === "PASSED"
                                                  ? "text-danger bg-danger"
                                                  : materialEnrolled.status === "ONGOING"
                                                  ? "bg-warning  text-warning"
                                                  : "bg-success text-success"
                                              }`}
                                            >
                                              {materialEnrolled.status}
                                            </span>
                                            <span className="badge text-bg-primary">
                                              {materialEnrolled.type}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </td>
                        )}
                      </tr>
                    </>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TableGrading;
