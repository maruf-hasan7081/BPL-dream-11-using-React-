import { Suspense } from 'react'
import './App.css'
import Baner from './component/Baner/Baner'
import Footer from './component/Footer/Footer'
import Nav from './component/navber/nav'
import Player from './component/players/Player'

const FatchPlayer = async() => {

  const res = await fetch('/data.json')
  return res.json();


}



function App() {

  const playerpromise= FatchPlayer();
  return (
    <>
    <Nav></Nav>
    <Baner></Baner>
    <Suspense fallback={<span class="loading loading-dots loading-xl"></span>}>

          <Player playerpromise ={playerpromise} />


    </Suspense>
    <Footer />
      
    </>
  )
}

export default App