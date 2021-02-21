import React from 'react'
import momo1 from './MomoImages/momos1.jpeg'
import chaap1 from './MomoImages/chaap1.png'
import chaap2 from './MomoImages/chaap2.png'
import momo3 from './MomoImages/tandoorimomos.jpg'
import heart from './MomoImages/heart-png-15.png'
import '../styling/foodcourtStyles/magnetMomos.css'
const MagnetMomos = () => {
    return <>
        <div className="head"><h2>I</h2>
            <img className="heartmomo" src={heart} alt="" />
            <div className="brand">

                <h2>Magnet Momos
        </h2>
                <div className="tag">attracting your taste buds.....</div>
            </div>

        </div>
        <div className="intro">
            <h3>Choose from our diverse range of mouth-watering heavenly momos</h3>
        </div>
        <div className="card1">
            <img className="cardimg" src={momo1} />
            <div className="cardtext">Lipsmacking juicy dumplings filled with assorted spices and flaming herbs with a subtle blend of veggies, we have got your type!
            {/* <div className="info">
                <li>Hare Bhare Khayal</li>
                <li>Brown Saute Toast</li>
                <li>Classic Steam King</li>
            </div> */}
            </div>


        </div>

        <div className="card2">
            <img className="cardimg" src={momo3} />
            <div className="cardtext">Apetizing momos with outer crispy shell and inner soft stuffed healthy veggies direct from the tandoor, along with finger-licking tangy, peppery hot sauce! Your tongue has got our back
            {/* <div className="info">
                <li>Hare Bhare Khayal</li>
                <li>Brown Saute Toast</li>
                <li>Classic Steam King</li>
            </div> */}
            </div>


        </div>
      <div className="card3">
          <div className="part1">
              <div className="image">
                  <img src={chaap1} alt=""/>
              </div>
          </div>
          <div className="part1">
              <div className="image">
                  <img src={chaap2} alt=""/>
              </div>
          </div>
      </div>
    </>
}

export default MagnetMomos;