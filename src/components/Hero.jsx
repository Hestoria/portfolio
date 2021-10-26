import React from 'react'
import HeroImg from '../assets/heroimg.svg'
import { HashLink } from 'react-router-hash-link';
import { Typewriter } from 'react-simple-typewriter'
const Hero = () => {
    return (
        <div className="content" id='Hero'>
            <div className="container md-auto h-full items-center grid relative overflow-hidden">
                <div className="flex flex-col justify-center h-full w-full md:text-left text-center px-24">
                    <div className="bg-purple-600 rounded-full 
                    h-300 w-575 -left-3/5
                    sm:w-650 sm:-left-1/5
                    lg:h-400 lg:w-700 lg:-left-40
                    md:h-400 md:w-700 md:-left-2/5 absolute "></div>
                    <p className="content-text">hi there</p>
                    <p className="content-text">im</p>
                    <p className="content-text">
                        <Typewriter
                            words={['hello','world']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </p>
                    <HashLink to="/#About" className="z-10 pt-6"
                        scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
                        <button type="button" className="md:text-left md:text-3xl text-2xl font-bold rounded-2xl px-4 py-2 transition ease-in-out duration-500
                        bg-purple-50 text-purple-500 hover:text-purple-50 hover:bg-purple-800 uppercase" >about me</button>
                    </HashLink>
                </div>
                <div className="md:right-0 md:w-3/5 w-full sm:-top-100 md:absolute">
                    <img className="" src={HeroImg} alt='hero img'></img>
                </div>
            </div>
        </div>
    )
}

export default Hero
