import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">StartBootstrap</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Download</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact us</a>
            </li>
            <li className="nav-item">
              <button className="btn btn-dark ms-2">Send Feedback</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
