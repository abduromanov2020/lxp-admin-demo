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

  // const isLoading = useSelector((state) => state.assignment.isLoading);
  // const isSuccess = useSelector((state) => state.assignment.isSuccess);

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
    dispatch(getAssignmentById({ materialenrolled_id: id }));
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateGrading(gradingData));
    navigate("/student/grading");
    toast.success("Grading has been updated");
  };

  useEffect(() => {
    if (Object.values(data).length !== 0) setAssignment(data.assignment);
    console.log(assignment);
  }, [data]);

  return (
    <>
      <Sidebar />
      <div className="page-content">
        <Topbar />
        <div className="page-content-wrapper border">
          <div className="row justify-content-center">
            <div className="col-4">
              <h1 className="h3 mb-2 mb-sm-0">Input Grading</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="status">Status</label>
                  <select
                    className="form-control"
                    id="status"
                    name="status"
                    value={gradingData.status}
                    onChange={handleChange}
                  >
                    <option value="PASSED">PASSED</option>
                    <option value="GRADING">GRADING</option>
                    <option value="ONGOING">ONGOING</option>
                  </select>
                </div>
                <div className="form-group pb-3">
                  <label htmlFor="score">Score</label>
                  <input
                    type="text"
                    className="form-control"
                    id="score"
                    name="score"
                    value={gradingData.score}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GradingInput;
