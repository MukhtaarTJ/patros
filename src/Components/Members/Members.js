import React from "react";

const Members = () => {
  return (
    <div>
      {/* <!---Nav bar--> */}
      <nav className="navbar navbar-expand-md navbar-light">
        <button
          className="navbar-toggler ml-auto mb-2 bg-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <div className="container-fluid">
            <div className="row">
              {/* <!---Sidebar--> */}
              <div className=" col-xl-2 col-lg-3 col-md-4 sidebar fixed-top">
                <a
                  href="#"
                  className="navbar-brand text-white d-block
                mx-auto text-center py-3 mb-4">
                  <i className="fas fa-cannabis text-light fa-3x"></i>
                </a>
                <div className="bottom-border pb-3">
                  <img
                    src="images\john.jpg"
                    width="50"
                    className="rounded-circle mr-3"
                  />
                  <a href="#" className="text-white ">
                    John Doe
                  </a>
                </div>
                <ul className="navbar-nav flex-column mt-4">
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link text-white p-3 mb-2
                    current">
                      <i className="fas fa-home text-light fa-lg mr-3"></i>
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link text-white p-3 mb-2
                    sidebar-link">
                      <i className="fas fa-user text-light fa-lg mr-3"></i>
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link text-white p-3 mb-2
                    sidebar-link">
                      <i className="fas fa-envelope text-light fa-lg mr-3"></i>
                      inbox
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link text-white p-3 mb-2
                    sidebar-link">
                      <i className="fas fa-shopping-cart text-light fa-lg mr-3"></i>
                      Sales
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link text-white p-3 mb-2
                    sidebar-link">
                      <i className="fas fa-chart-line text-light fa-lg mr-3"></i>
                      Analytics
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link text-white p-3 mb-2
                    sidebar-link">
                      <i className="fas fa-chart-bar text-light fa-lg mr-3"></i>
                      charts
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link text-white p-3 mb-2
                    sidebar-link">
                      <i className="fas fa-table text-light fa-lg mr-3"></i>
                      Tables
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link text-white p-3 mb-2
                    sidebar-link">
                      <i className="fas fa-wrench text-light fa-lg mr-3"></i>
                      Settings
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link text-white p-3 mb-2
                    sidebar-link">
                      <i className="fas fa-file-alt text-light fa-lg mr-3"></i>
                      documentation
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!---end of side bar--> */}
              {/* <!---Top Nav--> */}
              <div className="col-xl-10 col-lg-9 col-md-8 ml-auto top-bar fixed-top py-2 top-nav">
                <div className="row align-item-center">
                  <div className="col-md-4">
                    <h4 className="text-light text-uppercase mb-0">Dashboard</h4>
                  </div>
                  <div className="col-md-5">
                    <form>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control search-input"
                          placeholder="search"
                        />
                        <button
                          type="button"
                          className="btn btn-white search-button">
                          <i className="fas fa-search text-dark"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-3">
                    <ul className="navbar-nav">
                      <li className="nav-item icon-parent">
                        <a href="#" className="nav-link icon-bullet">
                          <i className="fas fa-comments text-light fa-lg"></i>
                        </a>
                      </li>
                      <li className="nav-item icon-parent">
                        <a href="#" className="nav-link icon-bullet">
                          <i className="fas fa-bell text-light fa-lg"></i>
                        </a>
                      </li>
                      <li className="nav-item ml-md-auto">
                        <a
                          href="#"
                          className="nav-link"
                          data-toggle="modal"
                          data-target="#sign-out">
                          <i className="fas fa-sign-out-alt text-danger fa-lg"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!---End of Top Nav--> */}
            </div>
          </div>
        </div>
      </nav>
      {/* <!----End of Navbar--> */}
      {/* <!---Modal--> */}
      <div className="modal" id="sign-out">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Signout</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">press the button</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal">
                Leave{" "}
              </button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">
                Cancel{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!---End of Modal--> */}
      {/* <!---Cards--> */}
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
              <div className="row pt-md-5 mt-md-3 mb-5">
                <div className="col-xl-3 col-sm-6 p-2">
                  <div className="card card-common">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <i className="fas fa-shopping-cart fa-3x text-info"></i>
                        <div className="text-right text-dark">
                          <h5>Sales</h5>
                          <h3>$10,000.00</h3>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer text-dark">
                      <i className="fas fa-spinner fa-pulse text-info mr-3"></i>
                      <span>Updating</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 p-2">
                  <div className="card card-common">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <i className="fas fa-money-bill-alt fa-3x text-success"></i>
                        <div className="text-right text-dark">
                          <h5>Expenses</h5>
                          <h3>$6000.00</h3>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer text-dark">
                      <i className="fas fa-spinner fa-pulse text-success mr-3"></i>
                      <span>Updating</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 p-2">
                  <div className="card card-common">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <i className="fas fa-users fa-3x text-warning"></i>
                        <div className="text-right text-dark">
                          <h5>Users</h5>
                          <h3>3,000.00</h3>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer text-dark">
                      <i className="fas fa-spinner fa-pulse text-warning mr-3"></i>
                      <span>Updating</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 p-2">
                  <div className="card card-common">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <i className="fas fa-chart-line fa-3x text-danger"></i>
                        <div className="text-right text-dark">
                          <h5>Visitors</h5>
                          <h3>2,000.00</h3>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer text-dark">
                      <i className="fas fa-spinner fa-pulse text-danger mr-3"></i>
                      <span>Updating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!---End of Cards--> */}
      {/* <!--table--> */}
      <section>
        <div className="container-fluid">
          <div className="row mb-5">
            <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
              <div className="row align-items-center">
                <div className="col-xl-6 col-12 mb-4 mb-xl-0">
                  <h3 className="text-dark text-center mb-3">Staff Salary</h3>
                  <table className="table table-striped bg-light text-center">
                    <thead>
                      <tr className="text-dark">
                        <th>#</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Date</th>
                        <th>Contact</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <td>Jade</td>
                        <td>$6000</td>
                        <td>10-09-2019</td>
                        <td>
                          <button type="button" className="btn btn-danger btn-sm">
                            Message
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th>2</th>
                        <td>Jane</td>
                        <td>$5000</td>
                        <td>10-09-2019</td>
                        <td>
                          <button type="button" className="btn btn-danger btn-sm">
                            Message
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th>3</th>
                        <td>Elon</td>
                        <td>$7000</td>
                        <td>10-09-2019</td>
                        <td>
                          <button type="button" className="btn btn-danger btn-sm">
                            Message
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th>4</th>
                        <td>Dave</td>
                        <td>$9000</td>
                        <td>10-09-2019</td>
                        <td>
                          <button type="button" className="btn btn-danger btn-sm">
                            Message
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <!---Pagination--> */}
                  <nav className="color">
                    <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <a href="#" className="page-link py-2 px-3">
                          <span>&laquo;</span>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a href="#" className="page-link py-2 px-3">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link py-2 px-3">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link py-2 px-3">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link py-2 px-3">
                          <span>&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>

                  {/* <!---End of Pagination--> */}
                </div>
                <div className="col-xl-6 col-12">
                  <h3 className="text-dark text-center mb-3">Recent Payments</h3>
                  <table className="table table-color  table-hover">
                    <thead>
                      <tr className="text-dark">
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <td>Mike</td>
                        <td>$6000</td>
                        <td>10-09-2019</td>
                        <td>
                          <span className="badge badge-success w-75 py-2">
                            Approved
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th>2</th>
                        <td>Mark</td>
                        <td>$6000</td>
                        <td>10-09-2019</td>
                        <td>
                          <span className="badge badge-success w-75 py-2">
                            Approved
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th>3</th>
                        <td>David</td>
                        <td>$6000</td>
                        <td>10-09-2019</td>
                        <td>
                          <span className="badge badge-danger w-75 py-2">
                            Pending
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th>4</th>
                        <td>William</td>
                        <td>$6000</td>
                        <td>10-09-2019</td>
                        <td>
                          <span className="badge badge-danger w-75 py-2">
                            Pending
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th>5</th>
                        <td>Joseph</td>
                        <td>$6000</td>
                        <td>10-09-2019</td>
                        <td>
                          <span className="badge badge-success w-75 py-2">
                            Approved
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <nav>
                    <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <a href="#" className="page-link py-2 px-3">
                          <span>Previous</span>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a href="#" className="page-link py-2 px-3">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link py-2 px-3">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link py-2 px-3">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link py-2 px-3">
                          <span>Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--End of table--> */}
      {/* <!---Quick post--> */}
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
              <div className="row">
                <div className="col-xl-6 col-12">
                  <h4 className="text-dark p-3 mb-3">Tasks.</h4>
                  <div className="container-fluid bg-1">
                    <div className="row py-3 mb-4 task-border align-items-center">
                      <div className="col-1">
                        <input type="checkbox" checked />
                      </div>
                      <div className="col-sm-9 col-8">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </div>
                      <div className="col-1">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          title="Edit"
                          data-placement="top">
                          <i className="fas fa-edit fa-lg text-success mr-2"></i>
                        </a>
                      </div>
                      <div className="col-1">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          title="Delete"
                          data-placement="top">
                          <i className="fas fa-trash-alt fa-lg text-danger"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="container-fluid bg-2">
                    <div className="row py-3 mb-4 task-border align-items-center">
                      <div className="col-1">
                        <input type="checkbox" checked />
                      </div>
                      <div className="col-sm-9 col-8">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </div>
                      <div className="col-1">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          title="Edit"
                          data-placement="top">
                          <i className="fas fa-edit fa-lg text-success mr-2"></i>
                        </a>
                      </div>
                      <div className="col-1">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          title="Delete"
                          data-placement="top">
                          <i className="fas fa-trash-alt fa-lg text-danger"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="container-fluid bg-3">
                    <div className="row py-3 mb-4 task-border align-items-center">
                      <div className="col-1">
                        <input type="checkbox" checked />
                      </div>
                      <div className="col-sm-9 col-8">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </div>
                      <div className="col-1">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          title="Edit"
                          data-placement="top">
                          <i className="fas fa-edit fa-lg text-success mr-2"></i>
                        </a>
                      </div>
                      <div className="col-1">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          title="Delete"
                          data-placement="top">
                          <i className="fas fa-trash-alt fa-lg text-danger"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="container-fluid bg-4">
                    <div className="row py-3 mb-4 task-border align-items-center">
                      <div className="col-1">
                        <input type="checkbox" checked />
                      </div>
                      <div className="col-sm-9 col-8">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </div>
                      <div className="col-1">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          title="Edit"
                          data-placement="top">
                          <i className="fas fa-edit fa-lg text-success mr-2"></i>
                        </a>
                      </div>
                      <div className="col-1">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          title="Delete"
                          data-placement="top">
                          <i className="fas fa-trash-alt fa-lg text-danger"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!---End of Task List--> */}
                {/* <!---Quick Post--->                       */}
                <div className="col-xl-6 mt-5">
                  <div className="card rounded">
                    <div className="card-body">
                      <h5 className="text-dark text-center mb-4">
                        Quick Status Post
                      </h5>
                      <ul className="list-inline text-center py-3">
                        <li className="list-inline-item">
                          <a href="#">
                            {" "}
                            <i className="fas fa-pencil-alt text-success"></i>
                            <span className="h6 text-dark">Status</span>
                          </a>
                        </li>
                        <li className="list-inline-item mr-4">
                          <a href="#">
                            {" "}
                            <i className="fas fa-camera text-info"></i>
                            <span className="h6 text-dark">Photo</span>
                          </a>
                        </li>
                        <li className="list-inline-item mr-4">
                          <a href="#">
                            {" "}
                            <i className="fas fa-map-marker text-danger"></i>
                            <span className="h6 text-dark">Check In</span>
                          </a>
                        </li>
                      </ul>
                      <form>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control py-2 mb-3"
                            placeholder="Your Status"
                          />
                          <button
                            type="button"
                            className="btn btn-block text-uppercase 
                              font-weight-bold text-light bg-button py-2 mb-5">
                            Submit Post
                          </button>
                        </div>
                      </form>
                      <div className="row align-items-center mb-5">
                        <div className="col-6">
                          <div className="card bg-light">
                            <i
                              className="far fa-calendar-alt fa-8x
                                  text-info d-block m-auto py-3"></i>
                            <div className="card-body">
                              <p
                                className="card-text text-center font-weight-bold 
                           text-uppercase">
                                Thu,Oct 10
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="card bg-light">
                            <i
                              className="far fa-clock fa-8x
                                        text-danger d-block m-auto py-3"></i>
                            <div className="card-body">
                              <p
                                className="card-text text-center font-weight-bold 
                                 text-uppercase">
                                2:15PM
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!---End of Quick post--> */}
      {/* <!----Footer--> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-10 col-lg-9 col-md-8 ml-auto mt-3 bd-bottom">
            <div className="row border-top pt-3">
              <div className="col-lg-6 text-center">
                <ul className="list-inline">
                  <li className="list-inline-item mr-2">
                    <a href="#" className="text-success">
                      Company Name
                    </a>
                  </li>
                  <li className="list-inline-item mr-2">
                    <a href="#" className="text-success">
                      About
                    </a>
                  </li>
                  <li className="list-inline-item mr-2">
                    <a href="#" className="text-success">
                      Support
                    </a>
                  </li>
                  <li className="list-inline-item mr-2">
                    <a href="#" className="text-success">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 text-center text-success">
                <p>&copy; 2019 Copyright</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!---End of Footer--> */}

      {/* <!-- Optional JavaScript --> */}
      {/* <!-- jQuery first, then Popper.js, then Bootstrap JS --> */}
    </div>
  );
};

export default Members;
