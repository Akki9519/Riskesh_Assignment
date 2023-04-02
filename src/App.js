import React from 'react'
import './App.css'
import Sidebar from './component/Sidebar'
import Navbar2 from './component/Navbar2'
import Navbar3 from './component/Navbar3'
import Body from './component/Body'
import Data from './component/Data'

const App = () => {
  return (
    <div className="flex flex-row">
      <Sidebar/>
      <div className="flex flex-col">
      <Navbar2/>
      <Navbar3/>
      <Body/>
      <Data/>
      </div>
    </div>
  )
}

export default App