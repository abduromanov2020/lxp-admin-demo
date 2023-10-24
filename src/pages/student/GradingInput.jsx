import React, { useEffect, useState } from "react";
import { updateGrading } from "../../features/grading/gradingSlice";
import Sidebar from "../../component/default/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import Topbar from "../../component/default/Topbar";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useEffectOnce from "../../helpers/useEffectOnce";
import { getAssignmentById } from "../../features/assignment/assignmentSlice";

const GradingInput = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.assignment);

  const isLoading = useSelector((state) => state.assignment.isLoading);
  const isSuccess = useSelector((state) => state.assignment.isSuccess);

  const [assignment, setAssignment] = useState({});

  const [gradingData, setGradingData] = useState({
    materialenrolled_id: id,
    status: "",
    score: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGradingData({ ...gradingData, [name]: value });
  };

  useEffectOnce(() => {
    dispatch(getAssignmentById(id));
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateGrading(gradingData));
    navigate("/student/grading");
    toast.success("Grading has been updated");
  };

  useEffect(() => {
    if (data) {
      setAssignment(data);
    }
  }, [data]);

  return (
    <>
      {isLoading && (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border text-primary m-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {isSuccess && !isLoading && (
        <>
          <Sidebar />
          <div className="page-content">
            <Topbar />
            <section>
              <div className="container">
                <div className="card bg-transparent border rounded-3 mb-5">
                  <div className="card-body">
                    <h4 className="h3 mb-2 mb-sm-0">Grading</h4>
                    <hr />
                    <div className="row">
                      <div className="col-12 col-sm-5">
                        {assignment.activity_detail ? (
                          <>
                            <embed
                              src={assignment.activity_detail.file_assignment_link}
                              alt="..."
                              className="img-fluid rounded-3 d-block mx-auto mb-3"
                            />
                            <p className="text-muted text-end mt-2">
                              {assignment.activity_detail.date_submit}
                            </p>
                          </>
                        ) : (
                          <>
                            <div className="text-center">
                              <i className="bi bi-file-earmark-x fs-1 text-muted"></i>
                              <p className="text-muted">No file submitted</p>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="col-12 col-sm-7">
                        <form onSubmit={handleSubmit}>
                          <div className="row g-4">
                            <div className="form-group col-12">
                              <label htmlFor="status">Status</label>
                              <select
                                className="form-control"
                                id="status"
                                name="status"
                                defaultValue={assignment.status}
                                onChange={handleChange}
                              >
                                <option value="PASSED">PASSED</option>
                                <option value="GRADING">GRADING</option>
                                <option value="ONGOING">ONGOING</option>
                              </select>
                            </div>
                            <div className="form-group col-12">
                              <label htmlFor="score">Score</label>
                              <input
                                type="text"
                                className="form-control"
                                id="score"
                                name="score"
                                defaultValue={assignment.score}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="col-12">
                              <button type="submit" className="btn btn-primary-soft">
                                Submit
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default GradingInput;
