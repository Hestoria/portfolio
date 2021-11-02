import React from 'react'
import AboutImg from '../assets/aboutimg.svg'
import CV from '../assets/LeePoSan_CV.pdf'
const About = () => {
    var aboutme = 'I have just graduated from the Hong Kong Institute of Vocational education,which my major is Software Engineering. Recently, I moved to Canada and seeking an opportunity to begin my career here.'
    return (
        <div className="content" id='About'>
            <div className="container md-auto h-full grid grid-cols-3 gap-4 justify-center items-center">
                <div className="rounded col-span-3 md:col-span-2 order-2 md:order-1">
                    <img src={AboutImg} alt="about img" />
                </div>
                <div className="rounded col-span-3 md:col-span-1 order-1 md:order-2 justify-center text-center">
                    <p className="text-2xl md:text-3xl lg:text-4xl text-purple-600 dark:text-purple-50 font-bold p-6 border-b-2 border-purple-600 dark:border-purple-50">ABOUT ME</p>
                    <p className="text-base md:text-lg break-words p-4 ">{aboutme}</p>
                    <button type="button" className="font-bold rounded-2xl px-4 py-2 transition duration-500 ease-in-out 
                        bg-purple-600 text-purple-50 hover:text-purple-50 hover:bg-purple-800 uppercase"><a href={CV} download>Download CV</a></button>
                </div>
            </div>
        </div>
    )
}

export default About
