import React from 'react';
import "./Navbar.scss";
import facebook from '../../../../assets/img/f1.png'
import instagram from '../../../../assets/img/i1.jpeg';
import Github from '../../../../assets/img/github.png';
import Linkdin from '../../../../assets/img/linkdine.png';
import { motion } from "framer-motion";
import Sidebar from './sidbar/Sidebar';




const Navbar = () => {
    return (
        <div className='navbar'>
            <Sidebar />
         <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{ duration:0.5 }}>Oubaha Dev</motion.span>
            <div className="social">
                <a href="#"><img src={facebook} alt="" /></a>
                <a href="#"><img src={instagram} alt="" /></a>
                <a href="#"><img src={Linkdin} alt="" /></a>
                <a href="#"><img src={Github} alt="" /></a>


            </div>
            </div>   
        </div>
    );
};

export default Navbar;