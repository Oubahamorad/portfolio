import React, { useEffect, useState } from 'react';
import "./corsor.scss";
import { motion, useInView } from "framer-motion";

const Cursor = () => {
const[position,setPosition ] =useState({x:0,y:0})

useEffect(()=>{
    const mouseMove =(e) =>{
        setPosition({x:e.clientx,y:e.clientY})
    }

    window.addEventListener("mousemove" ,mouseMove)

    return ()=>{
        window.removeEventListener('mousemove',mouseMove)
    }
},[]
)

    return (
        <motion.div className='cursor' animate={{ x:position.x+10 ,y:position.y+10 }}>
            
        </motion.div>
    );
};

export default Cursor;