import React from 'react'
import AboutImg from '../assets/aboutimg.svg'
const About = () => {
    return (
        <div className="content" id='About'>
            <div className="container md-auto h-full bg-red-300 grid grid-cols-3 gap-4 justify-center items-center">
                <div className="bg-red-600 rounded col-span-3 md:col-span-2 order-1 md:order-2">
                    <img src={AboutImg} alt="about img" />
                </div>
                <div className="bg-red-600 rounded col-span-3 md:col-span-1 order-2 md:order-1">
                    <p className="text-center p-6">ABOUT ME</p>
                    <p className="break-words p-6 text-center">a.sdjkf;lasjdfklajsldkfjalskdfjaksldfjldskjafksdjkkdkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkka;sdfjkaslkdfjdsklfjdklsjfdlks</p>
                    <button>download CV</button>
                </div>
            </div>
        </div>
    )
}

export default About
