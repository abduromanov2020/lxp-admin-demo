import PropTypes from "prop-types";

export default function TableProperties({ children, option }) {
  return (
    <div className="card bg-transparent border">
      <div className="card-header bg-light border-bottom">
        <div className="row g-3 align-items-center justify-content-between">
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
                <i className="fas fa-search fs-6 "></i>
              </button>
            </form>
          </div>

          <div className="col-md-3">
            <select className="form-select bg-body pe-auto" aria-label="Default select example">
              <option defaultValue>Sort By</option>
              {option.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

TableProperties.propTypes = {
  children: PropTypes.node,
  option: PropTypes.array,
};
