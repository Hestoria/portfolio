import React,{ useRef, useEffect, useState } from 'react'
import { technologys } from '../constans/constans'
import { BiCodeBlock } from 'react-icons/bi'
import { RiToolsLine } from 'react-icons/ri'
import { BsTerminal } from 'react-icons/bs'
import useElementOnScreen from '../hooks/useElementOnScreen'
import { animated, useSpring } from 'react-spring'

const Technologys = () => {
    const [windowsWidth, setwindowsWidth] = useState(window.innerWidth)
    const Resize = () => {
      setwindowsWidth(window.innerWidth)
    }
    useEffect(()=>{
      window.addEventListener('resize',Resize)
    },[])
    const targetRef = useRef(false);
    const isVisable = useElementOnScreen({
        root:null,
        rootMargin: '0px',
        threshold: 0.3
    },targetRef);

    const [styles, api] = useSpring(()=>({
        from: { opacity: 0 , y: -300 },
        to: { opacity:1 , y : 0 },
        config: { duration: 500 },
    }))
    useEffect(() => {
        if(windowsWidth <= 768){
            api.start({opacity: isVisable? 1 : 0, x: isVisable? 0: 300 ,y:0});
        }else{
            api.start({opacity: isVisable? 1 : 0, y: isVisable? 0: 300 ,x:0});
        }
    },[isVisable,api,windowsWidth])

    return (
        <div className="content h-auto md:h-full" id="Technologys" ref={targetRef}>
            <div className="container md-auto h-full grid grid-cols-3 gap-4 items-center ">
                <p className="col-span-3 text-center items-bottom text-xl md:text-2xl lg:text-3xl text-purple-600 dark:text-purple-50 font-bold py-10 border-b-2 border-purple-600 dark:border-purple-50 uppercase">
                    technologies
                </p>
                {
                    technologys.map( (tech) =>{
                        return(
                            <animated.div className="tech-container" key={tech.title} style={styles}>
                                <div className="tech-img-container">
                                    {tech.icon === 1 ? <BiCodeBlock className="tech-img"/>: tech.icon === 2 ? <RiToolsLine className="tech-img"/> : <BsTerminal className="tech-img"/>}
                                </div>
                                <div className="tech-title">{tech.title}</div>
                                <div className="tech-desc">{tech.desc}</div>
                                {tech.data.map( (data)=>{
                                    return(
                                        <div className="tech-item-container" key={data}>
                                            <p className="tech-item-content">{data}</p>
                                        </div>
                                    )
                                })}
                            </animated.div>  
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Technologys
