import React, { useEffect } from 'react'
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import imageOne from '../images/Capture1.PNG'
import imageTwo from '../images/Capture2.PNG'
import imageThree from '../images/Capture3.PNG'
import imageFour from '../images/Capture4.PNG'
function WhatWeDo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className='d-flex flex-column w-100 justify-content-center align-items-center p-5'>
  <h4 className='fw-bold w-100 text-center'>What We Do</h4>
  <p className='display-4 fw-bold text-center'>High level of <br /> provisioned services</p>
  <div className='d-flex gap-5 p-3'>
<div className='details p-4 w-25' data-aos="flip-left" data-aos-duration="2500">
<img className='w-50 ' src={imageOne} alt="imgOne" />
<p className='fw-bold text-start w-100  fs-4'>Supply Chain Planning</p>
<Button as={Link} to={'/NewsAndMedia'}  className=' bg-transparent text-black p-1 button-52 fw-bold'>Details</Button>
</div>
<div className='details p-4 w-25' data-aos="flip-left" data-aos-duration="2500">
<img className='w-50 ' src={imageTwo} alt="imgOne" />
<p className='fw-bold text-start w-100  fs-4'>Cargo Transportation</p>
<Button as={Link} to={'/NewsAndMedia'}  className=' bg-transparent text-black p-1 button-52 fw-bold'>Details</Button>
</div>
<div className='details p-4 w-25' data-aos="flip-left" data-aos-duration="2900">
<img className='w-50 ' src={imageThree} alt="imgOne" />
<p className='fw-bold text-start w-100  fs-4'>Warehousing & Storage</p>
<Button as={Link} to={'/NewsAndMedia'}  className=' bg-transparent text-black p-1 button-52 fw-bold'>Details</Button>
</div>
<div className='details p-4 w-25' data-aos="flip-left" data-aos-duration="3500">
<img className='w-50 ' src={imageFour} alt="imgOne" />
<p className='fw-bold text-start w-100  fs-4'>Retail & Transit Packaging</p>
<Button as={Link} to={'/NewsAndMedia'}  className=' bg-transparent text-black p-1 button-52 fw-bold'>Details</Button>
</div>
</div>
    </div>
    <div className='fixed-bg p-4 w-100 d-flex flex-column justify-content-end text-center text-white fw-bold'>
        <small className='fs-4'>WE OFFER YOU</small>
    <p className='display-3 fw-bold fst-italic'> Full range of transportation services</p>
    </div>
<div className='d-flex container w-100 h-50 p-5'>
<div className='w-75 d-flex justify-content-center align-items-center h-100  p-3 mt-3'>
    <p className='display-5 fw-bold Logistics'>Logistics that is dedicated to your company</p>
</div>
<div className='cardParent' data-aos="zoom-in-up" data-aos-duration="3000">
<div className="cardFly" >
  <div className="card-body container d-flex flex-column justify-content-center">
    <h4 className="card-title p-4 fw-bold">Track Your Shipment</h4>
    <div className="line-1  m-2 d-flex align-self-lg-center"></div>
    <input placeholder='SH.NU'  className='w-75 m-2 rounded-3 d-flex align-self-lg-center mb-5' type="text" />
    <button  className="button-24 p-2 d-flex align-self-center">Track</button>
  </div>
</div>
</div>
</div>
    </>
  )
}

export default WhatWeDo