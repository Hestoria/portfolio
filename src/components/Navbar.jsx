import React, { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'

const Navbar = ({ DarkTheme, setDarkTheme }) => {
  const [Open, setOpen] = useState(false)
  const [windowsWidth, setwindowsWidth] = useState(window.innerWidth)
  const Resize = () => {
    setwindowsWidth(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener('resize',Resize)
  },[])

  function MobileMenu() {
    return (
      <div className="p-4 w-full z-20 bg-purple-600 text-purple-50 dark:bg-purple-50 dark:text-purple-600 items-center justify-center sticky top-16 h-session grid grid-cols-1 font-bold">
        <HashLink to="/#About" className="p-4 text-center h-12 uppercase" onClick={ () =>{setOpen(false)}}
          scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
          ABOUT
        </HashLink>
        <HashLink to="/#Technologys" className="p-4 text-center h-12 uppercase" onClick={ () =>{setOpen(false)}}
          scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
          Technologys
        </HashLink>
        <HashLink to="/#Project" className="p-4 text-center h-12 uppercase" onClick={ () =>{setOpen(false)}}
          scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
          Project
        </HashLink>
        <button type="button" onClick={() => setDarkTheme(!DarkTheme)} className="text-xl font-bold bg-purple-600 text-purple-50 dark:bg-purple-50 dark:text-purple-600 rounded-full px-2 py-1 
          hover:bg-purple-50 hover:text-purple-600 dark:hover:text-purple-50 dark:hover:bg-purple-600">
            {DarkTheme ? 'LIGHT 💡' : 'DARK 🌙'}
          </button>
      </div>
    )
  }
  return (
    <>
      <nav className="flex justify-between items-center h-16 sticky top-0 z-20 text-xl font-bold border-b-2 border-purple-600 bg-white dark:border-purple-50 text-purple-600 dark:bg-purple-900 dark:text-purple-50">
        <HashLink to="/#Hero" className="pl-8"
          scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
          <svg className="h-8 w-8" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </HashLink>
        <div className='pr-8 cursor-pointer md:hidden ' onClick={() => {
          setOpen(!Open)
        }}>
          <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <div className="pr-8 md:block hidden ">
          <HashLink to="/#About" className="pr-8 uppercase"
            scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
            ABOUT
          </HashLink>
          <HashLink to="/#Technologys" className="pr-8 uppercase"
            scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
            Technologys
          </HashLink>
          <HashLink to="/#Project" className="pr-8 uppercase"
            scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
            Project
          </HashLink>
          <button type="button" onClick={() => setDarkTheme(!DarkTheme)} className="text-xl font-bold bg-purple-600 text-purple-50 dark:bg-purple-50 dark:text-purple-600 rounded-full px-2 py-1 
          hover:bg-purple-50 hover:text-purple-600 dark:hover:text-purple-50 dark:hover:bg-purple-600">
            {DarkTheme ? 'LIGHT 💡' : 'DARK 🌙'}
          </button>
        </div>
      </nav>
      {Open && windowsWidth <= 768 ? MobileMenu() : ''}
    </>
  );
};


export default Navbar;