import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import MagnetMomos from '../foodCourt/magnetMomos'
import CandyMeusem from '../foodCourt/candyMeusem'
import Rifresh from '../foodCourt/Rifresh'
import FoodoHolic from '../foodCourt/foodaHolic'
import { IKImage, IKContext, IKUpload } from 'imagekitio-react'
import RiFresh from '../foodCourt/Rifresh';

const Home = () => {


    return <>

   
        <div className="main">
           
          
            <Route path="/ritikslink" component={RiFresh}/>
            <Route path="/MagnetMomos" component ={MagnetMomos}/>
            <Route path="/CandyMeusem" component={CandyMeusem}/>
            <Route path ="/foodoholic" component = {FoodoHolic}/>
           
        </div>
   
    </>
}

export default Home;