import React from "react";
import Sidebar from "../../component/default/Sidebar";
import Topbar from "../../component/default/Topbar";

const CreateCourses = () => {
  return (
    <>
      <Sidebar />
      <div className="page-content">
        <Topbar />
        <section>
          <div className="container">
            <div className="row"></div>
            <div className="card bg-transparent border rounded-3 mb-5">
              <div className="card-body">
                <form action="">
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
                      >
                        <option value="">Select course level</option>
                        <option>All level</option>
                        <option>Basic</option>
                        <option>Intermediate</option>
                        <option>Advance</option>
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
                      >
                        <option value="">Select degree</option>
                        <option>S1</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Credit</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter credit course"
                        name="credit"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Number of Sessions</label>
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Enter number of session"
                        name="number_of_session"
                      />
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                      <button className="btn btn-primary next-btn mb-0">Create Course</button>
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
