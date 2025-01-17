import { useState, useEffect } from 'react'
import Header from './components/ui/header/Header'
import { TopButton } from './components/ui/TopButton'
import { useLocalStorage } from './hooks/useLocalStorage'

type theme = "light" | "dark";

function App() {
  // this is the main window
  const [theme, setTheme] = useLocalStorage("theme", "light" as theme);
  // this is for the current theme to be deafulted to light

  const changeTheme= () => {
      setTheme(theme === "light" ? "dark" : "light")
  }


  console.log(theme);

  return (
    <>
      <Header />
      <TopButton></TopButton>
      <p>Donc session loula mte3 l vim</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <p>fsdsfasdfjasdlfjasl;kdfjaskld;fjaskldjfasl;kdfjasldfdfs</p>
      <button 
        className='bg-slate-800/80 text-white w-12 h-12 rounded-full shadow-lg transition-all duration-500'
        onClick={() => {
        changeTheme()
      }}>this is a button</button>
    </>
  )
}

export default App
