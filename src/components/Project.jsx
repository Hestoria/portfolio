import React,{ useRef, useEffect } from 'react'
import { projects } from '../constans/constans'
import { animated, useSpring } from 'react-spring'
import useElementOnScreen from '../hooks/useElementOnScreen'

const Project = () => {
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
        api.start({opacity: isVisable? 1 : 0, scale: isVisable? 1: 0 });
    },[isVisable,api])

    return (
        <div className="content" id="Project" ref={targetRef}>
            <div className="container md-auto h-full">
                <p className="text-center justify-center text-xl md:text-2xl py-10 lg:text-3xl text-purple-600 dark:text-purple-50 font-bold border-b-2 border-purple-600 dark:border-purple-50 uppercase">Project</p>
                <div className="grid grid-cols-3 gap-4 items-center">
                    {
                        projects.map( (project)=>{
                            return(
                                <animated.div style={styles} class="p-4 col-span-3 md:col-span-1 hover:cursor-pointer" key={project.title} onClick={()=> project.url === '/'? '':window.open(project.url, "_blank")}>
                                    <div class="dark:bg-white p-6 rounded-lg bg-purple-600">
                                        <img class="h-56 w-56 rounded mx-auto mb-6" src={project.img} alt="cover img"/>
                                        <h3 class="tracking-widest text-indigo-300 dark:text-indigo-500 text-xs font-medium title-font ">{project.title}</h3>
                                        <h2 class="text-lg text-white dark:text-gray-900 font-medium title-font mb-4 ">{project.desc}</h2>
                                        <p class="leading-relaxed text-base">
                                            {project.tools.map( (tool)=>{
                                                return(
                                                    <span className="px-4 inline-block rounded-full bg-white text-purple-600 dark:bg-purple-600 dark:text-white " key={tool}>{tool}</span>
                                                )
                                            } )}
                                        </p>
                                    </div>
                                </animated.div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Project
