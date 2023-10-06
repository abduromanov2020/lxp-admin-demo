import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useEffectOnce from "../../../helpers/useEffectOnce";
import { approveStudyPlan, getStudyPlan } from "../../../features/studyplan/studyplanSlice";

const TableStudyPlan = () => {
  const [planList, setPlanList] = useState([]);
  const [status, setStatus] = useState([]);

  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.studyPlan);

  const isLoading = useSelector((state) => state.studyPlan.isLoading);
  const isSuccess = useSelector((state) => state.studyPlan.isSuccess);

  const checkStatus = () => {
    planList?.map((plan) => {
      plan?.Subjects?.filter((subject) => {
        if (subject?.StudentSubject?.status === "PENDING") {
          setStatus((status) => [...status, plan.id]);
        }
      });
    });
  };

  useEffectOnce(() => {
    dispatch(getStudyPlan());
  });

  const hanldeClick = (student_id) => {
    dispatch(approveStudyPlan({ student_id: student_id }));
    setStatus([]);
  };

  useEffect(() => {
    if (Object.values(data).length !== 0) setPlanList(data.plan_list.data);
    checkStatus();
  }, [data, checkStatus]);

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
        <div className="table-responsive border-0">
          <table className="table table-dark-gray align-middle p-4 mb-0 table-hover text-center">
            <thead className="">
              <tr>
                <th scope="col" className="border-0 rounded-start">
                  ID Plan
                </th>
                <th scope="col" className="border-0">
                  Status
                </th>
                <th scope="col" className="border-0">
                  Total Plan
                </th>
                <th scope="col" className="border-0 rounded-end">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {planList.length === 0 ? (
                <>
                  <tr>
                    <td colSpan={4}>
                      <div className="alert alert-info text-center">...</div>
                    </td>
                  </tr>
                </>
              ) : (
                <>
                  {planList.map((data, i) => (
                    <>
                      <tr key={i}>
                        <td>
                          <div className="d-flex align-items-center position-relative">
                            <div className="avatar avatar-md">
                              <img
                                src={"/assets/images/avatar/empty-display-picture.png"}
                                className="rounded-circle"
                                alt={data?.id}
                              />
                            </div>
                            <div className="mb-0 ms-3 text-start">
                              <h6 className="mb-0">
                                <a href="#" className="stretched-link">
                                  {data?.id}
                                </a>
                              </h6>
                              <span className="text-body small">
                                <i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />
                                student
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>{data?.Subjects[0]?.StudentSubject?.status}</td>
                        <td>{data?.Subjects?.length}</td>
                        <td>
                          <div className="d-flex gap-2 align-items-center justify-content-center">
                            {Object.values(status).includes(data?.id) ? (
                              <>
                                <button
                                  key={i}
                                  className="btn btn-sm btn-success"
                                  onClick={() => hanldeClick(data?.id)}
                                >
                                  Accept
                                </button>
                                <button className="btn btn-sm btn-danger">Reject</button>
                              </>
                            ) : (
                              <>
                                <button key={i} className="btn btn-sm btn-success disabled">
                                  Accepted
                                </button>
                              </>
                            )}
                            {data?.Subjects?.length > 0 && (
                              <button
                                className="btn btn-sm btn-secondary"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapsedetail${i}`}
                                type="button"
                                aria-expanded="false"
                                aria-controls="collapsedetail"
                              >
                                Detail
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                      <tr className="collapse mt-3 text-start" id={`collapsedetail${i}`}>
                        <td>
                          {data?.Subjects?.map((data, i) => (
                            <li className="list-group-item" key={i}>
                              {data?.name}
                            </li>
                          ))}
                        </td>
                        <td>
                          {data?.Subjects?.map((data, i) => (
                            <li className="list-group-item text-center" key={i}>
                              {data?.StudentSubject?.status}
                            </li>
                          ))}
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                    </>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default TableStudyPlan;
