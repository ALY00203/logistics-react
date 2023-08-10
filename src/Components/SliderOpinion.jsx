import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderOpinion = ({ reviews }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
    <h1 className="d-flex text-center justify-content-center w-100  pt-3 mt-4 fw-bold">Our Clients Review</h1>
    <Slider {...settings} className="mb-5">
      {reviews.map((review, index) => (
        <div key={index} className="client-review-slide w-100 d-flex flex-column align-self-center">
          <div className="text-center">
            <div className="d-flex justify-content-center w-100 ">
          <img className="d-flex align-self-center w-5 rounded-pill" src={review.clientImage} alt="" />
            </div>
          <h3 className="fw-bold">{review.clientName}</h3>
          <div className="d-flex w-100 justify-content-center">
          <p className="w-75  fs-5 fw-bold">{review.comment}</p>
          </div>
          </div>
        </div>
      ))}
    </Slider>
    </>
  );
};

export default SliderOpinion;
