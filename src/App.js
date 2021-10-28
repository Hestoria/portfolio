import React, {useState} from 'react'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Project from './components/Project';
import Technologys from './components/Technologys';
import About from './components/About';
import Footer from './components/Footer';
const App = () => {
    const [DarkTheme, setDarkTheme] = useState(true);
    return (
        <div className={DarkTheme ? 'dark app' : 'app'}>
            <div className='bg-gray-100 dark:bg-gray-600 text-purple-800 dark:text-purple-200 min-h-screen main'>
                <Navbar DarkTheme={DarkTheme} setDarkTheme={setDarkTheme}/>
                <Hero/>
                <About/>
                <Technologys/>
                <Project/>
                <Footer/>
            </div>
        </div>
    )
}

export default App
