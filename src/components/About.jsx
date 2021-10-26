import React from 'react'
import AboutImg from '../assets/aboutimg.svg'
const About = () => {
    return (
        <div className="content" id='About'>
            <div className="container md-auto h-full grid grid-cols-3 gap-4 justify-center items-center">
                <div className="rounded col-span-3 md:col-span-2 order-2 md:order-1">
                    <img src={AboutImg} alt="about img" />
                </div>
                <div className="rounded col-span-3 md:col-span-1 order-1 md:order-2 justify-center text-center">
                    <p className="text-2xl md:text-3xl lg:text-4xl text-purple-600 dark:text-purple-50 font-bold p-6 ">ABOUT ME</p>
                    <p className="text-lg md:text-xl lg:text-2xl break-words p-4 ">a.sdjkf;lasjdfklajsldkfjalskdfjaksldfjldskjafksdjkkdkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkka;sdfjkaslkdfjdsklfjdklsjfdlks</p>
                    <button type="button" className="font-bold rounded-2xl px-4 py-2 transition duration-500 ease-in-out 
                        bg-purple-600 text-purple-50 hover:text-purple-50 hover:bg-purple-800 uppercase">download CV</button>
                </div>
            </div>
        </div>
    )
}

export default About
