import React from 'react'
import Data1 from './Data1'


const Data = () => {
  return (
    <>
    <div className="grid grid-cols-8 bg-blue-400 font-bold">
      <div className="text-l">S.No</div>
      <div className="text-l">Project Name</div>
      <div className="text-l">PM</div>
      <div className="text-l">Status</div>
      <div className="text-l">Last Updated</div>
      <div className="text-l">Resources</div>
      <div className="text-l">project_timeline</div>
      <div className="text-l">Estimation</div>
    </div>
    <div className="flex flex-col  overflow-y-auto overflow-x-none" style={{height:"560px"}}>
    {
      Data1.map((item,key)=>{
        return(
          <div className="grid grid-cols-8 h-16 mt-2 p-5" style={{backgroundColor:"#D9D9D9"}}>
      <div className="text-l">{key}</div>
      <div className="text-l">{item.name}</div>
      <div className="text-l">{item.pm}</div>
      <div className="text-l">{item.status}</div>
      <div className="text-l">{item.Last_updated}</div>
      <div className="text-l">{item.resources}</div>
      <div className="text-l">{item.project_timeline}</div>
      <div className="text-l">{item.Estimation}</div>
    </div>
        )
      })
    }

    </div>
    </>
  )
}

export default Data