import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Kartya from './components/Kartya'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Kartya id={0} szoba_nev={'test'} szobatipus={'egyéni tanulás'} emelet={0} ferohely={0} foglalt_helyek={0}/>
    </>
  )
}

export default App
