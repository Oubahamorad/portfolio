import React, { useRef } from 'react';
import "./portfolio.scss";
import { motion ,useScroll ,useSpring, useTransform} from "framer-motion";



const items =[
    {
        id:1,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam assumenda sit ratione unde? Quo amet qui commodi. Veniam voluptatum magni voluptas eaque sint, voluptatibus repellendus explicabo? Iusto, dolore natus!"
    },
    {
        id:2,
        title:"Next.js Commerce",
        img:"https://images.pexels.com/photos/1181371/pexels-photo-1181371.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam assumenda sit ratione unde? Quo amet qui commodi. Veniam voluptatum magni voluptas eaque sint, voluptatibus repellendus explicabo? Iusto, dolore natus!"
    },
    {
        id:3,
        title:"Html-css Commerce",
        img:"https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam assumenda sit ratione unde? Quo amet qui commodi. Veniam voluptatum magni voluptas eaque sint, voluptatibus repellendus explicabo? Iusto, dolore natus!"
    },
    {
        id:4,
        title:"Laravel Commerce",
        img:"https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam assumenda sit ratione unde? Quo amet qui commodi. Veniam voluptatum magni voluptas eaque sint, voluptatibus repellendus explicabo? Iusto, dolore natus!"
    },
];

const Single=({item})=>{


    const ref =useRef();

    const {scrollYProgress} = useScroll({target:ref ,
    // offset:["start start" ,"end start"]
    })

    const y = useTransform(scrollYProgress,[0,1] ,[-300,300])


    return(
    <section>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer"  ref={ref}>
            <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer"  style={{ y }}>
                <h2 >{item.title}</h2>
                <p>{item.desc}</p> 
                <button>See Demo</button>
            </motion.div>
            </div>
        </div>
    </section>
 )
}

const Portfolio = () => {

    const ref=useRef()

    const {scrollYProgress} = useScroll({target:ref ,
        offset:["start start" ,"end start"]
        })

const scaleX  = useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
})

    return (
        <div className='portfolio' ref={ref} >
            <div className="progress" >
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item=>(
                <Single item={item} key={item.id}/>
            ))}
        </div>
    );
};

export default Portfolio;