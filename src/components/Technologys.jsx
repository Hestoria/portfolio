import React from 'react'
import { technologys } from '../constans/constans'
import { BiCodeBlock } from 'react-icons/bi'
import { RiToolsLine } from 'react-icons/ri'
import { BsTerminal } from 'react-icons/bs'
const Technologys = () => {
    
    return (
        <div className="content h-auto md:h-full" id="Technologys">
            <div className="container md-auto h-full grid grid-cols-3 gap-4 items-center ">
                <p className="col-span-3 text-center items-bottom text-xl md:text-2xl lg:text-3xl text-purple-600 dark:text-purple-50 font-bold pt-10 border-b-2 border-purple-600 dark:border-purple-50">
                    TECHNOLOGYS
                </p>
                {
                    technologys.map( (tech) =>{
                        return(
                            <div className="tech-container"key={tech.title}>
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
                            </div>  
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Technologys
