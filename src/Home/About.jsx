import React from "react";

function About() {
  return (
    <section className="about text-center text-white py-5" style={{background: "linear-gradient(90deg, #5f2c82, #49a09d)"}}>
      <div className="container">
        <h4>"An intuitive solution to a common problem that we all face, wrapped up in a single app!"</h4>
        <img src="img/tnw-logo.svg" alt="" className="img-fluid mt-3" />
      </div>
    </section>
  );
}

export default About;
