import React from 'react'
import HeroImg from '../assets/heroimg.svg'
import { HashLink } from 'react-router-hash-link'
import { Typewriter } from 'react-simple-typewriter'
import { useSpring, animated } from 'react-spring'
const Hero = () => {
    const righttoleft = useSpring({ 
        from: {x:200, opacity:0}, 
        to: {x:0, opacity:1},
        config: { duration: 1500 },
    })
    const lefttoright = useSpring({ 
        from: {x:-200, opacity:0}, 
        to: {x:0, opacity:1},
        config: { duration: 800 },
    })
    return (
        <div className="content" id='Hero'>
            <div className="container md-auto h-full items-center grid relative overflow-hidden">
                <animated.div style={lefttoright} className="flex flex-col justify-center h-full w-full md:text-left text-center px-4 md:px-24">
                    <div  className="bg-purple-600 rounded-full 
                    h-300 w-575 -left-3/5
                    sm:w-650 sm:-left-1/5
                    lg:h-400 lg:w-700 lg:-left-40
                    md:h-400 md:w-700 md:-left-2/5 absolute "></div>
                    <p className="content-text">hi there!</p>
                    <p className="content-text">I am Sam</p>
                    <p className="content-text break-normal">
                        <Typewriter
                            words={['A Web developer','A Software developer']}
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
                </animated.div>
                <animated.div style={righttoleft} className="md:right-0 md:w-3/5 w-full sm:-top-100 md:absolute">
                    <img className="" src={HeroImg} alt='hero img'></img>
                </animated.div>
            </div>
        </div>
    )
}

export default Hero
