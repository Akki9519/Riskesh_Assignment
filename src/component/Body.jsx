import React from 'react'


const Navbar = () => {
  return (
    <div className="bg-slate-100 w-screen h-8 flex flex-row">
    <div className="text-l ml-9">All</div>
    <div className="text-l ml-9">Risk</div>
    <div className="text-l ml-9">On hold</div>
    <div className="text-l ml-9">Potential risk</div>
    <div className="text-l ml-9">On track</div>
    <div className="text-l ml-9">Archived</div>
    </div>
  )
}

export default Navbar