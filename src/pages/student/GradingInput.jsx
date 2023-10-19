import React, { useState } from "react";
import { updateGrading } from "../../features/grading/gradingSlice";
import Sidebar from "../../component/default/Sidebar";
import { useDispatch } from "react-redux";
import Topbar from "../../component/default/Topbar";
import { useNavigate, useParams } from "react-router-dom";

const GradingInput = () => {
  const { id, status } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [gradingData, setGradingData] = useState({
    materialenrolled_id: id,
    status: status,
    score: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGradingData({ ...gradingData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateGrading(gradingData));
    navigate("/student/grading");
  };

  return (
    <>
      <Sidebar />
      <div className="page-content">
        <Topbar />
        <div className="page-content-wrapper border">
          <div className="row">
            <div className="col-12">
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
                <div className="form-group">
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
