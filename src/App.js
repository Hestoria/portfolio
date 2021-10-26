import React, {useState} from 'react'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Project from './components/Project';
import Timeline from './components/Timeline';
import About from './components/About';
const App = () => {
    const [DarkTheme, setDarkTheme] = useState(true);
    return (
        <div className={DarkTheme ? 'dark app' : 'app'}>
            <div className='bg-gray-100 dark:bg-gray-600 text-purple-800 dark:text-purple-200 min-h-screen main'>
                <Navbar DarkTheme={DarkTheme} setDarkTheme={setDarkTheme}/>
                <Hero DarkTheme={DarkTheme}/>
                <About DarkTheme={DarkTheme}/>
                <Timeline DarkTheme={DarkTheme}/>
                <Project DarkTheme={DarkTheme}/>
            </div>
        </div>
    )
}

export default App
