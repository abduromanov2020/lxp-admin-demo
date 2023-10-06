import React from "react";

const AdminInformation = () => {
  return (
    <>
      <div className="col-xxl-7">
        <div className="card bg-transparent border rounded-3 h-100">
          {/* Card header */}
          <div className="card-header bg-light border-bottom">
            <h5 className="card-header-title mb-0">Informasi Admin</h5>
          </div>
          {/* Card body START */}
          <div className="card-body">
            {/* Profile picture */}
            <div className="avatar avatar-xl mb-3">
              <img
                className="avatar-img rounded-circle border border-white border-3 shadow"
                src="assets/images/avatar/07.jpg"
                alt=""
              />
            </div>
            {/* Information START */}
            <div className="row">
              {/* Information item */}
              <div className="col-md-6">
                <ul className="list-group list-group-borderless">
                  <li className="list-group-item">
                    <span>Title:</span>
                    <span className="h6 mb-0">Mr.</span>
                  </li>
                  <li className="list-group-item">
                    <span>Full Name:</span>
                    <span className="h6 mb-0">Louis Ferguson</span>
                  </li>
                  <li className="list-group-item">
                    <span>User Name:</span>
                    <span className="h6 mb-0">Lousifer</span>
                  </li>
                  <li className="list-group-item">
                    <span>Mobile Number:</span>
                    <span className="h6 mb-0">+123 456 789 10</span>
                  </li>
                </ul>
              </div>
              {/* Information item */}
              <div className="col-md-6">
                <ul className="list-group list-group-borderless">
                  <li className="list-group-item">
                    <span>Email ID:</span>
                    <span className="h6 mb-0">example@gmail.com</span>
                  </li>
                  <li className="list-group-item">
                    <span>Location:</span>
                    <span className="h6 mb-0">California</span>
                  </li>
                  <li className="list-group-item">
                    <span>Joining Date:</span>
                    <span className="h6 mb-0">29 Aug 2019</span>
                  </li>
                </ul>
              </div>
              {/* Information item */}
              <div className="col-12">
                <ul className="list-group list-group-borderless">
                  <li className="list-group-item">
                    <span>Education:</span>
                    <span className="h6 mb-0">
                      Bachelor in Computer Graphics,
                    </span>
                    <span className="h6 mb-0">
                      Masters in Computer Graphics
                    </span>
                  </li>
                </ul>
              </div>
              {/* Information item */}
              <div className="col-12">
                <ul className="list-group list-group-borderless">
                  <li className="list-group-item d-flex">
                    <span>Description:</span>
                    <p className="h6 mb-0">
                      As it so contrasted oh estimating instrument. Size like
                      body someone had. Are conduct viewing boy minutes warrant
                      the expense Tolerably behavior may admit daughters
                      offending her ask own. Praise effect wishes change way and
                      any wanted. Lively use looked latter regard had. Do he it
                      part more last in
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* Information END */}
          </div>
          {/* Card body END */}
        </div>
      </div>
    </>
  );
};

export default AdminInformation;
