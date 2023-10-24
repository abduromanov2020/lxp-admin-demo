import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useEffectOnce from "../../helpers/useEffectOnce";
import { getCourses } from "../../features/courses/courseSlice";

const TableCourses = () => {
  const [courseList, setCourseList] = useState([]);

  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.courses);

  const isLoading = useSelector((state) => state.courses.isLoading);
  const isSuccess = useSelector((state) => state.courses.isSuccess);

  useEffectOnce(() => {
    dispatch(getCourses());
  });

  useEffect(() => {
    if (data) {
      setCourseList(data.data);
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
            <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
              <thead>
                <tr>
                  <th scope="col" className="border-0 rounded-start">
                    Course Name
                  </th>
                  <th scope="col" className="border-0">
                    Added Date
                  </th>
                  <th scope="col" className="border-0">
                    Level
                  </th>
                  <th scope="col" className="border-0 rounded-end">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {courseList?.map((course) => (
                  <tr key={course.id}>
                    <td>
                      <div className="d-flex align-items-center position-relative">
                        <h6 className="table-responsive-title mb-0 ms-2">
                          <a href="#" className="stretched-link">
                            {course.name}
                          </a>
                        </h6>
                      </div>
                    </td>

                    <td>28 Oct 2021</td>
                    <td>
                      {" "}
                      {course.level.toUpperCase() == "BASIC" ? (
                        <span className="badge text-bg-primary">{course.level.toUpperCase()}</span>
                      ) : course.level.toUpperCase() === "INTERMEDIATE" ? (
                        <span className="badge text-bg-warning">{course.level.toUpperCase()}</span>
                      ) : course.level.toUpperCase() === "ADVANCED" ? (
                        <span className="badge text-bg-danger">{course.level.toUpperCase()}</span>
                      ) : (
                        <span className="badge text-bg-secondary">
                          {course.level.toUpperCase()}
                        </span>
                      )}
                    </td>
                    <td width={170}>
                      <a href="#" className="btn btn-sm btn-success-soft me-1 mb-1 mb-md-0">
                        Approve
                      </a>
                      <button className="btn btn-sm btn-secondary-soft mb-0">Reject</button>
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

export default TableCourses;
