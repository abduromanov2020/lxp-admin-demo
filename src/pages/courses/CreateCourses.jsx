import React, { useState } from "react";
import Sidebar from "../../component/default/Sidebar";
import Topbar from "../../component/default/Topbar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCourse } from "../../features/courses/courseSlice";
import { toast } from "react-toastify";

const CreateCourses = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    level: "",
    degree: "",
    credit: "",
    number_of_sessions: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreateCourse = (e) => {
    e.preventDefault();

    setData(Object.fromEntries(new FormData(e.target)));

    console.log(data);

    dispatch(createCourse({ ...data, lecturer: ["677743df-08db-4acd-8c51-dfec018301f8"] }));

    navigate("/daftar-pelatihan");

    toast.success("Course has been created");
  };

  return (
    <>
      <Sidebar />
      <div className="page-content">
        <Topbar />
        <section>
          <div className="container">
            <div className="card bg-transparent border rounded-3 mb-5">
              <div className="card-body">
                <form action="" onSubmit={handleCreateCourse}>
                  <h4>Create Course</h4>
                  <hr />
                  <div className="row g-4">
                    <div className="col-12">
                      <label className="form-label">Course title</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter course title"
                        name="name"
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                        value={data.name}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Short description</label>
                      <textarea
                        className="form-control"
                        rows={2}
                        placeholder="Enter short description"
                        defaultValue={""}
                        name="description"
                        onChange={(e) => setData({ ...data, description: e.target.value })}
                        value={data.description}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Course level</label>
                      <select
                        className="form-select js-choice border-1 z-index-9 bg-transparent"
                        aria-label=".form-select-sm"
                        data-search-enabled="false"
                        data-remove-item-button="true"
                        name="level"
                        onChange={(e) => setData({ ...data, level: e.target.value })}
                        value={data.level}
                      >
                        <option value="">Select course level</option>
                        <option>Basic</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>All level</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Degree</label>
                      <select
                        className="form-select js-choice border-1 z-index-9 bg-transparent"
                        aria-label=".form-select-sm"
                        data-search-enabled="false"
                        data-remove-item-button="true"
                        name="degree"
                        onChange={(e) => setData({ ...data, degree: e.target.value })}
                        value={data.degree}
                      >
                        <option value="">Select degree</option>
                        <option>S1</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Credit</label>
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Enter credit course"
                        name="credit"
                        onChange={(e) => setData({ ...data, credit: e.target.value })}
                        value={data.credit}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Number of Sessions</label>
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Enter number of session"
                        name="number_of_sessions"
                        onChange={(e) => setData({ ...data, number_of_sessions: e.target.value })}
                        value={data.number_of_sessions}
                      />
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                      <button className="btn btn-primary next-btn mb-0" type="submit">
                        Create Course
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CreateCourses;
