import React, { useState } from 'react'
import { BrowserRouter as Router,Link, Route, Switch } from 'react-router-dom';
import '../styling/navbar.css'
import Home from './Home'

const Navbar = () => {
    const [navLinkOpen, setNavLinkOpen] = useState(false)
    const handleMenu = () => {
        setNavLinkOpen(!navLinkOpen)
    }

    return (
        <>
            <nav>
            <Router>
                <div className="navbar-container"> 
                    <Link className="link" exact to='/CandyMeusem'>Candy Meusem</Link>
                    <Link className="link" exact to='/Foodoholic'>FoodoHolic</Link>
                    <Link className="link" exact to='/MagnetMomos'>Magnet Momos</Link>
                    <Link className="link" exact to='/ritikslink'>RiFresh </Link>
                </div>
                <Home/>
                </Router>
            </nav>
        </>
    )
}
export default Navbar;