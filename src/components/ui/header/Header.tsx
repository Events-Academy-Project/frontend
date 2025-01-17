import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import { ThemeSwitch } from './ThemeSwitch';
import useLocalStorage from '../../../hooks/useLocalStorage';

type theme = "light" | "dark";
const [theme, setTheme] = useLocalStorage("theme", "light" as theme);

const changeTheme = () => {
  setTheme(theme === "light" ? "dark" : "light")
}

function Header(props: {
  
}) {

  const [isScrolling, setIsScrolling] = useState(false);

  // detect the scroll position and use it
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])


  return (
    <header
      className={`sticky top-0 z-20 mx-auto flex w-full items-center justify-between transition-all border-e-gray-500 duration-200 ${isScrolling ? "bg-slate-800/80 backdrop-blur-md shadow-md" : "bg-slate-800"
        }`}
    >
      <div className="px-4 py-2 flex items-center">
        <Logo />
      </div>
      <nav className="px-4">
        <ul className="flex space-x-4">
          <ThemeSwitch />
        </ul>
      </nav>
    </header>
  )
}

export default Header 
