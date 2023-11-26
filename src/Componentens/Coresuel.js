import React from 'react'
// import './Coresuel.css';
const Coresuel = () => {
  return (
 <>
 
 <div id="carouselExampleControls" className="carousel slide col-12 col-lg-10 imgSlider container my-3" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="images/taks1f.jpg" className="d-block w-100" alt="ig1"/>
    </div>
    <div className="carousel-item">
      <img src="images/taks2f.jpg" className="d-block w-100" alt="ig2"/>
    </div>
    <div className="carousel-item">
      <img src="images/taks3.jpg" className="d-block w-100" alt="ig3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
 
 
 
 </>
  )
}

export default Coresuel
