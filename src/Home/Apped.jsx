import React from "react";

function Apped() {
  return (
    <section className="app text-center py-5" style={{background: "linear-gradient(90deg, #5f2c82, #49a09d)"}}>
      <div className="container">
        <h3>Get the app now!</h3>
        <div>
          <img src="img/app-store-badge.svg" alt="" className="me-2" />
          <img src="img/google-play-badge.svg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Apped;
