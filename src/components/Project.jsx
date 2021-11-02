import React from 'react'
import { projects } from '../constans/constans'
const Project = () => {
    return (
        <div className="content" id="Project">
            <div className="container md-auto h-full">
                <p className="text-center justify-center text-xl md:text-2xl py-10 lg:text-3xl text-purple-600 dark:text-purple-50 font-bold border-b-2 border-purple-600 dark:border-purple-50 uppercase">Project</p>
                <div className="grid grid-cols-3 gap-4 items-center">
                    {
                        projects.map( (project)=>{
                            return(
                                <div class="p-4 col-span-3 md:col-span-1 hover:cursor-pointer" key={project.title} onClick={()=> project.url === '/'? '':window.open(project.url, "_blank")}>
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
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Project
