import React, { useEffect, useState } from 'react'
import Logo from './Logo'

function Header(props: {}) {

  const [isScrolling, setIsScrolling] = useState(false);

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
          <li className="text-white">Home</li>
          <li className="text-white">About</li>
          <li className="text-white">Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header 
