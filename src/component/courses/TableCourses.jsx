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
    if (Object.values(data).length !== 0) setCourseList(data.data);
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
          {/* Course table START */}
          <div className="table-responsive border-0 rounded-3">
            {/* Table START */}
            <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
              {/* Table head */}
              <thead>
                <tr>
                  <th scope="col" className="border-0 rounded-start">
                    Course Name
                  </th>
                  <th scope="col" className="border-0">
                    Instructor
                  </th>
                  <th scope="col" className="border-0">
                    Added Date
                  </th>
                  <th scope="col" className="border-0">
                    Type
                  </th>
                  <th scope="col" className="border-0">
                    Price
                  </th>
                  <th scope="col" className="border-0">
                    Status
                  </th>
                  <th scope="col" className="border-0 rounded-end">
                    Action
                  </th>
                </tr>
              </thead>
              {/* Table body START */}
              <tbody>
                {courseList?.map((course) => (
                  <tr key={course.id}>
                    <td>
                      <div className="d-flex align-items-center position-relative">
                        <div className="w-60px">
                          <img src={course.thumbnail_link} className="rounded" alt="" />
                        </div>
                        <h6 className="table-responsive-title mb-0 ms-2">
                          <a href="#" className="stretched-link">
                            {course.name}
                          </a>
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center mb-3">
                        <div className="avatar avatar-xs flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/09.jpg"
                            alt="avatar"
                          />
                        </div>
                        <div className="ms-2">
                          <h6 className="mb-0 fw-light">Lori Stevens</h6>
                        </div>
                      </div>
                    </td>
                    <td>28 Oct 2021</td>
                    <td>
                      {" "}
                      <span className="badge text-bg-primary">{course.level}</span>{" "}
                    </td>
                    <td>$350</td>
                    <td>
                      {" "}
                      <span className="badge bg-warning bg-opacity-15 text-warning">
                        Pending
                      </span>{" "}
                    </td>
                    <td>
                      <a href="#" className="btn btn-sm btn-success-soft me-1 mb-1 mb-md-0">
                        Approve
                      </a>
                      <button className="btn btn-sm btn-secondary-soft mb-0">Reject</button>
                    </td>
                  </tr>
                ))}
                {/* Table row */}
              </tbody>
              {/* Table body END */}
            </table>
            {/* Table END */}
          </div>
          {/* Course table END */}
        </div>
      )}
    </>
  );
};

export default TableCourses;
