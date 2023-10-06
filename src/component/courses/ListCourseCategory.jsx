import React from "react";
import TableCourseCategory from "./TableCourseCategory";

const ListCourseCategory = () => {
  return (
    <div className="card bg-transparent border">
      {/* Card header START */}
      <div className="card-header bg-light border-bottom">
        {/* Search and select START */}
        <div className="row g-3 align-items-center justify-content-between">
          {/* Search bar */}
          <div className="col-md-8">
            <form className="rounded position-relative">
              <input
                className="form-control bg-body"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
                type="submit"
              >
                <i className="fas fa-search fs-6 " />
              </button>
            </form>
          </div>
          {/* Select option */}
          <div className="col-md-3">
            {/* Short by filter */}
            <form>
              <select
                className="form-select js-choice border-0 z-index-9"
                aria-label=".form-select-sm"
              >
                <option value="">Sort by</option>
                <option>Newest</option>
                <option>Oldest</option>
                <option>Accepted</option>
                <option>Rejected</option>
              </select>
            </form>
          </div>
        </div>
        {/* Search and select END */}
      </div>
      {/* Card header END */}
      {/* Card body START */}
      <TableCourseCategory />
      {/* Card footer END */}
    </div>
  );
};

export default ListCourseCategory;
