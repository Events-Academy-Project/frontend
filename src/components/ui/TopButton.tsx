import { useState, useEffect } from "react";
import React from 'react'

export const TopButton = (props: {}) => {

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-blue-500 text-white w-12 h-12 rounded-full shadow-lg transition-all duration-500 ${isScrolling ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0" 
          }`}
        aria-label="Scroll to top"
      >
        &#8593;
      </button>
    </>
  )
}


export default TopButton
