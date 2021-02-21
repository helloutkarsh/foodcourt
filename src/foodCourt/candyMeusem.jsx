import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../styling/foodcourtStyles/CandyMeusem.css'
import { IKImage, IKContext, IKUpload } from 'imagekitio-react'
import hand2 from './Candyimages/hand2.png'
import gumball from './Candyimages/gumball.png'
import lolli from './Candyimages/lolli_icon.png'
import milk from './Candyimages/milk.png'
import sprinkles from './Candyimages/sprinkles.png'



const CandyMeusem= ()=>{
    return <>
   <nav id="mainNavbar" className="navbar navbar-dark  navbar-expand-md py-0 fixed-top">
         

<a href="#" className="navbar-brand">CANDY</a>
<button className="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navLinks">
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link">HOME</a>
    </li>
    <li className="nav-item">
      <a className="nav-link">ABOUT</a>
    </li>
    <li className="nav-item">
      <a className="nav-link">PRICING</a>
    </li>
  </ul>
</div>




</nav>



<section className="container-fluid px-0">
    <div className="row align-items-center">

      <div className="col-lg-6">
        <div id="headinggrp" className="text-white text-center d-none d-lg-block mt-5">
          <h1 className="">MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
          <h1 className="">MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
          <h1 className="">MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
          <h1 className="">MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
          <h1 className="">MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
          <h1 className="">MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
          <h1 className="">MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
        </div>
      </div>
      <div className="col-lg-6">
        <img className="img-fluid" src={hand2} alt=""/>
          
       
      </div>
    </div>
  </section>
  <section className="container-fluid px-0 ">
    <div className="row align-items-center content">
      <div className="col-md-6 order-2 order-md-1">
        <img src={milk} alt=" " class="img-fluid"/>
      </div>
      <div className="col-md-6 text-center order-1 order-md-2">
        <div className="row justify-content-center">

          <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
            <h2>
              MUSEUM OF CANDY
            </h2>


            <img src={lolli} alt="" className="d-none d-lg-inline"/>
            <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis cumque quidem facere hic,
              nesciunt at laborum dolor, suscipit, dolorem voluptatem quasi laboriosam excepturi optio. Excepturi amet
              laudantium aliquam nobis nesciunt quae vel, quidem deserunt optio fugit, consequatur maxime. Quasi
              obcaecati hic tempora distinctio, molestiae enim maiores voluptatibus tempore dolore odit?</p>

          </div>

        </div>
      </div>





    </div>

    <div className="row align-items-center content">


      <div className="col-md-6 text-center">
        <div className="row justify-content-center">

          <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
            <h2>
              MUSEUM OF CANDY
            </h2>


            <img src={lolli} alt="" className="d-none d-lg-inline"/>
            <p class="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis cumque quidem facere hic,
              nesciunt at laborum dolor, suscipit, dolorem voluptatem quasi laboriosam excepturi optio. Excepturi amet
              laudantium aliquam nobis nesciunt quae vel, quidem deserunt optio fugit, consequatur maxime. Quasi
              obcaecati hic tempora distinctio, molestiae enim maiores voluptatibus tempore dolore odit?</p>

          </div>

        </div>
      </div>
      <div className="col-md-6">
        <img src={gumball} alt=" " className="img-fluid"/>

      </div>





    </div>
    <div className="row align-items-center content">
      <div className="col-md-6 order-2 order-md-1">
        <img src={sprinkles} alt=" " className="img-fluid"/>
      </div>
      <div className="col-md-6 text-center order-1 order-md-2">
        <div className="row justify-content-center">

          <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
            <h2>
              MUSEUM OF CANDY
            </h2>


            <img src={lolli} alt="" className="d-none d-lg-inline"/>
            <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis cumque quidem facere hic,
              nesciunt at laborum dolor, suscipit, dolorem voluptatem quasi laboriosam excepturi optio. Excepturi amet
              laudantium aliquam nobis nesciunt quae vel, quidem deserunt optio fugit, consequatur maxime. Quasi
              obcaecati hic tempora distinctio, molestiae enim maiores voluptatibus tempore dolore odit?</p>

          </div>

        </div>
      </div>


    </div>








  </section>

    </>
}

export default CandyMeusem;