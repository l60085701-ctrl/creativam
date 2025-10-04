import React from "react";

function Device() {
  return (
    <section className="device py-5">
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-md-5">
            <img src="img/project.PNG" alt="" className="img-fluid" />
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-6 mb-4">
                <h5>Device Mockups</h5>
                <p>Ready to use HTML/CSS device mockups, no Photoshop required!</p>
              </div>
              <div className="col-md-6 mb-4">
                <h5>Flexible Use</h5>
                <p>Put an image, video, animation, or anything else in the screen!</p>
              </div>
              <div className="col-md-6 mb-4">
                <h5>Free to Use</h5>
                <p>As always, this theme is free to download and use for any purpose!</p>
              </div>
              <div className="col-md-6 mb-4">
                <h5>Open Source</h5>
                <p>Since this theme is MIT licensed, you can use it commercially!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Device;
