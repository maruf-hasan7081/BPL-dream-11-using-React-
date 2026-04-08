import { Suspense, useState } from 'react'
import './App.css'
import Baner from './component/Baner/Baner'
import Footer from './component/Footer/Footer'
import Nav from './component/navber/nav'
import Player from './component/players/Player'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const FatchPlayer = async () => {
  const res = await fetch('/data.json')
  return res.json();
}

function App() {

  const [coins, setCoins] = useState(1000000000);

  const playerpromise = FatchPlayer();

  return (
    <>
      <Nav coins={coins} />
      <Baner></Baner>

      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Player
          playerpromise={playerpromise}
          setCoins={setCoins}
          coins={coins}
        />
      </Suspense>

      <Footer />





      <ToastContainer />
    </>
  )
}

export default App