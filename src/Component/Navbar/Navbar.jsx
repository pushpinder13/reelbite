import React, { useState, useContext,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import bg1 from '/pp1.png';
import CartItem from '../../AddtoCart/CartItem';
import { listitem } from "../../Data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { MovieContext } from '../../Context/MovieContext';
const Navbar = ()=>{
    
    const navigate = useNavigate();
    const handleCart = ()=>{
        navigate('/addcart')
    }

    const {item,itema } = useContext(MovieContext)
    return(
        <>
        <div className="Navwrapper">
            <div className="Navcontainer">
                <div className="Navlogodiv">
                    <div className="Navlogoimg">
                        <img src={bg1} />
                    </div>
                    <div className="Navlogotext">
                    <span>ReelBite:</span>
                    <span>Cinematic Cravings</span>
                    </div>      
                </div>
                <div className="Navheaderdiv">
                    <ul>
                        <li><Link to='/' style={{ textDecoration: "None" }}>Home</Link></li>
                        <li><Link to='/food' style={{ textDecoration: "None" }}>Food</Link></li>
                        <li><Link to='/about' style={{ textDecoration: "None" }}>About</Link></li>
                        <li><Link to='/contact' style={{ textDecoration: "None" }}>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="NavSearchdiv">
                    <div className="NavSearchcont">
                        <input type="text" placeholder="Search..... "/>
                        <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                    </div>
                    <div className='cart1'>
                        <Link to='/addcart'><span style={{color:"white"}}  ><FontAwesomeIcon icon={faCartShopping} /></span></Link>
                        
                    </div>
                    <div className='basket'>{item+itema}</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;