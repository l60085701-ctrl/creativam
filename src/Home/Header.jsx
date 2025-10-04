import React from "react";

function Header() {
  return (
    <header className="header py-5 mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>Showcase your app beautifully.</h2>
            <p>Launch your mobile app landing page faster with this free, open source theme from Start Bootstrap!</p>
            <div>
              <img src="img/app-store-badge.svg" alt="" className="me-2" />
              <img src="img/google-play-badge.svg" alt="" />
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img src="img/project.PNG" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
